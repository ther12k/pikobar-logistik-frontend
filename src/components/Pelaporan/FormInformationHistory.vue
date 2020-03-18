<template>
  <v-container>
    <ValidationObserver v-slot="{ validate, reset }" ref="observer">
      <v-form
        ref="form"
        lazy-validation
      >
        <v-row>
          <v-col
            cols="6"
            md="6"
            sm="12"
          >
            <ValidationProvider v-slot="{ errors }">
              <v-label>Status</v-label>
              <v-radio-group
                v-model="formPasien.last_status"
                :error-messages="errors"
                row
              >
                <v-radio label="ODP" value="ODP" />
                <v-radio label="PDP" value="PDP" />
                <v-radio label="POSITIF" value="POSITIF" />
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
              <v-label>Gejala</v-label>
              <v-textarea
                v-model="formPasien.symptoms"
                solo
              />
            </ValidationProvider>
          </v-col>
          <v-col
            cols="6"
            md="6"
            sm="12"
          >
            <ValidationProvider v-slot="{ errors }">
              <v-label>Riwayat</v-label>
              <v-radio-group
                v-model="formPasien.history_tracing"
                :error-messages="errors"
                column
              >
                <v-radio label="Dari Luar Negeri" value="Dari Luar Negeri" />
                <v-radio label="Kontak Dengan Pasien Positif" value="Kontak Dengan Pasien Positif" />
                <v-radio label="Lain-lain" value="Lain-lain" />
              </v-radio-group>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }">
              <v-label>Dirawat</v-label>
              <v-radio-group
                v-model="formPasien.current_location_type"
                :error-messages="errors"
                row
                @change="handleChange"
              >
                <v-radio label="Rumah" value="0" />
                <v-radio label="Rumah Sakit" value="1" />
              </v-radio-group>
            </ValidationProvider>
            <div v-if="formPasien.current_location_type === '0'">
              <v-label>Alamat</v-label>
              <address-region
                :district-name="formPasien.current_location_district"
                :name-district.sync="formPasien.current_location_district"
                :subdistrict-name="formPasien.current_location_subdistrict"
                :name-sub-district.sync="formPasien.current_location_subdistrict"
                :village-name="formPasien.current_location_village"
                :name-village.sync="formPasien.current_location_village"
                :disabled-address="false"
                :required-address="false"
              />
            </div>
            <ValidationProvider
              v-slot="{ errors }"
              v-if="formPasien.current_location_type === '0'"
            >
              <v-label>Alamat Lengkap Rumah</v-label>
              <v-text-field
                :error-messages="errors"
                v-model="formPasien.current_location_address"
                solo-inverted
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              v-if="formPasien.current_location_type === '1'"
            >
              <v-autocomplete
                v-model="formPasien.current_location_address"
                :items="hospitalList"
                :error-messages="errors"
                label="Lokasi Rumah Sakit"
                menu-props="auto"
                item-text="name"
                item-value="name"
                single-line
                solo
                autocomplete
              />
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-container fluid>
          <v-row class="survey-bottom-form">
            <v-col>
              <v-btn
                bottom
                outlined
                @click="backStep()"
              >
                Kembali
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                color="success"
                bottom
                style="float: right;"
                @click="handleSave"
              >
                Simpan
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </ValidationObserver>
  </v-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import EventBus from '@/utils/eventBus'
import { mapGetters } from 'vuex'
export default {
  name: 'FormInformationHistory',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  props: {
    steps: {
      type: Number,
      default: null
    },
    formPasien: {
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
    await this.$store.dispatch('region/getListHospotal')
  },
  methods: {
    backStep() {
      EventBus.$emit('backSurveySteps', this.steps)
    },
    async handleSave() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
      const response = await this.$store.dispatch('reports/createReportCase', this.formPasien)
      if (response) {
        await this.$store.dispatch('reports/resetFormPasien')
        await this.$store.dispatch('toast/successToast', this.$t('success.create_date_success'))
        this.$router.push('/laporan/index')
      }
    },
    handleChange(value) {
      if (value === '0') {
        this.formPasien.current_location_address = ''
      } else {
        this.formPasien.current_location_address = ''
        this.formPasien.current_location_district = ''
        this.formPasien.current_location_subdistrict = ''
        this.formPasien.current_location_village = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
