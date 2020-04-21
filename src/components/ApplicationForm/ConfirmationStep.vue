<template>
  <div class="background-landing-page">
    <div class="full-landing-page main-page">
      <div class="header-landing-page">
        <v-row justify="space-between" align="center">
          <v-col cols="12" md="8" xs="12">
            <v-row>
              <img height="40" src="../../static/logistik_logo_lingkar.svg">
              <div class="title-page-landing-page">{{ $t('label.logistics_medical_device') }}</div>
            </v-row>
          </v-col>
          <v-col cols="12" md="4" xs="12">
            <v-row class="float-right-landing-page">
              <v-icon color="white" size="17">{{ $t('label.icon_talk') }}</v-icon>
              <div class="call-center-landing-page">{{ $t('label.call_center') }}</div>
              <v-icon color="white" size="17">{{ $t('label.icon_help') }}</v-icon>
              <div class="pusat-bantuan-landing-page">{{ $t('label.help_center') }}</div>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div class="header-landing-page-mobile">
        <v-row>
          <v-col cols="8">
            <v-row>
              <v-col class="margin-left-20" cols="2">
                <img height="40" src="../../static/logistik_logo_lingkar.svg">
              </v-col>
              <v-col cols="6">
                <div class="title-page-landing-page-mobile">
                  {{ $t('label.logistic') }} <br>
                  {{ $t('label.medical_tools') }}
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row class="float-right-landing-page">
              <v-icon class="margin-20" color="white" size="30">{{ $t('label.icon_talk') }}</v-icon>
              <v-icon color="white" size="30">{{ $t('label.icon_help') }}</v-icon>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="negative-landing-page main-page">
      <v-card class="main-card-data-confirmation" outlined>
        <div v-if="isLoading" class="padding-100">
          <v-row align="center" justify="center">
            <img height="200" src="../../static/mengirim.svg">
          </v-row>
          <v-row align="center" justify="center" class="margin-wait">
            {{ $t('label.wait') }}
          </v-row>
          <v-row align="center" justify="center" class="margin-top-10">
            {{ $t('label.loading_step_one') }}
          </v-row>
          <v-row align="center" justify="center">
            {{ $t('label.loading_step_two') }}
          </v-row>
        </div>
        <div v-else-if="isDone" class="padding-100">
          <v-row align="center" justify="center">
            <img height="200" src="../../static/berhasil.svg">
          </v-row>
          <v-row align="center" justify="center">
            <div class="save-style">{{ $t('label.save_success') }}</div>
          </v-row>
          <v-row align="center" justify="center" class="margin-top-10">
            {{ $t('label.loading_done_one') }}
          </v-row>
          <v-row align="center" justify="center">
            {{ $t('label.loading_done_two') }}
          </v-row>
          <v-row align="center" justify="center">
            {{ $t('label.loading_done_three') }}
          </v-row>
        </div>
        <div v-else>
          <div class="data-confirmation-text">{{ $t('label.confirm_data') }}</div>
          <hr>
          <div class="main-color">{{ $t('label.instance_identity') }}</div>
          <div>
            <v-row>
              <v-col>
                <v-row>
                  <v-col>
                    <v-row class="main-color">{{ $t('label.instance_type') }}</v-row>
                    <v-row>{{ formApplicant.instanceTypeName }}</v-row>
                    <v-row class="main-color">{{ $t('label.instance_name') }}</v-row>
                    <v-row>{{ formApplicant.instanceName }}</v-row>
                    <v-row class="main-color">{{ $t('label.number_phone') }}</v-row>
                    <v-row>{{ formApplicant.instancePhoneNumber }}</v-row>
                  </v-col>
                  <v-col>
                    <v-row class="main-color">{{ $t('label.county_town') }}</v-row>
                    <v-row>{{ formApplicant.cityNameId.name }}</v-row>
                    <v-row class="main-color">{{ $t('label.select_sub_district_full_name') }}</v-row>
                    <v-row>{{ formApplicant.districtNameId.name }}</v-row>
                    <v-row class="main-color">{{ $t('label.village') }}</v-row>
                    <v-row>{{ formApplicant.villageNameId.name }}</v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <v-row class="main-color">{{ $t('label.full_address') }}</v-row>
                <v-row>{{ formApplicant.fullAddress }}</v-row>
              </v-col>
            </v-row>
          </div>
          <hr>
          <div class="main-color">{{ $t('label.step_title_2') }}</div>
          <div>
            <v-row>
              <v-col>
                <v-row>
                  <v-col>
                    <v-row class="main-color">{{ $t('label.contact_person') }}</v-row>
                    <v-row>{{ formIdentityApplicant.applicantName }}</v-row>
                    <v-row class="main-color">{{ $t('label.applicant_position_identity') }}</v-row>
                    <v-row>{{ formIdentityApplicant.applicantPosition }}</v-row>
                  </v-col>
                  <v-col>
                    <v-row class="main-color">{{ $t('label.email') }}</v-row>
                    <v-row>{{ formIdentityApplicant.applicantEmail }}</v-row>
                    <v-row class="main-color">{{ $t('label.applicant_phone') }}</v-row>
                    <v-row>{{ formIdentityApplicant.applicantPhoneNumber }}</v-row>
                    <v-row class="main-color">{{ $t('label.applicant_phone_sub') }}</v-row>
                    <v-row>{{ formIdentityApplicant.applicantPhoneNumber2 }}</v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <v-row class="main-color">{{ $t('label.applicant_ktp') }}</v-row>
                <v-row>
                  <img v-if="!isPdf" class="image-style" :src="url">
                  <a v-else :href="url" target="_blank">{{ this.formIdentityApplicant.dataFile.name }}</a>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <hr>
          <div class="main-color">{{ $t('label.list_logistic_need') }}</div>
          <v-card outlined>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">{{ $t('label.number').toUpperCase() }}</th>
                    <th class="text-left">{{ $t('label.apd_name_spesification') }}</th>
                    <th class="text-left">{{ $t('label.brand') }}</th>
                    <th class="text-left">{{ $t('label.total') }}</th>
                    <th class="text-left">{{ $t('label.unit') }}</th>
                    <th class="text-left">{{ $t('label.purpose') }}</th>
                    <th class="text-left">{{ $t('label.urgency_level') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="logisticNeeds.length === 0">
                    <td class="text-center" :colspan="7">{{ $t('label.no_data') }}</td>
                  </tr>
                  <tr v-for="(item, index) in dataShow" v-else :key="item.index">
                    <td>{{ getTableRowNumbering(index) }}</td>
                    <td>{{ item.apdName }}</td>
                    <td>{{ item.brand }}</td>
                    <td>{{ item.total }}</td>
                    <td>{{ item.unitName }}</td>
                    <td>{{ item.purpose }}</td>
                    <td>{{ item.urgency }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
          <v-pagination
            v-model="listQuery.page"
            :length="total"
            :total-visible="3"
            @input="onNext"
          />
          <hr>
          <div class="main-color">{{ $t('label.step_title_4') }}</div>
          <a :href="urlLetter" target="_blank">{{ letterName }}</a>
          <hr>
          <v-row justify="end">
            <v-btn class="ml-5 white--text" min-width="140px" color="success" outlined @click="onPrev()">{{ $t('label.back') }}</v-btn>
            <v-btn class="ml-5 white--text" min-width="140px" color="success" @click="submitData">{{ $t('label.save') }}</v-btn>
          </v-row>
        </div>
      </v-card>
    </div>
    <div class="full-landing-page main-page-mobile ">
      <div class="header-landing-page-mobile">
        <v-row>
          <v-col cols="8">
            <v-row>
              <v-col class="margin-left-20" cols="2">
                <img height="40" src="../../static/logistik_logo_lingkar.svg">
              </v-col>
              <v-col cols="6">
                <div class="title-page-landing-page-mobile margin-left-title-mobile-landing-page">
                  {{ $t('label.logistic') }} <br>
                  {{ $t('label.medical_tools') }}
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row class="float-right-landing-page">
              <v-icon class="margin-icon-talk-mobile-landing-page" color="white" size="30">{{ $t('label.icon_talk') }}</v-icon>
              <v-icon class="margin-icon-talk-mobile-landing-page" color="white" size="30">{{ $t('label.icon_help') }}</v-icon>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="main-page-mobile bg-mobile">
      <v-row class="margin-top-min-50">
        <v-col class="margin-20" cols="12" sm="12">
          <v-label class="title"><b>{{ $t('label.confirm_data') }}</b></v-label>
        </v-col>
      </v-row>
      <hr>
      <v-row>
        <v-col class="margin-instance-mobile" cols="12" sm="12">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.instance_identity') }}</b></v-label>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="" cols="6" sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.instance_type') }}</b></v-label>
          <br>
          <v-label>{{ formApplicant.instanceTypeName }}</v-label>
        </v-col>
        <v-col class="" cols="6" sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.county_town') }}</b></v-label>
          <br>
          <v-label>{{ formApplicant.cityNameId.name }}</v-label>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="" cols="6" sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.instance_name') }}</b></v-label>
          <br>
          <v-label>{{ formApplicant.instanceName }}</v-label>
        </v-col>
        <v-col class="" cols="6" sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.select_sub_district_full_name') }}</b></v-label>
          <br>
          <v-label>{{ formApplicant.districtNameId.name }}</v-label>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="" cols="6" sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.number_phone') }}</b></v-label>
          <br>
          <v-label>{{ formApplicant.instancePhoneNumber }}</v-label>
        </v-col>
        <v-col class="" cols="6" sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.village') }}</b></v-label>
          <br>
          <v-label>{{ formApplicant.villageNameId.name }}</v-label>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="" cols="6" sm="6" offset="6" offset-sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.full_address') }}</b></v-label>
          <br>
          <v-label>{{ formApplicant.fullAddress }}</v-label>
        </v-col>
      </v-row>
      <hr>
      <v-row>
        <v-col class="margin-instance-mobile" cols="12" sm="12">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.step_title_2') }}</b></v-label>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="" cols="6" sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.contact_person') }}</b></v-label>
          <br>
          <v-label>{{ formIdentityApplicant.applicantName }}</v-label>
        </v-col>
        <v-col class="" cols="6" sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.email') }}</b></v-label>
          <br>
          <v-label>{{ formIdentityApplicant.applicantEmail }}</v-label>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="" cols="6" sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.applicant_position_identity') }}</b></v-label>
          <br>
          <v-label>{{ formIdentityApplicant.applicantPosition }}</v-label>
        </v-col>
        <v-col class="" cols="6" sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.applicant_phone') }}</b></v-label>
          <br>
          <v-label>{{ formIdentityApplicant.applicantPhoneNumber }}</v-label>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="" cols="6" sm="6" offset="6" offset-sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.applicant_phone') }}</b></v-label>
          <br>
          <v-label>{{ formIdentityApplicant.applicantPhoneNumber2 }}</v-label>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="" cols="6" sm="6" offset="6" offset-sm="6">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.applicant_ktp') }}</b></v-label>
          <br>
          <img class="image-style" :src="url">
        </v-col>
      </v-row>
      <v-row>
        <v-col class="margin-instance-mobile" cols="12" sm="12">
          <v-label class="title" color="#2E7D32"><b>{{ $t('label.list_logistic_need') }}</b></v-label>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <v-card outlined>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">{{ $t('label.number').toUpperCase() }}</th>
                    <th class="text-left">{{ $t('label.apd_name_spesification') }}</th>
                    <th class="text-left">{{ $t('label.brand') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="logisticNeeds.length === 0">
                    <td class="text-center" :colspan="7">{{ $t('label.no_data') }}</td>
                  </tr>
                  <tr v-for="(item, index) in dataShow" v-else :key="item.index">
                    <td>{{ getTableRowNumbering(index) }}</td>
                    <td>{{ item.apdName }}</td>
                    <td>{{ item.brand }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
      <v-pagination
        v-model="listQuery.page"
        :length="total"
        :total-visible="3"
        @input="onNext"
      />
      <hr>
      <div class="main-color">{{ $t('label.step_title_4') }}</div>
      <a :href="urlLetter" target="_blank">{{ letterName }}</a>
      <hr>
      <v-row>
        <v-col cols="5" sm="5">
          <v-btn class="ml-5 white--text" min-width="140px" color="success" outlined @click="onPrev()">{{ $t('label.back') }}</v-btn>
        </v-col>
        <v-col cols="5" sm="5">
          <v-btn class="ml-5 white--text" min-width="140px" color="success" @click="submitData">{{ $t('label.save') }}</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import EventBus from '@/utils/eventBus'

export default {
  name: 'TahapKonfirmasi',
  props: {
    formApplicant: {
      type: Object,
      default: null
    },
    formIdentityApplicant: {
      type: Object,
      default: null
    },
    logisticNeeds: {
      type: Array,
      default: null
    },
    applicantLetter: {
      type: File,
      default: null
    }
  },
  data() {
    return {
      step: 5,
      dataShow: [],
      listQuery: {
        page: 1,
        limit: 3
      },
      total: 0,
      url: null,
      urlLetter: null,
      letterName: '',
      isLoading: false,
      isDone: false,
      isPdf: false
    }
  },
  mounted() {
    this.letterName = this.applicantLetter.name
    this.url = URL.createObjectURL(this.formIdentityApplicant.dataFile)
    this.urlLetter = URL.createObjectURL(this.applicantLetter)
    this.total = Math.ceil(this.logisticNeeds.length / 3)
    if (this.formIdentityApplicant.dataFile.type === 'application/pdf') {
      this.isPdf = true
    }
    if (this.total === 1) {
      for (let index = 0; index < this.logisticNeeds.length; index++) {
        this.dataShow.push(this.logisticNeeds[index])
      }
    } else {
      for (let index = 0; index < 3; index++) {
        this.dataShow.push(this.logisticNeeds[index])
      }
    }
  },
  methods: {
    getTableRowNumbering(index) {
      return ((parseInt(this.listQuery.page) - 1) * parseInt(this.listQuery.limit)) + (parseInt(index) + 1)
    },
    onNext() {
      this.dataShow = []
      const x = (this.listQuery.page - 1) * 3
      for (let index = x; index < this.logisticNeeds.length; index++) {
        if (this.dataShow.length > 2) {
          return
        } else {
          this.dataShow.push(this.logisticNeeds[index])
        }
      }
    },
    onPrev() {
      EventBus.$emit('prevStep', this.step)
    },
    async submitData() {
      this.isLoading = true
      const dataLogistics = []
      this.logisticNeeds.forEach(element => {
        dataLogistics.push({
          usage: element.purpose,
          priority: element.urgency,
          product_id: element.apd,
          brand: element.brand,
          quantity: element.total,
          unit: element.unitId
        })
      })
      const formData = new FormData()
      formData.append('master_faskes_id', this.formApplicant.instanceType)
      formData.append('logistic_request', JSON.stringify(dataLogistics))
      formData.append('agency_type', this.formApplicant.instance)
      formData.append('agency_name', this.formApplicant.instanceName)
      formData.append('phone_number', this.formApplicant.instancePhoneNumber)
      formData.append('location_district_code', this.formApplicant.cityNameId.id)
      formData.append('location_subdistrict_code', this.formApplicant.districtNameId.id)
      formData.append('location_village_code', this.formApplicant.villageNameId.id)
      formData.append('location_address', this.formApplicant.fullAddress)
      formData.append('applicant_name', this.formIdentityApplicant.applicantName)
      formData.append('applicants_office', this.formIdentityApplicant.applicantPosition)
      formData.append('email', this.formIdentityApplicant.applicantEmail)
      formData.append('primary_phone_number', this.formIdentityApplicant.applicantPhoneNumber)
      formData.append('secondary_phone_number', this.formIdentityApplicant.applicantPhoneNumber2)
      formData.append('letter_file', this.applicantLetter)
      formData.append('applicant_file', this.formIdentityApplicant.dataFile)
      console.log(formData)
      // await this.$store.dispatch('logistics/postApplicantForm', formData)
      this.isDone = true
      this.isLoading = false
    },
    onDone() {
      this.isDone = false
    },
    onLoading() {
      this.isDone = true
      this.isLoading = false
    }
  }
}
</script>
<style>
  .main-card-data-confirmation {
    padding: 30px;
    margin: 10px 120px 30px 120px;
  }
  .data-confirmation-text {
    font-size: 20px;
    font-weight: bold;
  }
  .main-color {
    color: #27ae60;
    font-weight: bold;
    margin-top: 20px !important;
  }
  .col {
    padding: 0px;
  }
  .row {
    padding: 0px;
    margin: 0px;
  }
  .image-style {
    max-width: 100%;
    max-height: 500px;
  }
  .main-page {
    display: block;
  }
  .main-page-mobile {
    display: none;
  }
  .margin-top-min-50 {
    margin-top: -50px;
  }
  .margin-20 {
    margin: 20px;
  }
  .margin-instance-mobile {
    margin: -20px 20px 0px 20px
  }
  .padding-100 {
    padding: 100px 100px;
  }
  .margin-wait {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  .margin-top-10 {
    margin-top: 10px;
  }
  .padding-100 {
    padding: 100px 100px;
  }
  .save-style {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
  }
@media (max-width: 1199px) and (min-width: 960px) {
}
@media (max-width: 768px) and (min-width: 320px) {
}

@media (max-width: 588px) and (min-width: 320px) {
  .main-page-mobile {
    display: block;
  }
  .main-page {
    display: none;
  }
  .bg-mobile {
    background-color: white !important;
  }
}
</style>
