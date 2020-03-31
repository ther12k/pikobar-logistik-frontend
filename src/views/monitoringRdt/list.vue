<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto" outlined>
          <v-list-item two-line style="background: linear-gradient(90deg, #4F4F4F 0%, #828282 100%)">
            <v-list-item-content>
              <v-list-item-title style="color: #FFFFFF;">Jumlah RDT Kit Terdistribusi</v-list-item-title>
              <v-list-item-title
                class="headline mb-1"
                style="color: #FFFFFF;padding-top: 2rem;"
              >{{ totalRdtTerdistribusi }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" outlined>
          <v-list-item two-line style="background: linear-gradient(90deg, #219653 0%, #27AE60 100%);">
            <v-list-item-content>
              <v-list-item-title style="color: #FFFFFF;">Jumlah RDT Kit Tersedia</v-list-item-title>
              <v-list-item-title
                class="headline mb-1"
                style="color: #FFFFFF;padding-top: 2rem;"
              >{{ totalRdtTersedia }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" outlined>
          <v-list-item two-line style="background: linear-gradient(90deg, #F36464 0%, #FE9090 100%);">
            <v-list-item-content>
              <v-list-item-title style="color: #FFFFFF;">Jumlah RDT Kit Terpakai</v-list-item-title>
              <v-list-item-title
                class="headline mb-1"
                style="color: #FFFFFF;padding-top: 2rem;"
              >{{ totalRdtTerpakai }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="2">
        <v-label><b>Urutkan</b></v-label>
        <v-select
          :items="items"
          label="A-Z"
          outlined
        />
      </v-col>
      <v-col cols="12" sm="3">
        <v-label><b>Tujuan Distribusi</b></v-label>
        <v-select
          :items="items"
          label="Tujuan Distribusi"
          outlined
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-card outlined style="margin-top:25px">
          <search
            :handle-search="handleSearch"
            :list-query="listQuery"
            outlined
          />
        </v-card>
      </v-col>
      <v-col cols="1" sm="1">
        <v-btn
          class="bottom-add-survey"
          style="margin-top:25px"
          depressed
          outlined
        >
          Export Data
        </v-btn>
      </v-col>
    </v-row>
    <v-card outlined>
      <v-card-text>
        <div style="font-size: 1.5rem;">
          Daftar Laporan Penggunaan RDT Kit
        </div>
      </v-card-text>
      <hr>
      <v-row>
        <v-col auto>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">#</th>
                  <th class="text-left">TUJUAN DISTRIBUSI</th>
                  <th class="text-left">STOK DITERIMA</th>
                  <th class="text-left">STOK TERPAKAI</th>
                  <th class="text-left">SISA STOK</th>
                  <th class="text-left">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in listMonitoringRdt" :key="item.index">
                  <td>{{ getTableRowNumbering(index) }}</td>
                  <td>{{ item.tujuan_distribusi }}</td>
                  <td>{{ item.stok_diterima }}</td>
                  <td>{{ item.stok_terpakai }}</td>
                  <td>{{ item.sisa_stok }}</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'MonitoringRdtList',
  data() {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      totalRdtTerdistribusi: 0,
      totalRdtTersedia: 0,
      totalRdtTerpakai: 0,
      listQuery: {
        address_district_code: '',
        page: 1,
        limit: 10,
        search: ''
      },
      listMonitoringRdt: [
        {
          id: 1,
          tujuan_distribusi: 'Kabupaten Bogor',
          stok_diterima: 1600,
          stok_terpakai: 0,
          sisa_stok: 0
        },
        {
          id: 2,
          tujuan_distribusi: 'Kabupaten Bogor',
          stok_diterima: 1600,
          stok_terpakai: 0,
          sisa_stok: 0
        }
      ]
    }
  },
  computed: {},
  watch: {},
  async mounted() {},
  methods: {
    async handleDetail(id) {
      console.log(id)
    },
    async handleSearch() {
      console.log(this.listQuery)
    },
    getTableRowNumbering(index) {
      return ((this.listQuery.page - 1) * this.listQuery.limit) + (index + 1)
    }
  }
}
</script>
