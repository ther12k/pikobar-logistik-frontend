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
              <label class="required">Nama Pasien</label>
              <v-text-field
                :error-messages="errors"
                v-model="formPasien.name"
                solo-inverted
              />
            </ValidationProvider>
            <label class="required">Tanggal Lahir</label>
            <input-date-picker
              :date-value="formPasien.birth_date"
              :format-date="formatDate"
              @changeDate="formPasien.birth_date = $event"
            />
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|isHtml"
            >
              <label class="required">Usia</label>
              <v-text-field
                :error-messages="errors"
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
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Jenis Kelamin</label>
              <v-radio-group
                v-model="formPasien.gender"
                :error-messages="errors"
                row
              >
                <v-radio label="Laki-Laki" value="L" />
                <v-radio label="Perempuan" value="P" />
              </v-radio-group>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Kewarganegaraan</label>
              <v-radio-group
                v-model="formPasien.nationality"
                :error-messages="errors"
                row
                @change="handleChangeNationality"
              >
                <v-radio label="WNI" value="WNI" />
                <v-radio label="WNA" value="WNA" />
              </v-radio-group>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              v-if="formPasien.nationality === 'WNA'"
            >
              <v-text-field
                v-model="formPasien.nationality_name"
                :error-messages="errors"
                placeholder="Negara Asal"
                solo-inverted
              />
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
              <v-label>ID Kasus Pusat</v-label>
              <v-text-field
                :error-messages="errors"
                v-model="formPasien.id_case_national"
                solo-inverted
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
            >
              <v-label>ID Kasus Terkait</v-label>
              <v-text-field
                :error-messages="errors"
                v-model="formPasien.id_case_related"
                solo-inverted
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }">
              <v-label>Nomor Telepon</v-label>
              <v-text-field
                v-model="formPasien.phone_number"
                solo-inverted
                type="number"
              />
            </ValidationProvider>
            <label class="required">Alamat</label>
            <address-region
              :district-code="formPasien.address_district_code"
              :district-name="formPasien.address_district_name"
              :code-district.sync="formPasien.address_district_code"
              :name-district.sync="formPasien.address_district_name"
              :sub-district-code="formPasien.address_subdistrict_code"
              :sub-district-name="formPasien.address_subdistrict_name"
              :code-sub-district.sync="formPasien.address_subdistrict_code"
              :name-sub-district.sync="formPasien.address_subdistrict_name"
              :village-code="formPasien.address_village_code"
              :village-name="formPasien.address_village_name"
              :code-village.sync="formPasien.address_village_code"
              :name-village.sync="formPasien.address_village_name"
              :disabled-address="false"
              :required-address="true"
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
import { mapGetters } from 'vuex'
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
      formatDate: 'MM/DD/YYYY'
    }
  },
  computed: {
    ...mapGetters('user', [
      'fullname',
      'district_user'
    ]),
    ...mapGetters('region', [
      'listDistrictCity'
    ])
  },
  watch: {
    'formPasien.birth_date': function(value) {
      this.formPasien.age = this.getAge(value)
    }
  },
  async mounted() {
    this.formPasien.address_district_name = this.fullname
    // const index = await this.listDistrictCity.map(function(data) {
    //   return data.kota_kode
    // }).indexOf(this.district_user)
    // if (this.listDistrictCity[index]) {
    //   this.formPasien.address_district_name = this.listDistrictCity[index].kota_nama
    // }
  },
  methods: {
    async onNext() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
      EventBus.$emit('nextSurveySteps', this.steps)
    },
    getAge(DOB) {
      const today = new Date()
      const birthDate = new Date(DOB)
      let age = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1
      }
      return age
    },
    handleChangeNationality(value) {
      if (value === 'WNI') {
        this.formPasien.nationality_name = ''
      }
    }
  }
}
</script>
