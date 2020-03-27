<template>
  <v-container>
    <ValidationObserver ref="observer">
      <v-form
        ref="form"
      >
        <v-row>
          <v-col>
            <label>Pilih Tipe Sasaran</label>
            <v-select
              v-model="formRapid.type_target"
              :items="items"
              solo
            />
          </v-col>
          <v-col>
            <autocomplete-cases
              :on-select-case="onSelectCase"
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
              <label class="required">Nama Pasien</label>
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
            <!-- <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            > -->
            <label class="required">Jenis Kelamin</label>
            <v-radio-group
              v-model="formRapid.gender"
              row
            >
              <v-radio label="Laki-Laki" value="L" />
              <v-radio label="Perempuan" value="P" />
            </v-radio-group>
            <!-- </ValidationProvider> -->
            <label class="required">Alamat Tempat Tinggal</label>
            <address-region

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
      items: [
        'ODP',
        'Kluster',
        'Kontak erat dengan positif',
        'Anggota keluarga PDP',
        'Tenaga kesehatan di zona merah'
      ],
      formRapid: {
        type_target: null,
        nik: null,
        name: null,
        birth_date: '',
        age: null,
        gender: null,
        address_district_code: null,
        address_district_name: null,
        address_subdistrict_code: null,
        address_subdistrict_name: null,
        address_village_code: null,
        address_village_name: null,
        address_street: null,
        phone_number: null
      }
    }
  },
  watch: {
    'formRapid.nik': function(val) {

    },
    'formRapid.birth_date': function(value) {
      this.formRapid.age = this.getAge(value)
    }
  },
  methods: {
    getAge,
    async onSelectCase(value) {
      if (value) {
        const response = await this.$store.dispatch('reports/detailReportCase', value)
        console.log(response)
        this.formRapid = response.data
      }
    },
    async saveData() {
      console.log(this.formRapid)
      const response = await this.$store.dispatch('rdt/createRDT', this.formRapid)
      if (response.status !== 422) {
        // await this.$store.dispatch('reports/resetFormPasien')
        await this.$store.dispatch('toast/successToast', this.$t('success.create_date_success'))
        // this.$router.push('/laporan/index')
        await this.$refs.form.reset()
      }
    }
  }
}
</script>
