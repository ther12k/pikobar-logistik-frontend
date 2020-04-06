<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto bg-dark" outlined>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="title white--text">{{ $t('label.rdt_distributed_title') }}</v-list-item-title>
              <v-list-item-title
                class="headline mb-1 white--text"
              >{{ recipientSummary.quantity_distributed | currency }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto bg-success" outlined>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="title white--text">{{ $t('label.rdt_available_title') }}</v-list-item-title>
              <v-list-item-title
                class="headline mb-1 white--text"
              >{{ recipientSummary.quantity_available | currency }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto bg-info" outlined>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="title white--text">{{ $t('label.rdt_used_title') }}</v-list-item-title>
              <v-list-item-title
                class="headline mb-1 white--text"
              >{{ recipientSummary.quantity_used | currency }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="2">
        <v-label class="title">{{ $t('label.sort') }}</v-label>
        <v-select
          v-model="listQuery.sort"
          :items="sortOption"
          solo
          item-text="label"
          item-value="value"
          @change="handleSearch"
        />
      </v-col>
      <v-col cols="12" sm="3">
        <v-label class="title">{{ $t('label.distribution_destination') }}</v-label>
        <select-area-district-city :on-select-district-city="onSelectDistrictCity" />
      </v-col>
    </v-row>
    <v-card :loading="loading" outlined>
      <v-card-text>
        <span class="headline">{{ $t('label.rdt_distribution_list_title') }}</span>
      </v-card-text>
      <hr>
      <v-row>
        <v-col auto>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">{{ $t('label.number').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.distribution_destination').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.received_stock').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.used_stock').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.remaining_stock').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.action').toUpperCase() }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(recipent, index) in recipientList" :key="recipent.index">
                  <td>{{ getTableRowNumbering(index) }}</td>
                  <td>{{ recipent.kemendagri_kabupaten_nama }}</td>
                  <td>{{ recipent.total_stock | currency }}</td>
                  <td>{{ recipent.total_used | currency }}</td>
                  <td>{{ recipent.total_stock - recipent.total_used | currency }}</td>
                  <td><v-btn text small color="info" @click="handleDetail(recipent)">{{ $t('label.detail') }}</v-btn></td>
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
  name: 'MonitoringRdtProvinsi',
  data() {
    return {
      sortOption: [
        { value: 'asc', label: 'A-Z' },
        { value: 'desc', label: 'Z-A' }
      ],
      loading: false,
      listQuery: {
        page: 1,
        limit: 10,
        sort: '',
        city_code: ''
      }
    }
  },
  computed: {
    ...mapGetters('recipient', [
      'recipientList',
      'totalList',
      'recipientSummary'
    ])
  },
  watch: {
    'listQuery.city_code': {
      handler: function(value) {
        if (value.length >= 3 || value.length === 0) {
          this.listQuery.page = 1
          this.handleSearch()
        }
      },
      immediate: true
    }
  },
  created() {
    this.getMonitoringRdtList()
    this.getMonitoringRdtSummary()
  },
  methods: {
    async getMonitoringRdtList() {
      this.loading = true
      await this.$store.dispatch('recipient/getListRecipient', this.listQuery)
      this.loading = false
    },
    async getMonitoringRdtSummary() {
      await this.$store.dispatch('recipient/getSummaryRecipient')
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
    handleDetail(row) {
      this.$router.push(`/monitoring-rdt/detail/${row.kemendagri_kabupaten_kode}`)
    },
    onSelectDistrictCity(value) {
      this.listQuery.city_code = value ? value.kemendagri_kabupaten_kode : ''
      this.handleSearch()
    }
  }
}
</script>

<style>
.bg-dark {
  background: linear-gradient(90deg, #4F4F4F 0%, #828282 100%);
}
.bg-success {
  background: linear-gradient(90deg, #219653 0%, #27AE60 100%);
}
.bg-info {
  background: linear-gradient(90deg, #2F80ED 0%, #2D9CDB 100%);
}
.bottom-add-survey {
  margin-top:25px;
}
.headline{
  padding-top: 2rem;
}
</style>
