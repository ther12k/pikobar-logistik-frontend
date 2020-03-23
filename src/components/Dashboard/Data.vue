<template>
  <v-card
    max-width="100%"
    class=""
  >
    <v-container>
      <p class="title">Rekap Kasus Dinas Kesehatan Kota Cimahi</p>
      <v-row>
        <v-col
          cols="12"
          md="3"
          sm="6"
          width="25%"
        >
          <v-card
            class="mx-auto"
            outlined
          >
            <v-row>
              <v-col cols="4">
                <p class="subtitle-1 pl-4">Jumlah kasus terdata Dinas Kesehatan Kota Cimahi</p>
              </v-col>
              <v-col cols="8">
                <v-list-item-title class="headline mb-1">0</v-list-item-title>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card
            color="#EF9A9A"
          >
            <v-card-title class="headline text-center d-block mx-auto">POSITIF</v-card-title>

            <v-spacer />

            <v-card-subtitle class="text-center display-2	mb-4">{{ patien.TOTAL }}</v-card-subtitle>

          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="3"
          sm="6"
          width="25%"
        >
          <v-card
            color="#BBDEFB"
          >
            <v-card-title class="headline text-center d-block mx-auto">SEMBUH</v-card-title>

            <v-spacer />

            <v-card-subtitle class="text-center display-2 mb-4">{{ patien.ODP }}</v-card-subtitle>

          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="3"
          sm="6"
          width="25%"
        >
          <v-card
            color="#FFCC80"
          >
            <v-card-title class="headline text-center d-block mx-auto">MENINGGAL</v-card-title>

            <v-spacer />

            <v-card-subtitle class="text-center display-2 mb-4">{{ patien.PDP }}</v-card-subtitle>

          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="3"
          sm="6"
          width="25%"
        >
          <v-card
            outlined
          >
            <v-card-title class="headline text-center d-block mx-auto">ODP</v-card-title>
            <v-row>
              <v-col cols="4">
                <v-card-title class="headline text-center d-block mx-auto">X(x%)</v-card-title>

                <v-card-subtitle class="text-center mb-4 pt-2">Proses Pemantauan</v-card-subtitle>
              </v-col>
              <v-col cols="4">
                <v-card-title class="headline text-center d-block mx-auto">X(x%)</v-card-title>

                <v-card-subtitle class="text-center mb-4 pt-2">Selesai Pemantauan</v-card-subtitle>
              </v-col>
              <v-col cols="4">
                <v-card-title class="headline text-center d-block mx-auto">X</v-card-title>

                <v-card-subtitle class="text-center mb-4 pt-4">Total ODP</v-card-subtitle>
              </v-col>
            </v-row>

          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            outlined
          >
            <v-card-title class="headline text-center d-block mx-auto">PDP</v-card-title>

            <v-row>
              <v-col cols="4">
                <v-card-title class="headline text-center d-block mx-auto">X(x%)</v-card-title>

                <v-card-subtitle class="text-center mb-4 pt-2">Proses Pemantauan</v-card-subtitle>
              </v-col>
              <v-col cols="4">
                <v-card-title class="headline text-center d-block mx-auto">X(x%)</v-card-title>

                <v-card-subtitle class="text-center mb-4 pt-2">Selesai Pemantauan</v-card-subtitle>
              </v-col>
              <v-col cols="4">
                <v-card-title class="headline text-center d-block mx-auto">X</v-card-title>

                <v-card-subtitle class="text-center mb-4 pt-4">Total PDP</v-card-subtitle>
              </v-col>
            </v-row>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardData',
  data: () => ({
    patien: {
      ODP: 0,
      PDP: 0,
      POSITIF: 0,
      TOTAL: 0
    }
  }),
  computed: {
    ...mapGetters('user', [
      'roles',
      'district_user'
    ])
  },
  async mounted() {
    let params
    if (this.roles[0] === 'dinkeskota') {
      params = {
        address_district_code: this.district_user
      }
    }
    const data = await this.$store.dispatch('reports/countReportCase', params)
    this.patien = await data.data
    this.patien.TOTAL = this.patien.ODP + this.patien.PDP + this.patien.POSITIF
  }
}
</script>
