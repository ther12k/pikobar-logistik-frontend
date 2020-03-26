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
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label style="font-weight: bold;font-size: 20px;line-height: 20px;">ID Kasus</label>
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
          <label>ID Kasus</label>
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
          <label>ID Kasus Terkait</label>
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
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label>ID Kasus Pusat</label>
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
        <v-col
          cols="12"
          md="3"
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
          <label>Nama Kasus</label>
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
      <v-row class="row-detail">
        <v-col
          cols="12"
          md="6"
          sm="12"
          class="row-detail-label"
        >
          <v-row>
            <v-col>
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
        </v-col>
        <v-col
          cols="12"
          md="6"
          sm="12"
          class="row-detail-label"
        >
          <v-row v-if="detailData.nationality === 'WNA'">
            <v-col>
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
      <v-row class="row-detail">
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label style="font-weight: bold;font-size: 20px;line-height: 20px;">Pekerjaan</label>
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
          <label>Pekerjaan</label>
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
      <v-row class="row-detail">
        <v-col
          cols="12"
          md="3"
          sm="12"
          class="row-detail-label"
        >
          <label>Alamat Kantor</label>
        </v-col>
        <v-col auto>
          <v-textarea
            v-model="detailData.office_address"
            disabled
            hide-details
            solo-inverted
          />
        </v-col>
      </v-row>
    </v-card>
    <v-card
      style="margin-top: 2rem;"
      outlined
    >
      <v-row>
        <v-expansion-panels
          v-model="panelListRiwayat"
          multiple
        >
          <v-expansion-panel>
            <v-expansion-panel-header>List Riwayat Kasus</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-simple-table fixed-header height="500px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">#</th>
                      <th class="text-left">STATUS</th>
                      <th class="text-left">TAHAPAN</th>
                      <th class="text-left">HASIL</th>
                      <th class="text-left">LOKASI SAAT INI</th>
                      <th class="text-left">TANGGAL DIUPDATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in listHistoryCase" :key="item.index">
                      <td>{{ getTableRowNumbering(index) }}</td>
                      <td><status :status="item.status" /></td>
                      <td>
                        <div v-if="item.stage === '0'">
                          Proses
                        </div>
                        <div v-else>
                          Selesai
                        </div>
                      </td>
                      <td>
                        <div v-if=" item.final_result =='0'">
                          Negatif
                        </div>
                        <div v-else-if=" item.final_result =='1'">
                          Sembuh
                        </div>
                        <div v-else-if=" item.final_result =='2'">
                          Meninggal
                        </div>
                        <div v-else>
                          -
                        </div>
                      </td>
                      <td>{{ item.current_location_address }}</td>
                      <td>{{ formatDatetime(item.last_changed, "DD MMMM YYYY") }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { formatDatetime } from '@/utils/parseDatetime'
import { completeAddress } from '@/utils/utilsFunction'

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
      listHistoryCase: null,
      panelListRiwayat: [0],
      birthDate: '',
      detailGender: '',
      detailCase: '',
      detailData: '',
      detailAddres: ''
    }
  },
  async mounted() {
    const response = await this.$store.dispatch('reports/detailReportCase', this.idData)
    const responseHistory = await this.$store.dispatch('reports/listHistoryCase', this.idData)
    this.listHistoryCase = responseHistory.data
    this.detailData = await response.data
    this.detailCase = await response.data.id_case.toUpperCase()
    if (this.detailData) {
      if (this.detailData.birth_date) {
        this.birthDate = await formatDatetime(this.detailData.birth_date, 'DD-MM-YYYY')
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
