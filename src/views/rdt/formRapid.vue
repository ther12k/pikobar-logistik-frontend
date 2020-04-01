<template>
  <v-container>
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
              <label class="required">Kategori</label>
              <v-select
                v-model="formRapid.category"
                :error-messages="errors"
                :items="items"
                item-text="label"
                item-value="value"
                solo
                @change="onChangeCategory"
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Mekanisme</label>
              <v-select
                v-model="formRapid.mechanism"
                :error-messages="errors"
                :items="mechanismOptions"
                solo
              />
            </ValidationProvider>
          </v-col>
          <v-col>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Sasaran</label>
              <v-select
                v-model="formRapid.target"
                :error-messages="errors"
                :items="targetOptions"
                item-text="targets"
                item-value="targets"
                solo
                @change="onChangeType"
              />
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <autocomplete-cases
              :on-select-case="onSelectCase"
              :disabled-case="isODP"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="6"
            sm="12"
          >
            <ValidationProvider
              v-slot="{ errors }"
              rules="numeric"
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
                min="0"
                solo-inverted
                type="number"
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <label class="required">Kewarganegaraan</label>
              <v-radio-group
                v-model="formRapid.nationality"
                :error-messages="errors"
                row
              >
                <v-radio label="WNI" value="WNI" />
                <v-radio label="WNA" value="WNA" />
              </v-radio-group>
            </ValidationProvider>
            <ValidationProvider
              v-if="formRapid.nationality === 'WNA'"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                v-model="formRapid.nationality_name"
                :error-messages="errors"
                placeholder="Negara Asal"
                solo-inverted
              />
            </ValidationProvider>
          </v-col>
          <v-col>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|isHtml"
            >
              <label class="required">Nama</label>
              <v-text-field
                v-model="formRapid.name"
                :error-messages="errors"
                solo-inverted
              />
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
              rules="required|isPhoneNumber"
            >
              <label class="required">Nomor Telepon</label>
              <v-text-field
                v-model="formRapid.phone_number"
                :error-messages="errors"
                placeholder="08xxxxxxxxx"
                solo-inverted
                type="number"
              />
            </ValidationProvider>
          </v-col>
        </v-row>
        <form-result
          :form-result="formResult"
          :result-form.sync="formResult"
        />
        <v-container fluid>
          <v-row class="survey-bottom-form">
            <v-col cols="" md="4" sm="0" />
            <v-col cols="12" md="3" sm="12">
              <v-btn
                color="success"
                :disabled="formResult.final_result === 'POSITIF'"
                bottom
                style="float: right; color: white"
                @click="saveData"
              >
                Simpan
              </v-btn>
            </v-col>
            <v-col cols="12" md="5" sm="12">
              <v-btn
                color="blue"
                :disabled="formResult.final_result !== 'POSITIF'"
                bottom
                style="float: left; color: white"
                @click="saveRdtAndCase"
              >
                Simpan  & Tambahkan Dilaporan Kasus
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
import { mapGetters } from 'vuex'
import { fetchPostUpdate } from '@/api'

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
        {
          label: 'Kategori A',
          value: 'A'
        },
        {
          label: 'Kategori B',
          value: 'B'
        },
        {
          label: 'Kategori C',
          value: 'C'
        }
      ],
      mechanismOptions: [
        'Door to door',
        'Faskes',
        'Drive-Thru'
      ],
      targetOptions: [],
      formRapid: {
        id: '',
        id_case: '',
        target: '',
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
        address_villagenationality_name: '',
        address_street: null,
        phone_number: null,
        category: null,
        mechanism: null,
        nationality: null,
        nationality_name: null
      },
      formResult: {
        final_result: null,
        test_location: null,
        test_location_type: '',
        test_other_location: '',
        test_address_district_code: '',
        test_address_district_name: '',
        test_address_subdistrict_code: '',
        test_address_subdistrict_name: '',
        test_address_village_code: '',
        test_address_village_name: '',
        test_address_detail: '',
        tool_tester: 'RAPID TEST',
        test_method: null,
        test_date: null,
        test_note: null
      }
    }
  },
  computed: {
    ...mapGetters('user', [
      'district_user'
    ])
  },
  watch: {
    'formRapid.birth_date': function(value) {
      if ((value !== '') && (value !== null) && (value !== 'Invalid date')) {
        this.formRapid.age = this.getAge(value)
      }
    }
  },
  async mounted() {
    this.formRapid.address_district_code = this.district_user
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
    async onChangeCategory(value) {
      const response = await this.$store.dispatch('rdt/getListTarget', value)
      this.targetOptions = response.data
    },
    async checkValidate() {
      if (this.formResult.test_date === null) {
        await this.$store.dispatch('toast/errorToast', 'Tanggal Harus Diisi')
        return
      }
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
    },
    async saveData() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      } else if (this.formResult.test_date === null) {
        await this.$store.dispatch('toast/errorToast', 'Tanggal Harus Diisi')
        return
      }

      Object.assign(this.formRapid, this.formResult)
      delete this.formRapid._id

      const response = await fetchPostUpdate('/api/rdt', 'POST', this.formRapid)

      if (response.status !== 422) {
        await this.$store.dispatch('toast/successToast', this.$t('success.create_date_success'))
        this.$router.push('/rdt/list')
        await this.$refs.form.reset()
      }
    },
    async saveRdtAndCase() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      } else if (this.formResult.test_date === null) {
        await this.$store.dispatch('toast/errorToast', 'Tanggal Harus Diisi')
        return
      }

      Object.assign(this.formRapid, this.formResult)

      if (this.formRapid.final_result === 'POSITIF') {
        this.formRapid.status = 'PDP'
        this.formRapid.stage = '0'
        this.formRapid.is_test_masif = true
      }

      if (this.formRapid.id_case) {
        const updateCase = {
          id: this.formRapid._id,
          data: this.formRapid
        }
        await this.$store.dispatch('reports/updateReportCase', updateCase)
      } else {
        await this.$store.dispatch('reports/createReportCase', this.formRapid)
      }
      this.saveData()
    }
  }
}
</script>
