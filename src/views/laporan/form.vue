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
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <label><strong>Tujuan Distribusi</strong></label>
                    <select-area-district-city
                      :disabled-select="disabledAddress"
                      :disabled-district="disabledDistrict"
                      :required="requiredAddress"
                      :district-city="districtCity"
                      :city-district.sync="districtCity"
                      :on-select-district="onSelectDistrict"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label><strong>Nama Kabupaten Kota</strong></label>
                      <v-text-field
                        v-model="tujuanDistribusiLainnya"
                        :error-messages="errors"
                        label="Lainnya"
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
                      <label><strong>Nama Tujuan Distribusi Lainnya</strong></label>
                      <v-text-field
                        v-model="namaTujuanDistribusiLainnya"
                        :error-messages="errors"
                        label="contoh: DPRD Provinsi Jawa Barat"
                        solo-inverted
                      />
                    </ValidationProvider>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <label><strong>Kecamatan</strong></label>
                    <select-area-sub-district
                      :disabled-select="disabledAddress"
                      :required="requiredAddress"
                      :sub-district="subDistrict"
                      :update-sub-district.sync="subDistrict"
                      :code-district="districtCity.kemendagri_kabupaten_kode"
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
                      rules="required|numeric"
                    >
                      <label><strong>Jumlah Distribusi</strong></label>
                      <v-text-field
                        v-model="jumlahDistribusi"
                        :error-messages="errors"
                        label="Masukkan jumlah yang akan didistribusikan"
                        solo-inverted
                        type="number"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label><strong>Nama Pemohon</strong></label>
                      <v-text-field
                        v-model="namaPemohon"
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
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label><strong>Alamat Lengkap</strong></label>
                      <v-textarea
                        v-model="alamat"
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
                      rules="isPhoneNumber|required"
                    >
                      <label><strong>Nomor Telepon (HP/WA)</strong></label>
                      <v-text-field
                        v-model="telp"
                        :error-messages="errors"
                        label="Masukkan nomor telepon yang bisa dihubungi"
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
                    <ValidationProvider>
                      <label><strong>Tanggal Distribusi</strong></label>
                      <date-picker
                        :model="tanggalDistribusi"
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
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {

  components: {
    ValidationObserver,
    ValidationProvider
  },
  props: {
    disabledAddress: {
      type: Boolean,
      default: false
    },
    disabledDistrict: {
      type: Boolean,
      default: false
    },
    requiredAddress: {
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
    }
  },
  data() {
    return {
      districtCity: {
        kota_kode: this.districtCode,
        kota_nama: this.districtName
      },
      subDistrict: {
        kecamatan_kode: this.subDistrictCode,
        kecamatan_nama: this.subDistrictName
      },
      dialog: false,
      nameDistrict: '',
      nameSubDistrict: '',
      tujuanDistribusiLainnya: '',
      namaTujuanDistribusiLainnya: '',
      jumlahDistribusi: '',
      namaPemohon: '',
      alamat: '',
      telp: '',
      tanggalDistribusi: ''
    }
  },
  methods: {
    async handleSubmitCase() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        console.log('not valid')
        return
      }
      console.log(
        this.dialog,
        this.nameDistrict,
        this.nameSubDistrict,
        this.tujuanDistribusiLainnya,
        this.namaTujuanDistribusiLainnya,
        this.jumlahDistribusi,
        this.namaPemohon,
        this.alamat,
        this.telp,
        this.tanggalDistribusi
      )
    },
    async onSelectDistrict(value) {
      this.districtCity = value
      this.$emit('update:codeDistrict', value.kemendagri_kabupaten_kode)
      this.$emit('update:nameDistrict', value.kemendagri_kabupaten_nama)
    }
  }
}
</script>
