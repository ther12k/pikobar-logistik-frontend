<template>
  <div>
    <div class="full" />
    <div class="margin-form background">
      <div class="negative green-background mx-auto">
        <v-row>
          <v-col cols="8" align="center">
            <div class="title-page">{{ $t('label.applicant_form_title') }}</div>
          </v-col>
          <v-col cols="2">
            <v-row>
              <v-icon color="white" size="25">{{ $t('label.icon_talk') }}</v-icon>
              <div class="call-center">{{ $t('label.call_center') }}</div>
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row>
              <v-icon color="white" size="25">{{ $t('label.icon_help') }}</v-icon>
              <div class="pusat-bantuan">{{ $t('label.help_center') }}</div>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <v-card>
        <v-stepper v-model="step" :alt-labels="true">
          <v-stepper-header>
            <v-stepper-step class="left-margin" :complete="step > 1" step="1"><center>{{ $t('label.step_title_1') }}</center></v-stepper-step>
            <v-divider />
            <v-stepper-step :complete="step > 2" step="2"><center>{{ $t('label.step_title_2') }}</center></v-stepper-step>
            <v-divider />
            <v-stepper-step step="3"><center>{{ $t('label.step_title_3') }}</center></v-stepper-step>
            <v-divider />
            <v-stepper-step class="right-margin" step="4"><center>{{ $t('label.step_title_4') }}</center></v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <identitas-instansi-pemohon />
              <div class="margin-button">
                <v-btn class="margin-positive" color="primary" @click="step = 2">{{ $t('label.next') }}</v-btn>
                <v-btn class="margin-positive" outlined text>{{ $t('label.cancel') }}</v-btn>
              </div>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card class="mb-12" color="grey lighten-1" height="200px" />
              <v-btn class="margin-positive" color="primary" @click="step = 3">{{ $t('label.next') }}</v-btn>
              <v-btn class="margin-positive" outlined text @click="step = 1">{{ $t('label.cancel') }}</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card class="mb-12" color="grey lighten-1" height="200px" />
              <v-btn class="margin-positive" color="primary" @click="step = 4">{{ $t('label.next') }}</v-btn>
              <v-btn class="margin-positive" outlined text @click="step = 2">{{ $t('label.cancel') }}</v-btn>
            </v-stepper-content>
            <v-stepper-content step="4">
              <v-card class="mb-12" color="grey lighten-1" height="200px" />
              <v-btn class="margin-positive" color="primary" @click="step = 1">{{ $t('label.next') }}</v-btn>
              <v-btn class="margin-positive" outlined text @click="step = 3">{{ $t('label.cancel') }}</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormPermohonanLogistik'
}
</script>
<style>
.green-background {
  background: #27ae60;
}
.margin-form {
  margin: 80px;
}
.background {
  background-color: #e0e0e0;
}
.form-header {
  margin-right: 40px;
  margin-left: 40px;
}
.title-page {
  padding: 5px 20px;
  font-size: 22px;
  color: white;
  line-height: 29px;
}
.full {
  width: 100vw;
  height: 30vh;
  background: #27ae60;
}
.negative {
  margin-top: -250px;
}
.float-right {
  float: right;
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
.margin-negative {
  margin-top: -30px
}
.margin-positive {
  margin: 10px;
  float: right
}
.left-margin {
  margin-left: 200px;
}
.right-margin {
  margin-right: 200px;
}
.margin-button {
  margin-top: -80px;
}
</style>
