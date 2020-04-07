<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="1200px">
      <v-card>
        <v-card-title>
          <v-row class="survey-bottom-form">
            <v-col>
              <span class="headline">{{ $t('label.add_distribution') }}</span>
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
                    <label><strong>{{ $t('label.distribution_destination') }}</strong></label>
                    <select-area-district-city
                      :required="true"
                      :district-city="districtCity"
                      :city-district.sync="districtCity"
                      :on-select-district-city="onSelectDistrictCity"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <label><strong>{{ $t('label.select_sub_district_full_name') }}</strong></label>
                    <select-area-sub-district
                      :required="true"
                      :sub-district="subDistrict"
                      :update-sub-district.sync="subDistrict"
                      :code-district="rdtDistributionForm.location_district_code"
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
                      <label><strong>{{ $t('label.distribution_destination_name') }}</strong></label>
                      <v-text-field
                        v-model="rdtDistributionForm.name"
                        :error-messages="errors"
                        :label="$t('label.example_distribution_destination_name')"
                        solo-inverted
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required|numeric"
                    >
                      <label><strong>{{ $t('label.distribution_quantity') }}</strong></label>
                      <v-text-field
                        v-model="rdtDistributionForm.formQuantity"
                        :error-messages="errors"
                        :label="$t('label.example_distribution_quantity')"
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
                      <label><strong>{{ $t('label.address') }}</strong></label>
                      <v-textarea
                        v-model="rdtDistributionForm.location_address"
                        :error-messages="errors"
                        :label="$t('label.example_address')"
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
                      <label><strong>{{ $t('label.contact_person') }}</strong></label>
                      <v-text-field
                        v-model="rdtDistributionForm.contact_person"
                        :error-messages="errors"
                        :label="$t('label.example_contact_person')"
                        solo-inverted
                      />
                    </ValidationProvider>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <label><strong>{{ $t('label.distribution_date') }}</strong></label>
                    <date-picker
                      :required="true"
                      :value="date"
                      @selected="changeDate"
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
                      rules="isPhoneNumber|required"
                    >
                      <label><strong>{{ $t('label.phone_number') }}</strong></label>
                      <v-text-field
                        v-model="rdtDistributionForm.phone_number"
                        :error-messages="errors"
                        :label="$t('label.example_phone_number')"
                        solo-inverted
                        type="number|string"
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
                      {{ $t('label.save') }}
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
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    idDistribution: {
      type: Number,
      default: null
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
      'rdtDistributionForm'
    ]),
    ...mapGetters('user', [
      'user'
    ])
  },
  watch: {
    'districtCode': function(value) {
      if (value.length > 0) {
        this.districtCity = {
          kemendagri_kabupaten_kode: value.kemendagri_kabupaten_kode,
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
        kemendagri_kecamatan_kode: value.kemendagri_kecamatan_kode,
        kemendagri_kecamatan_nama: this.subDistrictName
      }
    },
    'show': async function(value) {
      this.dialog = value
      if (this.isEdit && this.show) {
        const response = await this.$store.dispatch('rdtDistribution/getDistributionItem', this.idDistribution)
        this.districtCity = {
          kemendagri_kabupaten_kode: response.data.location_district_code,
          kemendagri_kabupaten_nama: response.data.location_district_name
        }
        this.subDistrict = {
          kemendagri_kecamatan_kode: response.data.location_subdistrict_code,
          kemendagri_kecamatan_nama: response.data.location_subdistrict_code
        }
        this.date = response.data.time.date.substr(0, 10)
      } else {
        await this.$store.dispatch('rdtDistribution/resetRdtDistributionForm')
        this.districtCity = {
          kemendagri_kabupaten_kode: null,
          kemendagri_kabupaten_nama: null
        }
        this.subDistrict = {
          kemendagri_kecamatan_kode: null,
          kemendagri_kecamatan_nama: null
        }
        this.date = ''
      }
    }
  },
  mounted() {
    this.dialog = this.show
  },
  methods: {
    async handleSubmitCase() {
      this.rdtDistributionForm.id_user = this.user.id
      this.rdtDistributionForm.quantity = -this.rdtDistributionForm.formQuantity
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
      this.submitBtn = true
      if (this.isEdit) {
        const updateRawData = {
          id: this.idDistribution,
          data: {
            'id_product': this.rdtDistributionForm.id_product,
            'id_user': this.rdtDistributionForm.id_user,
            'name': this.rdtDistributionForm.name,
            'contact_person': this.rdtDistributionForm.contact_person,
            'phone_number': this.rdtDistributionForm.phone_number,
            'location_address': this.rdtDistributionForm.location_address,
            'location_subdistrict_code': this.rdtDistributionForm.location_subdistrict_code,
            'location_district_code': this.rdtDistributionForm.location_district_code,
            'location_province_code': this.rdtDistributionForm.location_province_code,
            'quantity': this.rdtDistributionForm.quantity,
            'time': this.rdtDistributionForm.time,
            'note': this.rdtDistributionForm.note
          }
        }
        await this.$store.dispatch('rdtDistribution/updateRdtDistribution', updateRawData)
        await this.$store.dispatch('toast/updateToast', this.$t('success.data_success_edit'))
      } else {
        await this.$store.dispatch('rdtDistribution/createRdtDistribution', this.rdtDistributionForm)
        await this.$store.dispatch('toast/successToast', this.$t('success.create_date_success'))
      }
      await this.$store.dispatch('rdtDistribution/resetRdtDistributionForm')
      this.dialog = false
      this.$emit('close', this.dialog)
      this.submitBtn = false
    },
    onSelectDistrictCity(value) {
      this.districtCity = value
      this.rdtDistributionForm.location_district_code = value.kemendagri_kabupaten_kode
      this.$emit('update:codeDistrict', value.kemendagri_kabupaten_kode)
    },
    onSelectSubDistrictCity(value) {
      this.rdtDistributionForm.location_subdistrict_code = value.kemendagri_kecamatan_kode
    },
    changeDate(value) {
      this.rdtDistributionForm.time = value
    },
    closeDialog() {
      this.dialog = false
      this.$emit('close', this.dialog)
    }
  }
}
</script>
