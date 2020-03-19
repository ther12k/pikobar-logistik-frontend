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
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Status</label>
              <v-radio-group
                v-model="formPasien.status"
                :error-messages="errors"
                row
              >
                <v-radio label="ODP" value="ODP" />
                <v-radio label="PDP" value="PDP" />
                <v-radio label="POSITIF" value="POSITIF" />
              </v-radio-group>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">State</label>
              <v-radio-group
                v-model="formPasien.stage"
                :error-messages="errors"
                row
              >
                <v-radio label="Proses" value="0" />
                <v-radio label="Selesai" value="1" />
              </v-radio-group>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="required|atLeastOne">
              <label class="required">Gejala</label>
              <div v-for="(item, index) in optionGejala" :key="index">
                <label class="material-checkbox-custom">
                  <input
                    :value="item.value"
                    v-model="formPasien.diagnosis"
                    type="checkbox"
                  >
                  <span v-if="errors.length" class="error--text">{{ item.text }}</span>
                  <span v-else>{{ item.text }}</span>
                </label>
              </div>
              <span
                v-if="errors.length"
                class="v-messages error--text"
              >{{ errors[0] }}</span>
            </ValidationProvider>
          </v-col>
          <v-col
            cols="6"
            md="6"
            sm="12"
          >
            <ValidationProvider v-slot="{ errors }">
              <v-label>Riwayat</v-label>
              <v-checkbox
                v-model="formPasien.history_tracing"
                label="Dari Luar Negeri"
                value="Dari Luar Negeri"
              />
              <v-checkbox
                v-model="formPasien.history_tracing"
                label="Kontak Dengan Pasien Positif"
                value="Kontak Dengan Pasien Positif"
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
            >
              <v-text-field
                v-model="formPasien.history_notes"
                placeholder="Masukkan Riwayat Lainnya Jika Ada"
                solo-inverted
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Lokasi Saat Ini</label>
              <v-radio-group
                v-model="formPasien.current_location_type"
                :error-messages="errors"
                row
                @change="handleChange"
              >
                <v-radio label="Rumah" value="RUMAH" />
                <v-radio label="Rumah Sakit" value="RS" />
              </v-radio-group>
            </ValidationProvider>
            <div v-if="formPasien.current_location_type === 'RUMAH'">
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
              v-if="formPasien.current_location_type === 'RUMAH'"
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
              v-if="formPasien.current_location_type === 'RS'"
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
import { optionGejala } from '@/utils/constantVariable'
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
  data() {
    return {
      optionGejala: optionGejala
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
      if (value === 'RUMAH') {
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
