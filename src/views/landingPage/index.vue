<template name="component-name">
  <div class="background">
    <div class="full" />
    <div class="negative">
      <div class="header">
        <v-row justify="space-between" align="center">
          <v-col>
            <v-row>
              <img height="40" src="../../static/logistik_logo_lingkar.svg">
              <div class="title-page">Logistik Alat Kesehatan</div>
            </v-row>
          </v-col>
          <v-col>
            <v-row class="float-right">
              <v-icon color="white" size="17">mdi-phone-in-talk</v-icon>
              <div class="call-center">Call Center</div>
              <v-icon color="white" size="17">mdi-help-circle</v-icon>
              <div class="pusat-bantuan">Pusat Bantuan</div>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <v-card class="main-card" outlined>
        <v-row align="center">
          <v-col>
            <div class="font-product-sans card-title ml-10 mb-5 font-weight-bold">Selamat Datang,</div>
            <p
              class="ml-10 font-product-sans card-text"
            >Formulir ini berfungsi untuk mendata permohonan darurat logistik kesehatan yang dibutuhkan oleh INSTANSI KESEHATAN meliputi: rumah sakit, puskesmas, dan klinik umum dan akan kami saring sesuai dengan prioritas wilayah kedaruratan terdampak COVID-19 di Jawa Barat.</p>
            <v-btn class="ml-10" min-width="140px" color="success">Mulai</v-btn>
          </v-col>
          <v-col>
            <img height="340" src="../../static/intro.svg">
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>
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
