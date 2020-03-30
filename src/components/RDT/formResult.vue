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
              <v-autocomplete
                v-model="formResult.test_location"
                :items="hospitalList"
                :return-object="true"
                :error-messages="errors"
                label="Pilih tempat pengetesan"
                menu-props="auto"
                item-text="name"
                item-value="name"
                single-line
                solo
                autocomplete
              />
            </ValidationProvider>
            <ValidationProvider
              v-if="formResult.test_location === 'Lainnya'"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                v-model="formResult.test_other_location"
                placeholder="Masukan nama tempat"
                :error-messages="errors"
                solo-inverted
              />
            </ValidationProvider>
            <ValidationProvider
              v-if="formResult.test_location === 'Lainnya'"
              v-slot="{ errors }"
              rules="required"
            >
              <address-region
                :error-messages="errors"
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
                :disabled-address="false"
                :required-address="true"
              />
            </ValidationProvider>
            <label v-if="formResult.test_location === 'Lainnya'">Alamat Lengkap Tempat Pengetesan</label>
            <v-textarea
              v-if="formResult.test_location === 'Lainnya'"
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
    ])
  },
  async mounted() {
    await this.$store.dispatch('region/getListHospital')
    this.hospitalList.push('Lainnya')
  }
}
</script>
