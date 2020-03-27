<template>
  <div>
    <v-card-text>
      <div style="font-size: 1.5rem;">
        {{ titleDetail }}
      </div>
    </v-card-text>
    <v-card
      outlined
    >
      <v-row class="row-detail">
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label>ID Peserta</label>
        </v-col>
        <v-col auto>
          <v-text-field
            v-model="detailCase"
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label>NIK</label>
        </v-col>
        <v-col auto>
          <v-text-field
            v-model="detailData.nik"
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label>Nama Peserta</label>
        </v-col>
        <v-col auto>
          <v-text-field
            v-model="detailData.nama"
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label>Kategori Peserta</label>
        </v-col>
        <v-col auto>
          <v-text-field
            v-model="detailData.type_target"
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label>Tanggal Lahir</label>
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
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label>Usia</label>
        </v-col>
        <v-col auto>
          <v-text-field
            v-model="detailData.age"
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label>Jenis Kelamin</label>
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
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label>Alamat</label>
        </v-col>
        <v-col auto>
          <v-textarea
            v-model="detailAddres"
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
      <v-row class="row-detail">
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label>Nomor Telepon</label>
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
    </v-card>
  </div>
</template>

<script>
import { formatDatetime } from '@/utils/parseDatetime'
import { completeAddress } from '@/utils/utilsFunction'

export default {
  name: 'ParticipantDetail',
  props: {
    titleDetail: {
      type: String,
      default: null
    },
    idData: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      panelListRiwayat: [0],
      birthDate: '',
      detailGender: '',
      detailCase: '',
      detailData: '',
      detailAddres: ''
    }
  },
  async mounted() {
    const response = await this.$store.dispatch('rdt/detailParticipant', this.idData)
    this.detailData = await response.data
    this.detailCase = await response.data.id_case ? response.data.id_case.toUpperCase() : ''
    if (this.detailData) {
      if (this.detailData.birth_date) {
        this.birthDate = await formatDatetime(this.detailData.birth_date, 'DD MMMM YYYY')
      }
      this.detailGender = await this.detailData.gender === 'L' ? 'Laki-Laki' : 'Perempuan'
      this.detailAddres = this.completeAddress(
        this.detailData.address_district_name,
        this.detailData.address_subdistrict_name,
        this.detailData.address_village_name,
        this.detailData.address_street
      )
    }
  },
  methods: {
    formatDatetime,
    completeAddress,
    getTableRowNumbering(index) {
      return (index + 1)
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
