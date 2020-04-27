<template>
  <div v-if="!isConfirm" class="background-landing-page background-height">
    <div class="full-landing-page">
      <div class="header-landing-page">
        <v-row justify="space-between" align="center">
          <v-col cols="12" md="8" xs="12">
            <v-row>
              <img height="40" src="../../static/logistik_logo_lingkar.svg">
              <div class="title-page">{{ $t('label.applicant_form_title') }}</div>
            </v-row>
          </v-col>
          <v-col cols="12" md="4" xs="12">
            <v-row class="float-right-landing-page">
              <a :href="$t('label.link_tutorial')" target="_blank"><v-icon color="white" size="25">{{ $t('label.icon_help') }}</v-icon></a>
              <a :href="$t('label.link_tutorial')" target="_blank"><div class="tutorial-class pusat-bantuan-landing-page">{{ $t('label.tutorial') }}</div></a>
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
                <div class="title-page-landing-page-mobile margin-left-title-mobile-landing-page">
                  {{ $t('label.logistic') }} <br>
                  {{ $t('label.medical_tools') }}
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row class="float-right-landing-page">
              <a :href="$t('label.link_tutorial')" target="_blank" class="margin-icon-talk-mobile-landing-page"><v-icon color="white" size="25">{{ $t('label.icon_help') }}</v-icon></a>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="negative-landing-page">
      <v-card class="main-card" outlined>
        <v-stepper v-model="step" class="stepper-margin" :alt-labels="true">
          <v-stepper-header>
            <v-stepper-step class="left-margin" :complete="step > 1" step="1">
              <center>{{ $t('label.step_title_1') }}</center>
            </v-stepper-step>
            <v-divider />
            <v-stepper-step :complete="step > 2" step="2">
              <center>{{ $t('label.step_title_2') }}</center>
            </v-stepper-step>
            <v-divider />
            <v-stepper-step :complete="step > 3" step="3">
              <center>{{ $t('label.step_title_3') }}</center>
            </v-stepper-step>
            <v-divider />
            <v-stepper-step :complete="step > 4" class="right-margin" step="4">
              <center>{{ $t('label.step_title_4') }}</center>
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <identitas-instansi-pemohon
                :form-applicant="formApplicant"
              />
            </v-stepper-content>
            <v-stepper-content step="2">
              <identitas-pemohon
                :form-identity-applicant="formIdentityApplicant"
                :instance-type="formApplicant.instanceType"
              />
            </v-stepper-content>
            <v-stepper-content step="3">
              <kebutuhan-logistik
                :logistic-needs="logisticNeeds"
              />
            </v-stepper-content>
            <v-stepper-content step="4">
              <surat-permohonan />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
      <v-card class="main-card-mobile" outlined>
        <v-stepper v-model="step" class="stepper-margin" :alt-labels="true">
          <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1">
              <center>{{ $t('label.step_title_1') }}</center>
            </v-stepper-step>
            <v-divider />
            <v-stepper-step :complete="step > 2" step="2">
              <center>{{ $t('label.step_title_2') }}</center>
            </v-stepper-step>
            <v-divider />
            <v-stepper-step :complete="step > 3" step="3">
              <center>{{ $t('label.step_title_3') }}</center>
            </v-stepper-step>
            <v-divider />
            <v-stepper-step :complete="step > 4" step="4">
              <center>{{ $t('label.step_title_4') }}</center>
            </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <identitas-instansi-pemohon
                :form-applicant="formApplicant"
              />
            </v-stepper-content>
            <v-stepper-content step="2">
              <identitas-pemohon
                :form-identity-applicant="formIdentityApplicant"
              />
            </v-stepper-content>
            <v-stepper-content step="3">
              <kebutuhan-logistik
                :logistic-needs="logisticNeeds"
              />
            </v-stepper-content>
            <v-stepper-content step="4">
              <surat-permohonan
                :applicant-letter="applicantLetter"
              />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </div>
  </div>
  <div v-else>
    <tahap-konfirmasi
      :form-applicant="formApplicant"
      :form-identity-applicant="formIdentityApplicant"
      :logistic-needs="logisticNeeds"
      :applicant-letter="applicantLetter"
    />
  </div>
</template>

<script>
import EventBus from '@/utils/eventBus'

export default {
  name: 'FormPermohonanLogistik',
  data() {
    return {
      step: 1,
      formApplicant: {},
      formIdentityApplicant: {},
      logisticNeeds: [],
      applicantLetter: null,
      isConfirm: false
    }
  },
  created() {
    EventBus.$on('nextStep', (value) => {
      this.step = value + 1
    })
    EventBus.$on('prevStep', (value) => {
      this.isConfirm = false
      this.step = value - 1
    })
    EventBus.$on('confirmStep', (value) => {
      this.applicantLetter = value
      this.isConfirm = true
      this.step = 5
    })
  }
}
</script>
<style>
.main-card {
  margin: -50px 120px 30px 120px;
  height: 500px;
  padding: 100px 10px;
}
.main-card-mobile {
  display: none;
}
.title-page {
  padding: 5px 20px;
  font-size: 22px;
  color: white;
  line-height: 29px;
}
.margin-positive {
  margin: 10px;
  float: right;
}
.left-margin {
  margin-left: 200px;
}
.right-margin {
  margin-right: 200px;
}
.margin-button {
  margin-top: 100px;
}
.background-height {
  height: 1000px;
}
.stepper-margin {
  margin: -100px -10px 0px -10px;
}
.tutorial-class {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
@media (max-width: 1199px) and (min-width: 960px) {
}
@media (max-width: 768px) and (min-width: 320px) {
}

@media (max-width: 588px) and (min-width: 320px) {
  .main-card {
    display: none;
  }
  .main-card-mobile {
    display: block;
    margin: 150px 0px -30px 0px;
  }
}
</style>
