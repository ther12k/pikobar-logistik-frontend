<template>
  <div>
    <h1><b>{{ kota }}</b></h1>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto"
          outlined
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-green">Kit Diterima</v-list-item-title>
              <v-list-item-title class="mb-1">{{ kitDiterima }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-green">Kit Tersedia</v-list-item-title>
              <v-list-item-title class="mb-1">{{ kitTersedia }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-green">Kit Terpakai</v-list-item-title>
              <v-list-item-title class="mb-1">{{ kitTerpakai }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto"
          outlined
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-green">Positif</v-list-item-title>
              <v-list-item-title class="mb-1">0% ({{ kitDiterima }} Orang)</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-green">Negatif</v-list-item-title>
              <v-list-item-title class="mb-1">0% ({{ kitTersedia }} Orang)</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-green">Invalid</v-list-item-title>
              <v-list-item-title class="mb-1">0% ({{ kitTerpakai }} Orang)</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-card
      outlined
    >
      <v-row>
        <v-col>
          <v-card-text>
            <div class="text-size">
              Daftar Penggunaan RDT Kit
            </div>
          </v-card-text>
        </v-col>
      </v-row>
      <hr>
      <v-row>
        <v-col auto>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">#</th>
                  <th class="text-left">NAMA FASKES</th>
                  <th class="text-left">STOK DINKES</th>
                  <th class="text-left">KIT TERPAKAI</th>
                  <th class="text-left">STOK SISA</th>
                  <th class="text-left">POSITIF</th>
                  <th class="text-left">NEGATIF</th>
                  <th class="text-left">INVALID</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in dataPengguna" :key="item.index">
                  <td>{{ getTableRowNumbering(index) }}</td>
                  <td>{{ item.namaFaskes }}</td>
                  <td>{{ item.stokDinkes }}</td>
                  <td>{{ item.kitTerpakai }}</td>
                  <td>
                    {{ item.stokSisa }}
                  </td>
                  <td>{{ item.positif }}</td>
                  <td>
                    {{ item.negatif }}
                  </td>
                  <td>
                    {{ item.invalid }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card>
    <pagination
      :total="totalList "
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      :on-next="onNext"
    />
    <dialog-delete
      :dialog="dialog"
      :data-deleted="dataDelete"
      :dialog-delete.sync="dialog"
      :delete-date.sync="dataDelete"
      :store-path-delete="`reports/deleteReportCase`"
      :store-path-get-list="`reports/listReportCase`"
      :list-query="listQuery"
    />
  </div>
</template>

<script>
import { formatDatetime } from '@/utils/parseDatetime'
import { completeAddress } from '@/utils/utilsFunction'

export default {
  name: 'DetailPenggunaan',
  props: {
    idData: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      kota: '',
      kitDiterima: 0,
      kitTersedia: 0,
      kitTerpakai: 0,
      positif: 0,
      negatif: 0,
      invalid: 0,
      totalODP: 0,
      totalPDP: 0,
      totalPositif: 0,
      totalReport: 0,
      // data dummy TODO: integrasi dengan API
      dataPengguna: [
        {
          namaFaskes: 'RSUD 1',
          stokDinkes: 115,
          kitTerpakai: 100,
          stokSisa: 15,
          positif: 25,
          negatif: 50,
          invalid: 25
        },
        {
          namaFaskes: 'RSUD 2',
          stokDinkes: 100,
          kitTerpakai: 80,
          stokSisa: 20,
          positif: 25,
          negatif: 50,
          invalid: 25
        }
      ],
      queryReportCase: {
        address_district_code: ''
      },
      listQuery: {
        address_district_code: '',
        page: 1,
        limit: 10,
        search: ''
      },
      countingReports: null,
      dialog: false,
      dataDelete: null
    }
  },
  async mounted() {
      // TODO: integrasi dengan API
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
.text-green {
  color: #219653;
}
.text-size {
    font-size: 1.5rem;
}
</style>
