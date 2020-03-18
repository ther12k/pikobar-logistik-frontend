<template>
  <div>
    <v-card-text>
      <div style="font-size: 1.5rem;">
        Detail Kasus
      </div>
    </v-card-text>
    <v-card
      outlined
    >
      <v-row class="row-detail">
        <v-col class="row-detail-label" cols="3">
          <v-label>Nama Pasien</v-label>
        </v-col>
        <v-col auto>
          <v-text-field
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col class="row-detail-label" cols="3">
          <v-label>ID Kasus Terkait</v-label>
        </v-col>
        <v-col auto>
          <v-text-field
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col class="row-detail-label" cols="3">
          <v-label>ID Kasus Pusat</v-label>
        </v-col>
        <v-col auto>
          <v-text-field
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col class="row-detail-label" cols="3">
          <v-label>NIK</v-label>
        </v-col>
        <v-col auto>
          <v-text-field
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col class="row-detail-label" cols="3">
          <v-label>Nama Pasien</v-label>
        </v-col>
        <v-col auto>
          <v-text-field
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <!--      <v-row class="row-detail">-->
      <!--        <v-tabs class="tab-detail">-->
      <!--          <v-tab>Status Rekam</v-tab>-->
      <!--          <v-tab>Detail Pasien</v-tab>-->
      <!--          <v-tab-item-->
      <!--            v-for="tabs in 2"-->
      <!--            :key="tabs"-->
      <!--          >-->
      <!--            <v-container fluid>-->
      <!--              <div v-if="tabs === 1">-->
      <!--                Tab 1-->
      <!--              </div>-->
      <!--              <div v-else>-->
      <!--                Tab 2-->
      <!--              </div>-->
      <!--            </v-container>-->
      <!--          </v-tab-item>-->
      <!--        </v-tabs>-->
      <!--      </v-row>-->
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'DetailPatient',
  props: {
    detail: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.row-detail {
  padding-left: 2rem;
  padding-right: 2rem;
}
.row-detail-label {
  margin: auto;
}
</style>
