<template>
  <div>
    <h1>Hasil Pengetesan</h1>
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
                v-model="formResult.result"
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
                v-model="formResult.location_test"
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
              v-if="formResult.location_test === 'Lainnya'"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                placeholder="Masukan nama tempat"
                :error-messages="errors"
                solo-inverted
              />
            </ValidationProvider>
            <ValidationProvider
              v-if="formResult.location_test === 'Lainnya'"
              v-slot="{ errors }"
              rules="required"
            >
              <address-region
                :error-messages="errors"
                :district-code="formResult.current_location_district_code"
                :code-district.sync="formResult.current_location_district_code"
                :sub-district-code="formResult.current_location_subdistrict_code"
                :code-sub-district.sync="formResult.current_location_subdistrict_code"
                :village-code="formResult.current_location_village_code"
                :code-village.sync="formResult.current_location_village_code"
                :disabled-address="false"
                :required-address="true"
              />
            </ValidationProvider>
            <label v-if="formResult.location_test === 'Lainnya'">Alamat Lengkap Tempat Pengetesan</label>
            <v-textarea
              v-if="formResult.location_test === 'Lainnya'"
              v-model="formResult.current_location_address"
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
                v-model="formResult.test_type"
                :error-messages="errors"
                row
              >
                <v-radio label="Rapid Test" value="RAPID TEST" />
                <v-radio label="PCR" value="PCR" />
              </v-radio-group>
            </ValidationProvider>
            <ValidationProvider
              v-if="formResult.test_type === 'RAPID TEST'"
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Metode yang digunakan</label>
              <v-radio-group
                v-model="formResult.model_test"
                :error-messages="errors"
                row
              >
                <v-radio label="Hand Prix" value="HAND PRIX" />
                <v-radio label="Flebotomy" value="FLEBOTOMY" />
              </v-radio-group>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Tanggal Pengetesan</label>
              <v-menu
                v-model="formResult.date_test"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :value="computedDateFormattedMomentjs"
                    :error-messages="errors"
                    clearable
                    readonly
                    solo
                    v-on="on"
                    @click:clear="date = null"
                  />
                </template>
                <v-date-picker
                  v-model="date"
                  @change="formResult.date_test = false"
                />
              </v-menu>
            </ValidationProvider>
            <label>Keterangan Tambahan</label>
            <v-textarea
              v-model="formResult.notes"
              solo
            />
          </v-col>
        </v-row>
        <v-btn @click="add(formResult)">Kirim</v-btn>
      </v-form>
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'FormResult',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      formResult: {
        result: null,
        location_test: null,
        current_location_district_code: '',
        current_location_subdistrict_code: '',
        current_location_village_code: '',
        current_location_address: '',
        test_type: 'RAPID TEST',
        model_test: null,
        date_test: false,
        notes: null
      }
    }
  },
  computed: {
    ...mapGetters('region', [
      'hospitalList'
    ]),
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format('YYYY/MM/DD') : ''
    }
  },
  async mounted() {
    await this.$store.dispatch('region/getListHospital')
    this.hospitalList.push('Lainnya')
    // this.add(this.formResult)
  },
  methods: {
    async add(data) {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
    }
  }
}
</script>
