<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="1200px">
      <v-card>
        <v-card-title>
          <v-row class="survey-bottom-form">
            <v-col>
              <span class="headline">Tambah Distribusi</span>
            </v-col>
            <v-col>
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="red"
                style="float: right;"
                @click="closeDialog()"
              >
                <v-icon>close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <ValidationObserver ref="observer">
            <v-form>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <label><strong>Tujuan Distribusi</strong></label>
                    <!-- TODO: Perbaiki function required untuk field select-area-district-city -->
                    <select-area-district-city
                      :disabled-district="disabledDistrict"
                      :required="requiredField"
                      :on-select-district-city="onSelectDistrictCity"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <label><strong>Kecamatan</strong></label>
                    <!-- TODO: Perbaiki function required untuk field select-area-sub-district-city -->
                    <select-area-sub-district
                      :required="requiredField"
                      :sub-district="subDistrict"
                      :update-sub-district.sync="subDistrict"
                      :code-district="rdtDistributionFrom.location_district_code"
                      :on-select-sub-district="onSelectSubDistrictCity"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label><strong>Nama Tujuan Distribusi Lainnya</strong></label>
                      <v-text-field
                        v-model="rdtDistributionFrom.name"
                        :error-messages="errors"
                        label="contoh: DPRD Provinsi Jawa Barat"
                        solo-inverted
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required|numeric"
                    >
                      <label><strong>Jumlah Distribusi</strong></label>
                      <v-text-field
                        v-model="rdtDistributionFrom.fromQuantity"
                        :error-messages="errors"
                        label="Masukkan jumlah yang akan didistribusikan"
                        solo-inverted
                        type="number"
                      />
                    </ValidationProvider>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label><strong>Alamat Lengkap</strong></label>
                      <v-textarea
                        v-model="rdtDistributionFrom.location_address"
                        :error-messages="errors"
                        label="Masukkan alamat lengkap tujuan distribusi"
                        solo-inverted
                      />
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label><strong>Nama Pemohon</strong></label>
                      <v-text-field
                        v-model="rdtDistributionFrom.contact_person"
                        :error-messages="errors"
                        label="Masukan Nama Pemohon / PIC"
                        solo-inverted
                      />
                    </ValidationProvider>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <label><strong>Tanggal Distribusi</strong></label>
                    <!-- TODO: Perbaiki function required untuk field date-picker -->
                    <date-picker
                      :required="requiredField"
                      :value="date"
                      @selected="changeDate"
                    />
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <v-text-field
                        v-model="rdtDistributionFrom.time"
                        style="display:none"
                        :error-messages="errors"
                      />
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="isPhoneNumber|required"
                    >
                      <label><strong>Nomor Telepon (HP/WA)</strong></label>
                      <v-text-field
                        v-model="rdtDistributionFrom.phone_number"
                        :error-messages="errors"
                        label="Masukkan nomor telepon yang bisa dihubungi"
                        solo-inverted
                        type="number"
                      />
                    </ValidationProvider>
                  </v-col>
                </v-row>
              </v-container>
              <v-container fluid>
                <v-row class="survey-bottom-form">
                  <v-col>
                    <v-btn
                      color="success"
                      bottom
                      style="float: right;"
                      :disabled="submitBtn"
                      @click="handleSubmitCase"
                    >
                      Simpan
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </ValidationObserver>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {

  components: {
    ValidationObserver,
    ValidationProvider
  },
  props: {
    disabledDistrict: {
      type: Boolean,
      default: false
    },
    requiredField: {
      type: Boolean,
      default: false
    },
    districtCode: {
      type: String,
      default: null
    },
    districtName: {
      type: String,
      default: null
    },
    subDistrictCode: {
      type: String,
      default: null
    },
    subDistrictName: {
      type: String,
      default: null
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      districtCity: {
        kemendagri_kabupaten_kode: this.districtCode,
        kemendagri_kabupaten_nama: this.districtName
      },
      subDistrict: {
        kemendagri_kecamatan_kode: this.subDistrictCode,
        kemendagri_kecamatan_nama: this.subDistrictName
      },
      dialog: false,
      submitBtn: false,
      date: ''
    }
  },
  computed: {
    ...mapGetters('rdtDistribution', [
      'rdtDistributionFrom'
    ]),
    ...mapGetters('user', [
      'user'
    ])
  },
  watch: {
    'districtCode': function(value) {
      if (value.length > 0) {
        this.districtCity = {
          kemendagri_kabupaten_kode: value,
          kemendagri_kabupaten_nama: this.districtName
        }
      } else {
        this.districtCity = {
          kemendagri_kabupaten_kode: null,
          kemendagri_kabupaten_nama: null
        }
      }
    },
    'subDistrictCode': function(value) {
      this.subDistrict = {
        kemendagri_kecamatan_kode: value,
        kemendagri_kecamatan_nama: this.subDistrictName
      }
    },
    'show': function(value) {
      this.dialog = value
    }
  },
  mounted() {
    this.dialog = this.show
  },
  methods: {
    async handleSubmitCase() {
      this.rdtDistributionFrom.id_user = this.user.id
      this.rdtDistributionFrom.quantity = -this.rdtDistributionFrom.fromQuantity
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
      this.submitBtn = true
      await this.$store.dispatch('rdtDistribution/createRdtDistribution', this.rdtDistributionFrom)
      await this.$store.dispatch('toast/successToast', 'Data berhasil tersimpan!')
      await this.$store.dispatch('rdtDistribution/resetRdtDistributionFrom')
      this.dialog = false
      this.submitBtn = false
    },
    async onSelectDistrictCity(value) {
      this.rdtDistributionFrom.location_district_code = value.kemendagri_kabupaten_kode
      this.$emit('update:codeDistrict', value.kemendagri_kabupaten_kode)
    },
    async onSelectSubDistrictCity(value) {
      this.rdtDistributionFrom.location_subdistrict_code = value.kemendagri_kecamatan_kode
    },
    changeDate(value) {
      this.rdtDistributionFrom.time = value
    },
    closeDialog() {
      this.dialog = false
      this.$emit('close', this.dialog)
    }
  }
}
</script>
