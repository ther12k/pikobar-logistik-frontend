<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="6"
        sm="12"
        class="row-detail-label"
      >
        <div style="font-size: 1.5rem;">
          {{ titleDetail }}
        </div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        sm="12"
      >
        <v-btn
          color="success"
          bottom
          style="float: right;"
          @click="backList"
        >
          Kembali ke list
        </v-btn>
      </v-col>
    </v-row>
    <v-card
      outlined
    >
      <v-row>
        <v-col
          cols="12"
          md="6"
          sm="12"
        >
          <v-row class="row-detail">
            <v-col
              cols="12"
              md="6"
              sm="12"
              class="row-detail-label"
            >
              <label style="font-weight: bold;font-size: 20px;line-height: 20px;">Mekanisme Test</label>
            </v-col>
            <v-col auto />
          </v-row>
          <v-row class="row-detail">
            <v-col
              cols="12"
              md="3"
              sm="12"
              class="row-detail-label"
            >
              <label>Kategori</label>
            </v-col>
            <v-col auto>
              <v-text-field
                v-model="detailData.category"
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
              <label>Mekanisme</label>
            </v-col>
            <v-col auto>
              <v-text-field
                v-model="detailData.mechanism"
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
              <label>Sasaran</label>
            </v-col>
            <v-col auto>
              <v-text-field
                v-model="detailData.target"
                disabled
                hide-details
                solo-inverted
              />
            </v-col>
          </v-row>
          <v-row class="row-detail">
            <v-col
              cols="12"
              md="6"
              sm="12"
              class="row-detail-label"
            >
              <label style="font-weight: bold;font-size: 20px;line-height: 20px;">Hasil Test</label>
            </v-col>
            <v-col auto />
          </v-row>
          <v-row class="row-detail">
            <v-col
              cols="12"
              md="3"
              sm="12"
              class="row-detail-label"
            >
              <label>Tanggal Pelaksanaan</label>
            </v-col>
            <v-col auto>
              <v-text-field
                v-model="testDate"
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
              <label>Tempat Test</label>
            </v-col>
            <v-col auto>
              <v-text-field
                v-model="detailData.test_location"
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
              <label>Nama Tempat Test</label>
            </v-col>
            <v-col auto>
              <v-text-field
                v-model="detailData.test_other_location"
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
                v-model="testAddres"
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
              <label>Hasil</label>
            </v-col>
            <v-col auto>
              <status :status="detailData.final_result" />
            </v-col>
          </v-row>
          <v-row class="row-detail">
            <v-col
              cols="12"
              md="3"
              sm="12"
              class="row-detail-label"
            >
              <label>Jenis Alat Test</label>
            </v-col>
            <v-col auto>
              <v-text-field
                v-model="detailData.tool_tester"
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
              <label>Metode yang Digunakan</label>
            </v-col>
            <v-col auto>
              <v-text-field
                v-model="detailData.test_method"
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
              <label>Keterangan</label>
            </v-col>
            <v-col auto>
              <v-textarea
                v-model="detailData.test_note"
                disabled
                hide-details
                solo-inverted
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col auto>
          <v-row class="row-detail">
            <v-col
              cols="12"
              md="6"
              sm="12"
              class="row-detail-label"
            >
              <label style="font-weight: bold;font-size: 20px;line-height: 20px;">Identitas</label>
            </v-col>
            <v-col auto />
          </v-row>
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
                v-model="detailData.name"
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
              <label>Kewarganegaraan</label>
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
          <v-row
            v-if="detailData.nationality === 'WNA'"
            class="row-detail"
          >
            <v-col
              cols="12"
              md="3"
              sm="12"
              class="row-detail-label"
            >
              <label>Negara</label>
            </v-col>
            <v-col auto>
              <v-text-field
                v-model="detailData.nationality_name"
                disabled
                hide-details
                solo-inverted
              />
            </v-col>
          </v-row>
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
      testDate: '',
      detailGender: '',
      detailCase: '',
      detailData: '',
      detailAddres: '',
      testAddres: ''
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
      if (this.detailData.test_date) {
        this.testDate = await formatDatetime(this.detailData.test_date, 'DD MMMM YYYY')
      }
      this.detailGender = await this.detailData.gender === 'L' ? 'Laki-Laki' : 'Perempuan'
      this.detailAddres = this.completeAddress(
        this.detailData.address_district_name,
        this.detailData.address_subdistrict_name,
        this.detailData.address_village_name,
        this.detailData.address_street
      )
      this.testAddres = this.completeAddress(
        this.detailData.test_address_district_name,
        this.detailData.test_address_subdistrict_name,
        this.detailData.test_address_village_name,
        this.detailData.test_address_detail
      )
    }
  },
  methods: {
    formatDatetime,
    completeAddress,
    getTableRowNumbering(index) {
      return (index + 1)
    },
    backList() {
      this.$router.push('/rdt/list')
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
