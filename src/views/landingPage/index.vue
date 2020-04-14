<template name="component-name">
  <div class="background">
    <div class="full" />
    <div class="negative">
      <div class="header">
        <v-row justify="space-between" align="center">
          <v-col md="8" xs="8">
            <v-row>
              <img height="40" src="../../static/logistik_logo_lingkar.svg">
              <div class="title-page">{{ $t('label.logistics_medical_device') }}</div>
            </v-row>
          </v-col>
          <v-col md="4" xs="4">
            <v-row class="float-right">
              <v-icon color="white" size="17">{{ $t('label.icon_talk') }}</v-icon>
              <div class="call-center">{{ $t('label.call_center') }}</div>
              <v-icon color="white" size="17">{{ $t('label.icon_help') }}</v-icon>
              <div class="pusat-bantuan">{{ $t('label.help_center') }}</div>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <v-card class="main-card" outlined>
        <v-row align="center">
          <v-col>
            <div class="font-product-sans card-title ml-10 mb-5 font-weight-bold">{{ $t('label.welcome') }}</div>
            <p
              class="ml-10 font-product-sans card-text"
            >{{ $t('label.landing_page_text') }}</p>
            <v-btn class="ml-10 white--text" min-width="140px" color="success" href="#/form-pemohon">{{ $t('label.start') }}</v-btn>
          </v-col>
          <v-col>
            <img height="340" src="../../static/intro.svg">
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
<style>
.background {
  background-color: #e0e0e0;
}
.main-card {
  margin: 10px 120px 30px 120px;
  height: 500px;
  padding: 100px 10px;
}
.header {
  margin: 30px 130px 10px 130px;
}
.title-page {
  padding: 5px 20px;
  font-size: 24px;
  color: white;
  font-weight: bold;
  line-height: 29px;
}
.call-center {
  color: white;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 40px;
}
.pusat-bantuan {
  color: white;
  font-size: 16px;
  margin-left: 10px;
}
.float-right {
  float: right;
}
.font-product-sans {
  font-family: "Product Sans" !important;
}
.card-title {
  font-size: 36px;
  line-height: 44px;
}
.card-text {
  font-size: 16px;
  line-height: 24px;
}
.full {
  width: 100vw;
  height: 30vh;
  background: #27ae60;
}
.negative {
  margin-top: -200px;
}
</style>
