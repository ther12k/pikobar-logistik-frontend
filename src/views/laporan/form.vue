<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="1200px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Tambah Distribusi</v-btn>
      </template>
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
                @click="dialog = false"
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
                  <v-col cols="12" sm="6" md="6">
                    <label><strong>Tujuan Distribusi</strong></label>
                    <select-area-district-city
                      :disabled-district="disabledDistrict"
                      :required="requiredAddress"
                      :on-select-district-city="onSelectDistrictCity"
                    />
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <label><strong>Kecamatan</strong></label>
                    <select-area-sub-district
                      :required="requiredAddress"
                      :sub-district="subDistrict"
                      :update-sub-district.sync="subDistrict"
                      :code-district="formDistribusiRdt.location_district_code"
                      :on-select-sub-district-city="onSelectSubDistrictCity"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label><strong>Nama Tujuan Distribusi Lainnya</strong></label>
                      <v-text-field
                        v-model="formDistribusiRdt.name"
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
                        v-model="formDistribusiRdt.quantity"
                        :error-messages="errors"
                        label="Masukkan jumlah yang akan didistribusikan"
                        solo-inverted
                        type="number"
                      />
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label><strong>Alamat Lengkap</strong></label>
                      <v-textarea
                        v-model="formDistribusiRdt.location_address"
                        :error-messages="errors"
                        label="Masukkan alamat lengkap tujuan distribusi"
                        solo-inverted
                      />
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label><strong>Nama Pemohon</strong></label>
                      <v-text-field
                        v-model="formDistribusiRdt.contact_person"
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
                    <ValidationProvider>
                      <label><strong>Tanggal Distribusi</strong></label>
                      <date-picker
                        :value="date"
                        @selected="changeDate"
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
                        v-model="formDistribusiRdt.phone_number"
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
    requiredAddress: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      subDistrict: {
        kecamatan_kode: this.subDistrictCode,
        kecamatan_nama: this.subDistrictName
      },
      dialog: false,
      date: ''
    }
  },
  computed: {
    ...mapGetters('distribusiRdt', [
      'formDistribusiRdt'
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
    }
  },
  methods: {
    async handleSubmitCase() {
      this.formDistribusiRdt.id_user = this.user.id
      this.formDistribusiRdt.quantity = -this.formDistribusiRdt.quantity
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
      await this.$store.dispatch('distribusiRdt/createDistribusiRdt', this.formDistribusiRdt)
      await this.$store.dispatch('toast/successToast', 'Data berhasil tersimpan!')
      await this.$store.dispatch('distribusiRdt/resetFormDistribusiRdt')
      this.dialog = false
    },
    async onSelectDistrictCity(value) {
      this.formDistribusiRdt.location_district_code = value.kemendagri_kabupaten_kode
      this.$emit('update:codeDistrict', value.kemendagri_kabupaten_kode)
    },
    async onSelectSubDistrictCity(value) {
      this.formDistribusiRdt.location_subdistrict_code = value.kemendagri_kecamatan_kode
    },
    changeDate(value) {
      this.formDistribusiRdt.time = value
    }
  }
}
</script>
