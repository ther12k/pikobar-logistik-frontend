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
              rules="required|isHtml"
            >
              <v-label class="label-answer required">Nama Pasien</v-label>
              <v-text-field
                :error-messages="errors"
                v-model="formPasien.name"
                solo-inverted
              />
            </ValidationProvider>
            <v-label>Tanggal Lahir</v-label>
            <input-date-picker
              :date-value="formPasien.birth_date"
              :format-date="formatDate"
              @changeDate="formPasien.birth_date = $event"
            />
            <ValidationProvider v-slot="{ errors }">
              <v-label>Usia</v-label>
              <v-text-field
                v-model="formPasien.age"
                solo-inverted
                type="number"
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }">
              <v-label>Pekerjaan</v-label>
              <v-text-field
                v-model="formPasien.occupation"
                solo-inverted
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
          </v-col>
          <v-col
            cols="6"
            md="6"
            sm="12"
          >
            <ValidationProvider
              v-slot="{ errors }"
            >
              <v-label>No Kasus</v-label>
              <v-text-field
                :error-messages="errors"
                v-model="formPasien.id_case"
                solo-inverted
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }">
              <v-label>Nomor Telepone</v-label>
              <v-text-field
                v-model="formPasien.phone_number"
                solo-inverted
              />
            </ValidationProvider>
            <v-label>Alamat</v-label>
            <address-region
              :district-code="formPasien.address_district_code"
              :district-name="formPasien.address_district_name"
              :code-district.sync="formPasien.address_district_code"
              :name-district.sync="formPasien.address_district_name"
              :subdistrict-code="formPasien.address_subdistrict_code"
              :subdistrict-name="formPasien.address_subdistrict_name"
              :code-sub-district.sync="formPasien.address_subdistrict_code"
              :name-sub-district.sync="formPasien.address_subdistrict_name"
              :village-code="formPasien.address_village_code"
              :village-name="formPasien.address_village_name"
              :code-village.sync="formPasien.address_village_code"
              :name-village.sync="formPasien.address_village_name"
              :disabled-address="false"
              :required-address="false"
            />
            <ValidationProvider v-slot="{ errors }">
              <v-label>Alamat Lengkap</v-label>
              <v-textarea
                v-model="formPasien.address_street"
                solo
              />
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-container fluid>
          <v-row class="survey-bottom-form">
            <v-col>
              <v-btn
                color="success"
                bottom
                style="float: right;"
                @click="onNext"
              >
                Lanjutkan
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
  name: 'FormInformationPatient',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
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
      formatDate: 'YYYY-MM-DD'
    }
  },
  methods: {
    async onNext() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
      EventBus.$emit('nextSurveySteps', this.steps)
    }
  }
}
</script>
