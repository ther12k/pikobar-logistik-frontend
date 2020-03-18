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
          <v-label>ID Kasus</v-label>
        </v-col>
        <v-col auto>
          <v-text-field
            v-model="detailData.id_case"
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
        <v-tabs class="tab-detail">
          <v-tab>Status Rekam</v-tab>
          <v-tab>Detail Pasien</v-tab>
          <v-tab-item
            v-for="tabs in 2"
            :key="tabs"
          >
            <v-container fluid>
              <div v-if="tabs === 1">
                Tab 1
              </div>
              <div v-else>
                <v-row class="row-detail">
                  <v-col class="row-detail-label" cols="3">
                    <v-label>Kwarganegaraan</v-label>
                  </v-col>
                  <v-col auto>
                    <v-text-field
                      v-model="detailData.nationality"
                      disabled
                      hide-details
                      solo-inverted
                    />
                  </v-col>
                </v-row>
                <v-row class="row-detail">
                  <v-col class="row-detail-label" cols="3">
                    <v-label>Tanggal Lahir</v-label>
                  </v-col>
                  <v-col auto>
                    <v-text-field
                      v-model="birthDate"
                      disabled
                      hide-details
                      solo-inverted
                    />
                  </v-col>
                </v-row>
                <v-row class="row-detail">
                  <v-col class="row-detail-label" cols="3">
                    <v-label>Jenis Kelamin</v-label>
                  </v-col>
                  <v-col auto>
                    <v-text-field
                      v-model="detailGender"
                      disabled
                      hide-details
                      solo-inverted
                    />
                  </v-col>
                </v-row>
                <v-row class="row-detail">
                  <v-col class="row-detail-label" cols="3">
                    <v-label>Nomor Telepon</v-label>
                  </v-col>
                  <v-col auto>
                    <v-text-field
                      v-model="detailData.phone_number"
                      disabled
                      hide-details
                      solo-inverted
                    />
                  </v-col>
                </v-row>
                <v-row class="row-detail">
                  <v-col class="row-detail-label" cols="3">
                    <v-label>Alamat</v-label>
                  </v-col>
                  <v-col auto>
                    <v-text-field
                      v-model="detailData.address_street"
                      disabled
                      hide-details
                      solo-inverted
                    />
                  </v-col>
                </v-row>
                <v-row class="row-detail">
                  <v-col class="row-detail-label" cols="3">
                    <v-label>Pekerjaan</v-label>
                  </v-col>
                  <v-col auto>
                    <v-text-field
                      v-model="detailData.occupation"
                      disabled
                      hide-details
                      solo-inverted
                    />
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { formatDatetime } from '@/utils/parseDatetime'
export default {
  name: 'DetailPatient',
  props: {
    idData: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      birthDate: '',
      detailGender: '',
      detailData: ''
    }
  },
  async mounted() {
    const response = await this.$store.dispatch('reports/detailReportCase', this.idData)
    this.detailData = await response.data
    if (this.detailData) {
      this.birthDate = await formatDatetime(this.detailData.birth_date, 'DD-MM-YYYY')
      this.detailGender = await this.detailData.gender === 'L' ? 'Laki-Laki' : 'Perempuan'
    }
  },
  methods: {
    formatDatetime
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
