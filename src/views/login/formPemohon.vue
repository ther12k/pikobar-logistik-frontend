<template>
  <div style="margin: 80px">
    <v-card class="mx-auto" outlined>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>
          <v-divider />
          <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>
          <v-divider />
          <v-stepper-step step="3">Name of step 3</v-stepper-step>
          <v-divider />
          <v-stepper-step step="4">Name of step 4</v-stepper-step>

        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12" outlined height="200px">
              <div>
                <center>
                  <v-label class="title"><b>Silahkan isi indentitas instansi kesehatan/faskes anda dengan benar sehingga kami bisa melihat kebutuhan yang dibutuhkan oleh faskes anda secara akurat.</b></v-label>
                </center>
              </div>
              <div>
                <v-row>
                  <v-col cols="6">
                    <v-label class="title"><b>Jenis Instansi</b></v-label>
                  </v-col>
                  <v-col cols="6">
                    <v-label class="title"><b>Nama Kabupaten/Kota</b></v-label>
                  </v-col>
                </v-row>
              </div>
            </v-card>
            <v-btn style="float: right" color="primary" @click="e1 = 2">Berikutnya</v-btn>
            <v-btn style="float: right" text>Batal</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-12" color="grey lighten-1" height="200px">Batal</v-card>
            <v-btn color="primary" @click="e1 = 3">Berikutnya</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-12" color="grey lighten-1" height="200px">asd</v-card>
            <v-btn color="primary" @click="e1 = 1">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'FormPermohonanLogistik',
  data() {
    return {
      e1: 1
    }
  }
}
</script>
