<template>
  <div class="pelaporan">
    <v-card
      outlined
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            style="padding: 2rem;"
          >
            <ValidationObserver v-slot="{ validate, reset }" ref="observer">
              <v-form
                ref="form"
                lazy-validation
              >
                <ValidationProvider
                  v-slot="{ errors }"
                >
                  <v-text-field
                    :error-messages="errors"
                    v-model="formPasien.identity_case"
                    label="Identity Case"
                    placeholder="Tuliskan Identity Case"
                  />
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                >
                  <v-text-field
                    :error-messages="errors"
                    v-model="formPasien.national_identity_number"
                    label="National Identity Case"
                    placeholder="Tuliskan National Identity Case"
                  />
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                >
                  <v-text-field
                    v-model="formPasien.related_identity_number"
                    :error-messages="errors"
                    label="Related Identity Number"
                    placeholder="Tuliskan Related Identity Number"
                  />
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|isHtml"
                >
                  <v-text-field
                    :error-messages="errors"
                    v-model="formPasien.name"
                    label="Nama Pasien"
                    placeholder="Tuliskan Nama Pasien"
                    required
                  />
                </ValidationProvider>
                <input-date-picker
                  :date-value="formPasien.birth_date"
                  :format-date="formatDate"
                  label="Tanggal Lahir"
                  @changeDate="formPasien.birth_date = $event"
                />
                <ValidationProvider v-slot="{ errors }">
                  <v-text-field
                    v-model="formPasien.phone_number"
                    label="Nomor Telepone"
                  />
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }">
                  <v-text-field
                    v-model="formPasien.age"
                    label="Usia Pasien"
                    type="number"
                  />
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }">
                  <v-label>Kewarganegaraan</v-label>
                  <v-radio-group
                    v-model="formPasien.nationality_type"
                    row
                  >
                    <v-radio label="WNI" value="WNI" />
                    <v-radio label="WNA" value="WNA" />
                  </v-radio-group>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }">
                  <v-text-field
                    v-model="formPasien.occupation"
                    label="Pekerjaan"
                  />
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }">
                  <v-label>Jenis Kelamin</v-label>
                  <v-radio-group
                    v-model="formPasien.gender"
                    row
                  >
                    <v-radio label="Laki-Laki" value="L" />
                    <v-radio label="Perempuan" value="P" />
                  </v-radio-group>
                </ValidationProvider>
                <v-label>Alamat</v-label>
                <address-region
                  :village-array="formPasien.address_village_code"
                  :disabled-address="false"
                  :required-address="false"
                />
                <ValidationProvider v-slot="{ errors }">
                  <v-textarea
                    v-model="formPasien.address_street"
                    label="Alamat Lengkap"
                  />
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }">
                  <v-autocomplete
                    v-model="formPasien.current_location"
                    :items="hospitalList"
                    :error-messages="errors"
                    label="Lokasi Pengawasan"
                    menu-props="auto"
                    item-text="name"
                    single-line
                    autocomplete
                  />
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }">
                  <v-select
                    v-model="formPasien.current_hospital_id"
                    label="Dinkes Kota/Kab"
                  />
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }">
                  <v-label>Status</v-label>
                  <v-radio-group
                    v-model="formPasien.status"
                    :error-messages="errors"
                    row
                  >
                    <v-radio label="ODP" value="ODP" />
                    <v-radio label="PDP" value="PDP" />
                    <v-radio label="Positif" value="Positif" />
                  </v-radio-group>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }">
                  <v-label>State</v-label>
                  <v-radio-group
                    v-model="formPasien.stage"
                    :error-messages="errors"
                    row
                  >
                    <v-radio label="Proses" value="0" />
                    <v-radio label="Selesai" value="1" />
                  </v-radio-group>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }">
                  <v-label>Hasil</v-label>
                  <v-radio-group
                    v-model="formPasien.final_result"
                    :error-messages="errors"
                    row
                  >
                    <v-radio label="Negatif" value="0" />
                    <v-radio label="Meninggal" value="1" />
                    <v-radio label="Sembuh" value="3" />
                  </v-radio-group>
                </ValidationProvider>
              </v-form>
            </ValidationObserver>
          </v-col>
        </v-row>
        <v-container fluid>
          <v-row class="survey-bottom-form">
            <v-col>
              <v-btn
                color="success"
                bottom
                style="float: right;"
                @click="handleSave"
              >
                Simpan
              </v-btn>
              <v-btn
                color="grey"
                bottom
                outlined
                style="float: right;margin-right: 12px;"
                @click="handleBack"
              >
                Batal
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapGetters } from 'vuex'
export default {
  name: 'PelaporanForm',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formatDate: 'YYYY-MM-DD'
    }
  },
  computed: {
    ...mapGetters('reports', [
      'formPasien'
    ]),
    ...mapGetters('region', [
      'hospitalList'
    ])
  },
  async mounted() {
    this.$store.dispatch('region/getListHospotal')
  },
  methods: {
    handleBack() {
      this.$router.push('/laporan/index')
    },
    async handleSave() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
      console.log(this.formPasien)
      this.$store.dispatch('reports/createReportCase', this.formPasien)
      console.log(this.formPasien)
      // this.$router.push('/laporan/index')
    }
  }
}
</script>
