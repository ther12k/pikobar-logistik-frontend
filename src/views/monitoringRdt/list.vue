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
              >{{ quantity_distributed }}</v-list-item-title>
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
              >{{ quantity_available }}</v-list-item-title>
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
              >{{ quantity_used }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="2">
        <v-label><b>Urutkan</b></v-label>
        <v-select
          v-model="listQuery.sort"
          :items="sortOption"
          outlined
          item-text="label"
          item-value="value"
          @change="handleSearch"
        />
      </v-col>
      <v-col cols="12" sm="3">
        <v-label><b>Tujuan Distribusi</b></v-label>
        <select-area-district-city :on-select-district-city="onSelectDistrictCity" />
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
                <tr v-for="(item, index) in recipientList" :key="item.index">
                  <td>{{ getTableRowNumbering(index) }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.total_stock }}</td>
                  <td>{{ item.total_used }}</td>
                  <td>{{ item.total_stock - item.total_used }}</td>
                  <td><v-btn text small color="info" @click="handleDetail(item.id)">Detail</v-btn></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card>
    <pagination
      :total="totalList"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      :on-next="onNext"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MonitoringRdtList',
  data() {
    return {
      sortOption: [
        { value: 'asc', label: 'A-Z' },
        { value: 'desc', label: 'Z-A' }
      ],
      quantity_distributed: 0, // to do : get data from api
      quantity_available: 0, // to do : get data from api
      quantity_used: 0, // to do : get data from api
      listQuery: {
        page: 1,
        limit: 10,
        search: '',
        sort: '',
        kabkota_kode: ''
      }
    }
  },
  computed: {
    ...mapGetters('recipient', [
      'recipientList',
      'totalList'
    ])
  },
  watch: {
    'listQuery.search': {
      handler: function(value) {
        if (value.length >= 3) {
          this.listQuery.page = 1
          this.handleSearch()
        } else if (value.length === 0) {
          this.listQuery.page = 1
          this.handleSearch()
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.getMonitoringRdtList()
  },
  methods: {
    async getMonitoringRdtList() {
      await this.$store.dispatch('recipient/getListRecipient', this.listQuery)
    },
    async handleSearch() {
      await this.getMonitoringRdtList()
    },
    async onNext() {
      await this.getMonitoringRdtList()
    },
    getTableRowNumbering(index) {
      return ((this.listQuery.page - 1) * this.listQuery.limit) + (index + 1)
    },
    handleDetail(id) {
      // To do: Direct to detail page
      console.log(id)
    },
    onSelectDistrictCity(value) {
      this.listQuery.kabkota_kode = value.kemendagri_kabupaten_kode
      this.handleSearch()
    }
  }
}
</script>
