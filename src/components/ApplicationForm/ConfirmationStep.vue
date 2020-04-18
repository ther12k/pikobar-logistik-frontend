<template>
  <div class="background-landing-page">
    <div class="full-landing-page">
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
    <div class="negative-landing-page">
      <v-card class="main-card-data-confirmation" outlined>
        <div class="data-confirmation-text">{{ $t('label.confirm_data') }}</div>
        <hr>
        <div class="main-color">{{ $t('label.instance_identity') }}</div>
        <div>
          <v-row>
            <v-col>
              <v-row>
                <v-col>
                  <v-row class="main-color">{{ $t('label.instance_type') }}</v-row>
                  <v-row>{{ formApplicant.instanceType }}</v-row>
                  <v-row class="main-color">{{ $t('label.instance_name') }}</v-row>
                  <v-row>{{ formApplicant.instanceName }}</v-row>
                  <v-row class="main-color">{{ $t('label.number_phone') }}</v-row>
                  <v-row>081220702050</v-row>
                </v-col>
                <v-col>
                  <v-row class="main-color">{{ $t('label.county_town') }}</v-row>
                  <v-row>{{ formApplicant.cityNameId.name }}</v-row>
                  <v-row class="main-color">{{ $t('label.select_sub_district_full_name') }}</v-row>
                  <v-row>{{ formApplicant.districtNameId.name }}</v-row>
                  <v-row class="main-color">{{ $t('label.village') }}</v-row>
                  <v-row>Sawangan Lama</v-row>
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
                  <td>{{ item.apd.name }}</td>
                  <td>{{ item.brand }}</td>
                  <td>{{ item.total }}</td>
                  <td>{{ item.unit }}</td>
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
        <a href="">Surat Permohonan yang ke sekian.pdf</a>
        <hr>
        <v-row justify="end">
          <v-btn class="ml-5 white--text" min-width="140px" color="success" outlined @click="onPrev()">{{ $t('label.back') }}</v-btn>
          <v-btn class="ml-5 white--text" min-width="140px" color="success">{{ $t('label.save') }}</v-btn>
        </v-row>
      </v-card>
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
      total: 0
    }
  },
  mounted() {
    this.total = Math.ceil(this.logisticNeeds.length / 3)
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
</style>
