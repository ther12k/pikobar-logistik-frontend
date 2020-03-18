<template>
  <v-card
    max-width="100%"
    class=""
  >
    <v-container>
      <v-row>
        <v-col cols="3" width="25%">
          <v-card
            color="info"
            dark
          >
            <v-card-title class="headline text-center">Total Pasien</v-card-title>

            <v-spacer/>

            <v-card-subtitle class="text-center display-3	">{{ patien.TOTAL }}</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Lihat Detail</v-btn>
            </v-card-actions>

          </v-card>
        </v-col>
        <v-col cols="3" width="25%">
          <v-card
            color="purple"
            dark
          >
            <v-card-title class="headline text-center">ODP</v-card-title>

            <v-spacer/>

            <v-card-subtitle class="text-center display-3">{{ patien.ODP }}</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Lihat Detail</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="3" width="25%">
          <v-card
            color="warning"
            dark
          >
            <v-card-title class="headline text-center">PDP</v-card-title>

            <v-spacer/>

            <v-card-subtitle class="text-center display-3">{{ patien.PDP }}</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Lihat Detail</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="3" width="25%">
          <v-card
            color="pink"
            dark
          >
            <v-card-title class="headline text-center">Positif</v-card-title>

            <v-spacer/>

            <v-card-subtitle class="text-center display-3">{{ patien.POSITIF }}</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Lihat Detail</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
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
  async mounted() {
    const data = await this.$store.dispatch('reports/countReportCase')
    this.patien = await data.data
    this.patien.TOTAL = this.patien.ODP + this.patien.PDP + this.patien.POSITIF
  }
}
</script>
