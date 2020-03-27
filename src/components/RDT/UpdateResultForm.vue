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
                    v-model="formPasien.gender"
                    row
                  >
                    <v-radio label="Positif" value="L" />
                    <v-radio label="Negatif" value="P" />
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
                Simpan dan Tambah Ke Laporan Kasus
              </v-btn>
              <v-btn
                color="grey"
                bottom
                outlined
                style="float: right;margin-right: 12px;"
                @click="handleBack"
              >
                Simpan
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
  name: 'UpdateResultForm',
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
    ])
  },
  methods: {
    handleBack() {
      this.$router.push('/rdt/index')
    },
    async handleSave() {
      // const valid = await this.$refs.observer.validate()
      // if (!valid) {
      //   return
      // }
      // this.$store.dispatch('reports/createReportCase', this.formPasien)
      this.$router.push('/rdt/index')
    }
  }
}
</script>
