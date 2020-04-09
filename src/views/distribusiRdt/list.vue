
<template>
  <div>
    <v-row>
      <v-col cols="3">
        <v-card
          outlined
        >
          <v-list-item two-line class="card-stok-awal">
            <v-list-item-content>
              <v-list-item-title class="white--text card-title">{{ $t('label.rdt_province_available_title') }}</v-list-item-title>
              <v-list-item-title class="headline mb-1 white--text isi-jumlah">{{ Math.abs(availableStock) | currency }}</v-list-item-title>
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
              <v-list-item-title class="white--text card-title">{{ $t('label.distributed_stock') }}</v-list-item-title>
              <v-list-item-title class="headline mb-1 white--text isi-jumlah">{{ Math.abs(distributedStock) | currency }}</v-list-item-title>
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
              <v-list-item-title class="white--text card-title">{{ $t('label.rdt_used_in_location_title') }}</v-list-item-title>
              <v-list-item-title class="headline mb-1 white--text isi-jumlah">{{ Math.abs(usedStock) | currency }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
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
          class="bottom-add-survey btn-create"
          color="#14a942"
          @click.stop="handleCreate()"
        >
          {{ $t('label.add_data') }}
        </v-btn>
      </v-col>
    </v-row>
    <v-card
      outlined
    >
      <v-card-text>
        <span class="table-title">
          {{ $t('label.rdt_distribution_table_title') }}
        </span>
        <a :href="linkExport" class="export">
          <v-icon color="#4990ef">mdi-download</v-icon>
          {{ $t('label.export_button') }}
        </a>
      </v-card-text>
      <hr class="thin">
      <v-row>
        <v-col auto>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">{{ $t('label.number').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.distribution_destination').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.distribution_destination_name').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.delivered_kit').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.distribution_date').toUpperCase() }}</th>
                  <th v-if="roles[0] === 'dinkesprov'" class="text-left">{{ $t('label.action').toUpperCase() }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="listRdtDistribution.length === 0">
                  <td class="text-center" :colspan="5">{{ $t('label.no_data') }}</td>
                </tr>
                <tr v-for="(item, index) in listRdtDistribution" v-else :key="item.index">
                  <td>{{ getTableRowNumbering(index) }}</td>
                  <td>{{ item.subdistrict === null ? $t('label.stripe') : item.subdistrict.kemendagri_kabupaten_nama === null ? $t('label.stripe') : item.subdistrict.kemendagri_kabupaten_nama.toUpperCase() }}</td>
                  <td>{{ item.name === null ? $t('label.stripe') : item.name.toUpperCase() }}</td>
                  <td>{{ item.quantity === null ? $t('label.stripe') : Math.abs(item.quantity) | currency }}</td>
                  <td>{{ item.time === null ? $t('label.stripe') : $moment(item.time).format('DD MMMM YYYY') }}</td>
                  <td><v-btn text small color="info" @click="handleEdit(item.id)">{{ $t('label.edit_2') }}</v-btn></td>
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
    <FormDistribusi
      :show="showFormInput"
      :id-distribution="idDistribution"
      :is-edit="isEdit"
      @close="closeDialog"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FormDistribusi from './form'
export default {
  name: 'LaporanList',
  components: {
    FormDistribusi
  },
  data() {
    return {
      totalReport: 0,
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
      ],
      linkExport: '',
      showFormInput: false,
      idDistribution: null,
      isEdit: false
    }
  },
  computed: {
    ...mapGetters('rdtDistribution', [
      'listRdtDistribution',
      'totalList',
      'usedStock',
      'distributedStock',
      'availableStock'
    ]),
    ...mapGetters('user', [
      'roles',
      'token'
    ])
  },
  watch: {
    'listQuery.search': {
      handler: async function(value) {
        if (value.length >= 3 || value.length === 0) {
          this.listQuery.page = 1
          await this.handleSearch()
        }
      },
      immediate: true
    }
  },
  async mounted() {
    await this.handleSearch()
    this.linkExport = '/api/v1/transactions/export?token=' + this.token
  },
  methods: {
    async handleSearch() {
      await this.$store.dispatch('rdtDistribution/getSummary')
      await this.$store.dispatch('rdtDistribution/getListRdtDistribution', this.listQuery)
    },
    getTableRowNumbering(index) {
      return ((this.listQuery.page - 1) * this.listQuery.limit) + (index + 1)
    },
    async onNext() {
      await this.$store.dispatch('rdtDistribution/getListRdtDistribution', this.listQuery)
    },
    async changeDate(value) {
      this.listQuery.time = value
      await this.handleSearch()
    },
    async changeDistrict(value) {
      this.listQuery.kabkota_kode = !value ? '' : parseFloat(value.kemendagri_kabupaten_kode)
      await this.handleSearch()
    },
    async closeDialog(value) {
      this.showFormInput = value
      await this.handleSearch()
    },
    handleEdit(value) {
      this.showFormInput = true
      this.isEdit = true
      this.idDistribution = value
    },
    handleCreate() {
      this.showFormInput = true
      this.isEdit = false
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
  .btn-create {
    height: 50px !important;
    margin-top: 29px !important;
    min-width: 100% !important;
    text-transform: none;
    font-size: 14px !important;
  }
  .table-title {
    font-family: "Product Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #828282;
  }
  .thin {
    margin-top: 5px;
    margin-bottom: 0px;
  }
  .export {
    float: right;
    color: #4990ef !important;
    font-size: 15px;
  }
  .card-title {
    font-size: 12px;
  }
</style>
