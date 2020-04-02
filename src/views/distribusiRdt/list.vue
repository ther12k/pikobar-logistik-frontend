
<template>
  <div>
    <v-row>
      <v-col cols="3">
        <v-card
          outlined
        >
          <v-list-item two-line class="card-stok-awal">
            <v-list-item-content>
              <v-list-item-title class="white--text">{{ $t('label.first_stock') }}</v-list-item-title>
              <v-list-item-title class="headline mb-1 white--text isi-jumlah">{{ Math.abs(firstStock) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          outlined
        >
          <v-list-item two-line class="card-terdistribusi">
            <v-list-item-content>
              <v-list-item-title class="white--text">{{ $t('label.distributed_stock') }}</v-list-item-title>
              <v-list-item-title class="headline mb-1 white--text isi-jumlah">{{ Math.abs(distributedStock) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          outlined
        >
          <v-list-item two-line class="card-stok-sisa">
            <v-list-item-content>
              <v-list-item-title class="white--text">{{ $t('label.remaining_stock') }}</v-list-item-title>
              <v-list-item-title class="headline mb-1 white--text isi-jumlah">{{ Math.abs(remainingStock) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-btn
          outlined
          color="#14a942"
          class="btn-tambah-distribusi"
        >
          <v-icon left>add</v-icon>
          {{ $t('label.add_distribution') }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-list-item two-line>
          <v-list-item-content>
            <v-label class="title">{{ $t('label.sort') }}</v-label>
            <v-select
              v-model="listQuery.sort"
              :items="sortOptions"
              item-text="label"
              item-value="value"
              solo
              @change="handleSearch()"
            />
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="3">
        <v-list-item two-line>
          <v-list-item-content>
            <v-label class="title">{{ $t('label.distribution_destination') }}</v-label>
            <select-area-district-city
              :on-select-district-city="changeDistrict"
            />
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="3">
        <v-list-item two-line>
          <v-list-item-content>
            <v-label class="title">{{ $t('label.distribution_date') }}</v-label>
            <date-picker
              :value="date"
              @selected="changeDate"
            />
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="2">
        <v-card
          outlined
          class="card-search"
        >
          <search
            :handle-search="handleSearch"
            :list-query="listQuery"
            solo
          />
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-btn
          class="bottom-add-survey btn-export"
          color="#14a942"
        >
          {{ $t('label.export_button') }}
        </v-btn>
      </v-col>
    </v-row>
    <v-card
      outlined
    >
      <v-row>
        <v-col>
          <v-card-text>
            <div class="headline">
              {{ $t('label.rdt_distribution_table_title') }}
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
                  <th class="text-left">{{ $t('label.number').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.distribution_destination').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.delivered_kit').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.distribution_date').toUpperCase() }}</th>
                  <th v-if="roles[0] === 'dinkesprov'" class="text-left">{{ $t('label.action').toUpperCase() }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in listRdtDistribution" :key="item.index">
                  <td>{{ getTableRowNumbering(index) }}</td>
                  <td>{{ item.name.toUpperCase() }}</td>
                  <td>{{ Math.abs(item.quantity) }}</td>
                  <td>{{ item.time.substr(0, 10) }}</td>
                  <td><a href="">Edit</a></td>
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
    <dialog-delete
      :dialog="dialog"
      :data-deleted="dataDelete"
      :dialog-delete.sync="dialog"
      :delete-date.sync="dataDelete"
      :store-path-delete="`reports/deleteReportCase`"
      :store-path-get-list="`rdtDistribution/getListRdtDistribution`"
      :list-query="listQuery"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LaporanList',
  data() {
    return {
      totalReport: 0,
      queryReportCase: {
        address_district_code: ''
      },
      listQuery: {
        sort: 'asc',
        page: 1,
        limit: 10,
        search: '',
        kabkota_kode: '',
        kec_kode: '',
        time: ''
      },
      countingReports: null,
      dialog: false,
      dataDelete: null,
      modal: false,
      date: null,
      sortOptions: [
        { value: 'asc', label: 'A-Z' },
        { value: 'desc', label: 'Z-A' }
      ]
    }
  },
  computed: {
    ...mapGetters('rdtDistribution', [
      'listRdtDistribution',
      'totalList',
      'firstStock',
      'distributedStock',
      'remainingStock'
    ]),
    ...mapGetters('user', [
      'roles',
      'district_user'
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
  async mounted() {
    this.listQuery.address_district_code = this.district_user
    this.queryReportCase.address_district_code = this.district_user
    await this.$store.dispatch('rdtDistribution/getSummary')
    this.handleSearch()
  },
  methods: {
    async handleSearch() {
      await this.$store.dispatch('rdtDistribution/getListRdtDistribution', this.listQuery)
    },
    getTableRowNumbering(index) {
      return ((this.listQuery.page - 1) * this.listQuery.limit) + (index + 1)
    },
    async onNext() {
      await this.$store.dispatch('rdtDistribution/getListRdtDistribution', this.listQuery)
    },
    changeDate(value) {
      this.listQuery.time = value
      this.handleSearch()
    },
    changeDistrict(value) {
      !value ? this.listQuery.kabkota_kode = '' : this.listQuery.kabkota_kode = parseFloat(value.kemendagri_kabupaten_kode)
      this.handleSearch()
    }
  }
}
</script>

<style>
  .isi-jumlah {
    padding-top: 2rem
  }
  .card-stok-awal {
    background: linear-gradient(90deg, #4F4F4F 0%, #828282 100%)
  }
  .card-terdistribusi {
    background: linear-gradient(90deg, #219653 0%, #27AE60 100%)
  }
  .card-stok-sisa {
    background: linear-gradient(90deg, #F36464 0%, #FE9090 100%)
  }
  .btn-tambah-distribusi {
    height: 104px !important;
    width: 100%
  }
  .card-search {
    margin-top: 30px
  }
  .btn-export {
    height: 50px !important;
    margin-top: 29px !important;
    min-width: 100% !important
  }
</style>
