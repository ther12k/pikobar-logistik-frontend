<template>
  <div>
    <h4 class="font-weight-bold" style="color:#43A047">Hasil Pengetesan</h4>
    <v-divider />
    <ValidationObserver ref="observer">
      <v-form
        ref="form"
        lazy-validation
      >
        <v-row>
          <v-col
            cols="12"
            md="6"
            sm="12"
          >
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Hasil Test</label>
              <v-radio-group
                v-model="formResult.final_result"
                :error-messages="errors"
                row
              >
                <v-radio label="Positif" value="POSITIF" />
                <v-radio label="Negatif" value="NEGATIF" />
                <v-radio label="Invalid" value="INVALID" />
              </v-radio-group>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Tempat Pengetesan</label>
              <v-radio-group
                v-model="formResult.test_location_type"
                :error-messages="errors"
                row
                @change="handleChangeLocationNow"
              >
                <v-radio label="Rumah Sakit" value="RS" />
                <v-radio label="Lainnya" value="LAINNYA" />
              </v-radio-group>
            </ValidationProvider>
            <ValidationProvider
              v-if="formResult.test_location_type === 'RS'"
              v-slot="{ errors }"
              rules="required"
            >
              <v-autocomplete
                v-model="formResult.test_location"
                :items="hospitalList"
                :return-object="false"
                :error-messages="errors"
                label="Pilih tempat pengetesan"
                menu-props="auto"
                item-text="name"
                item-value="name"
                single-line
                solo
                autocomplete
                @change="onSelectHospital"
              />
            </ValidationProvider>
            <ValidationProvider
              v-if="formResult.test_location_type === 'LAINNYA'"
              v-slot="{ errors }"
            >
              <v-text-field
                v-model="formResult.test_other_location"
                :error-messages="errors"
                placeholder="Masukan nama tempat"
                solo-inverted
              />
            </ValidationProvider>
            <div v-if="formResult.test_location_type === 'LAINNYA'">
              <address-region
                v-model="formResult.test_address_district_name"
                :district-code="formResult.test_address_district_code"
                :district-name="formResult.test_address_district_name"
                :code-district.sync="formResult.test_address_district_code"
                :name-district.sync="formResult.test_address_district_name"
                :sub-district-code="formResult.test_address_subdistrict_code"
                :sub-district-name="formResult.test_address_subdistrict_name"
                :code-sub-district.sync="formResult.test_address_subdistrict_code"
                :name-sub-district.sync="formResult.test_address_subdistrict_name"
                :village-code="formResult.test_address_village_code"
                :village-name="formResult.test_address_village_name"
                :code-village.sync="formResult.test_address_village_code"
                :name-village.sync="formResult.test_address_village_name"
                :disabled-address="true"
                :required-address="true"
              />
            </div>
            <label v-if="formResult.test_location_type === 'LAINNYA'">Alamat Lengkap Tempat Pengetesan</label>
            <v-textarea
              v-if="formResult.test_location_type === 'LAINNYA'"
              v-model="formResult.test_address_detail"
              solo
            />
          </v-col>
          <v-col>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Jenis Alat Pengetesan</label>
              <v-radio-group
                v-model="formResult.tool_tester"
                :error-messages="errors"
                row
              >
                <v-radio label="Rapid Test" value="RAPID TEST" />
                <v-radio label="PCR" value="PCR" />
              </v-radio-group>
            </ValidationProvider>
            <ValidationProvider
              v-if="formResult.tool_tester === 'RAPID TEST'"
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Metode yang digunakan</label>
              <v-radio-group
                v-model="formResult.test_method"
                :error-messages="errors"
                row
              >
                <v-radio label="Hand Prix" value="HAND PRIX" />
                <v-radio label="Flebotomy" value="FLEBOTOMY" />
              </v-radio-group>
            </ValidationProvider>
            <label class="required">Tanggal Pengetesan</label>
            <input-date-picker
              :label="'Tanggal Pengetesan'"
              :format-date="'YYYY/MM/DD'"
              :date-value="formResult.test_date"
              :value-date.sync="formResult.test_date"
              @changeDate="formResult.test_date = $event"
            />
            <label>Keterangan Tambahan</label>
            <v-textarea
              v-model="formResult.test_note"
              solo
            />
          </v-col>
        </v-row>
      </v-form>
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapGetters } from 'vuex'

export default {
  name: 'FormResult',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  props: {
    formResult: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapGetters('region', [
      'hospitalList'
    ]),
    ...mapGetters('user', [
      'district_user'
    ])
  },
  async mounted() {
    await this.$store.dispatch('region/getListHospital')
  },
  methods: {
    handleChangeLocationNow(value) {
      if (value === 'LAINNYA') {
        this.formResult.test_location = null
        this.getCity()
      } else {
        this.formResult.test_address_district_code = ''
        this.formResult.test_address_district_name = ''
        this.formResult.test_address_subdistrict_code = ''
        this.formResult.test_address_subdistrict_name = ''
        this.formResult.test_address_village_code = ''
        this.formResult.test_address_village_name = ''
        this.formResult.test_address_detail = ''
        this.formResult.test_other_location = ''
        this.formResult.test_location = null
      }
    },
    onSelectHospital(value) {
      this.formResult.test_location = value
    },
    async getCity() {
      const responseDetails = await this.$store.dispatch('region/getDetailDistrict', this.district_user)
      if (responseDetails.data[0]) {
        this.formResult.test_address_district_name = responseDetails.data[0].kota_nama
        this.formResult.test_address_district_code = responseDetails.data[0].kota_kode
      }
    }
  }
}
</script>
