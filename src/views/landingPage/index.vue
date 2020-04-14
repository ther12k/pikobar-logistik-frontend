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
      <v-card class="main-card-landing-page" outlined>
        <v-row align="center">
          <v-col class="text-card-main" cols="12" md="8">
            <div class="font-product-sans-landing-page card-title-landing-page ml-10 mb-5 font-weight-bold">{{ $t('label.welcome') }}{{ $t('label.coma') }}</div>
            <p
              class="ml-10 font-product-sans-landing-page card-text-landing-page"
            >{{ $t('label.landing_page_text') }}</p>
            <v-btn class="ml-10 white--text" min-width="140px" color="success" href="#/form-pemohon">{{ $t('label.start') }}</v-btn>
          </v-col>
          <v-col cols="12" md="4">
            <img src="../../static/intro.svg">
          </v-col>
          <v-col class="text-card-main-mobile" cols="12" md="8">
            <div class="card-title-landing-page ml-10 mb-5 font-weight-bold"><center>{{ $t('label.welcome') }}</center></div>
            <center><p class="ml-10 font-product-sans-landing-page card-text-landing-page margin-right-20">{{ $t('label.landing_page_text') }}</p></center>
            <center><v-btn class="ml-10 white--text" min-width="140px" color="success" href="#/form-pemohon">{{ $t('label.start') }}</v-btn></center>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LandingPage'
}
</script>
