<template>
  <v-container>
    <ValidationObserver ref="observer">
      <v-form
        ref="form"
        lazy-validation
      >
        <v-row>
          <v-col>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Pilih Tipe Sasaran</label>
              <v-select
                v-model="formRapid.type_target"
                :error-messages="errors"
                :items="items"
                solo
                @change="onChangeType"
              />
            </ValidationProvider>
          </v-col>
          <v-col>
            <autocomplete-cases
              :on-select-case="onSelectCase"
              :disabled-case="isODP"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <ValidationProvider
              v-slot="{ errors }"
            >
              <label>NIK</label>
              <v-text-field
                v-model="formRapid.nik"
                :error-messages="errors"
                solo-inverted
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|isHtml"
            >
              <label class="required">Nama Peserta</label>
              <v-text-field
                v-model="formRapid.name"
                :error-messages="errors"
                solo-inverted
              />
            </ValidationProvider>
            <label>Tanggal Lahir</label>
            <select-datetime
              :datetime="formRapid.birth_date"
              :date-time.sync="formRapid.birth_date"
              :formate-date="formatDate"
            />
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|isHtml"
            >
              <label class="required">Usia</label>
              <v-text-field
                v-model="formRapid.age"
                :error-messages="errors"
                solo-inverted
                type="number"
              />
            </ValidationProvider>

          </v-col>
          <v-col cols="6">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Jenis Kelamin</label>
              <v-radio-group
                v-model="formRapid.gender"
                :error-messages="errors"
                row
              >
                <v-radio label="Laki-Laki" value="L" />
                <v-radio label="Perempuan" value="P" />
              </v-radio-group>
            </ValidationProvider>
            <label class="required">Alamat Tempat Tinggal</label>
            <address-region
              v-model="formRapid.address_district_name"
              :district-code="formRapid.address_district_code"
              :district-name="formRapid.address_district_name"
              :code-district.sync="formRapid.address_district_code"
              :name-district.sync="formRapid.address_district_name"
              :sub-district-code="formRapid.address_subdistrict_code"
              :sub-district-name="formRapid.address_subdistrict_name"
              :code-sub-district.sync="formRapid.address_subdistrict_code"
              :name-sub-district.sync="formRapid.address_subdistrict_name"
              :village-code="formRapid.address_village_code"
              :village-name="formRapid.address_village_name"
              :code-village.sync="formRapid.address_village_code"
              :name-village.sync="formRapid.address_village_name"
              :disabled-address="false"
              :required-address="true"
            />
            <ValidationProvider>
              <label>Alamat Lengkap Tempat Tinggal</label>
              <v-textarea
                v-model="formRapid.address_street"
                solo
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Nomor Telepon</label>
              <v-text-field
                v-model="formRapid.phone_number"
                :error-messages="errors"
                solo-inverted
                type="number"
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
                @click="saveData"
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
import { getAge } from '@/utils/constantVariable'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      formatDate: 'YYYY/MM/DD',
      isODP: true,
      items: [
        'ODP',
        'Kluster',
        'Kontak erat dengan positif',
        'Anggota keluarga PDP',
        'Tenaga kesehatan di zona merah'
      ],
      formRapid: {
        id_case: '',
        type_target: null,
        nik: null,
        name: null,
        birth_date: '',
        age: null,
        gender: null,
        address_district_code: '',
        address_district_name: '',
        address_subdistrict_code: '',
        address_subdistrict_name: '',
        address_village_code: '',
        address_village_name: '',
        address_street: null,
        phone_number: null
      }
    }
  },
  watch: {
    'formRapid.birth_date': function(value) {
      if ((value !== '') && (value !== null) && (value !== 'Invalid date')) {
        this.formRapid.age = this.getAge(value)
      }
    }
  },
  async mounted() {
    if (this.$route.params && this.$route.params.id) {
      const response = await this.$store.dispatch('rdt/detailParticipant', this.$route.params.id)
      await Object.assign(this.formRapid, response.data)
    }
  },
  methods: {
    getAge,
    async onSelectCase(value) {
      if (value) {
        const response = await this.$store.dispatch('reports/detailReportCase', value)
        await Object.assign(this.formRapid, response.data)
      }
    },
    async onChangeType(value) {
      if (value === 'ODP') {
        this.isODP = false
      } else {
        this.isODP = true
        this.formRapid.id_case = null
        this.formRapid.nik = null
        this.formRapid.name = null
        this.formRapid.birth_date = ''
        this.formRapid.age = null
        this.formRapid.gender = null
        this.formRapid.address_district_code = ''
        this.formRapid.address_district_name = ''
        this.formRapid.address_subdistrict_code = ''
        this.formRapid.address_subdistrict_name = ''
        this.formRapid.address_village_code = ''
        this.formRapid.address_village_name = ''
        this.formRapid.address_street = null
        this.formRapid.phone_number = null
      }
    },
    async saveData() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
      let response
      if (this.$route.params.id) {
        const updateParticipant = {
          id: this.$route.params.id,
          data: this.formRapid
        }
        response = await this.$store.dispatch('rdt/updateRDT', updateParticipant)
      } else {
        response = await this.$store.dispatch('rdt/createRDT', this.formRapid)
      }
      if (response.status !== 422) {
        await this.$store.dispatch('toast/successToast', this.$t('success.create_date_success'))
        this.$router.push('/rdt/list')
        await this.$refs.form.reset()
      }
    }
  }
}
</script>
