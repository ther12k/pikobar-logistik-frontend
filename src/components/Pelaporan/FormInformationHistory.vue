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
              >
                <v-radio label="Rumah" value="0" />
                <v-radio label="Rumah Sakit" value="1" />
              </v-radio-group>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
            >
              <v-label>Rumah Sakit</v-label>
              <v-text-field
                :error-messages="errors"
                v-model="formPasien.current_location_address"
                solo-inverted
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
    }
  }
}
</script>

<style scoped>

</style>
