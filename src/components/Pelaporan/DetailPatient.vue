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
          <v-card-text>Nama Kasus</v-card-text>
        </v-col>
        <v-col auto>
          <v-text-field
            v-model="detailData.name"
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col class="row-detail-label" cols="3">
          <v-card-text>ID Kasus</v-card-text>
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
          <v-card-text>ID Kasus Terkait</v-card-text>
        </v-col>
        <v-col auto>
          <v-text-field
            v-model="detailData.id_case_related"
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col class="row-detail-label" cols="3">
          <v-card-text>ID Kasus Pusat</v-card-text>
        </v-col>
        <v-col auto>
          <v-text-field
            v-model="detailData.id_case_national"
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col class="row-detail-label" cols="3">
          <v-card-text>Kwarganegaraan</v-card-text>
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
          <v-card-text>Tanggal Lahir</v-card-text>
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
          <v-card-text>Jenis Kelamin</v-card-text>
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
          <v-card-text>Nomor Telepon</v-card-text>
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
          <v-card-text>Alamat</v-card-text>
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
          <v-card-text>Pekerjaan</v-card-text>
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
