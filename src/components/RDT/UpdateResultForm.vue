<template>
  <div class="rdt-result-update">
    <v-card
      outlined
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            style="padding: 2rem;"
          >
            <ValidationObserver ref="observer">
              <v-form
                ref="form"
                lazy-validation
              >
                <ValidationProvider>
                  <v-label>Hasil Test</v-label>
                  <v-radio-group
                    v-model="formRapid.final_result"
                    row
                  >
                    <v-radio label="Positif" value="POSITIF" />
                    <v-radio label="Negatif" value="NEGATIF" />
                    <v-radio label="Invalid" value="INVALID" />

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
                Kembali
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
export default {
  name: 'UpdateResultForm',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    idData: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      formatDate: 'YYYY-MM-DD',
      formRapid: {
        final_result: null
      }
    }
  },
  async mounted() {
    const response = await this.$store.dispatch('rdt/detailParticipant', this.idData)
    Object.assign(this.formRapid, response.data)
  },
  methods: {
    handleBack() {
      this.$router.push('/rdt/list')
    },
    async handleSave() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }

      const updateFinalRDT = {
        id: this.idData,
        data: this.formRapid
      }

      this.$store.dispatch('rdt/updateRDT', updateFinalRDT)
      this.$router.push('/rdt/list')
    }
  }
}
</script>
