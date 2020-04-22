<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto bg-dark" outlined>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="title white--text">{{ $t('label.rdt_receipt_title') }}</v-list-item-title>
              <v-list-item-title
                class="headline mb-1 white--text"
              >{{ recipientFaskesSummary.quantity_distributed | currency }}</v-list-item-title>
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
              >{{ recipientFaskesSummary.quantity_available | currency }}</v-list-item-title>
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
              >{{ recipientFaskesSummary.quantity_used | currency }}</v-list-item-title>
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
      <v-col cols="12" sm="5">
        <br>
        <v-card outlined>
          <search
            :handle-search="handleSearch"
            :list-query="listQuery"
            solo
          />
        </v-card>
      </v-col>
      <v-col cols="12" sm="2">&nbsp;</v-col>
      <v-col cols="1" sm="1">
        <v-btn
          class="bottom-add-survey"
          depressed
          outlined
          :href="linkExport"
        >
          {{ $t('label.export_button') }}
        </v-btn>
      </v-col>
    </v-row>
    <v-card outlined>
      <v-card-text>
        <span class="table-title">{{ $t('label.rdt_usage_report_title') }}</span>
      </v-card-text>
      <hr class="thin">
      <v-row>
        <v-col auto>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">{{ $t('label.number').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.faskes_name').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.received_stock').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.used_stock').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.remaining_stock').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.action').toUpperCase() }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(recipentFaskes, index) in recipientFaskesList" :key="recipentFaskes.index">
                  <td>{{ getTableRowNumbering(index) }}</td>
                  <td>{{ recipentFaskes.faskes_name }}</td>
                  <td>{{ recipentFaskes.total_stock | currency }}</td>
                  <td>{{ recipentFaskes.total_used | currency }}</td>
                  <td>{{ recipentFaskes.total_stock - recipentFaskes.total_used | currency }}</td>
                  <!-- sementara diganti menggunakan faskes name karna tidak ada idnya -->
                  <td><v-btn text small color="info" @click="handleDetail(recipentFaskes.faskes_name)">{{ $t('label.detail') }}</v-btn></td>
                </tr>
                <tr v-if="recipientFaskesList.length === 0">
                  <td colspan="6" class="text-center">{{ $t('label.no_data') }}</td>
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
  name: 'MonitoringRdtKota',
  data() {
    return {
      sortOption: [
        { value: 'asc', label: 'A-Z' },
        { value: 'desc', label: 'Z-A' }
      ],
      linkExport: '',
      listQuery: {
        page: 1,
        limit: 10,
        sort: 'asc',
        search: ''
      }
    }
  },
  computed: {
    ...mapGetters('recipientFaskes', [
      'recipientFaskesList',
      'totalList',
      'recipientFaskesSummary'
    ]),
    ...mapGetters('user', [
      'token'
    ])
  },
  watch: {
    'listQuery.search': {
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
    this.linkExport = '/api/v1/recipients-faskes/export?token=' + this.token
  },
  methods: {
    async getMonitoringRdtList() {
      await this.$store.dispatch('recipientFaskes/getListRecipientFaskes', this.listQuery)
    },
    async getMonitoringRdtSummary() {
      await this.$store.dispatch('recipientFaskes/getSummaryRecipientFaskes')
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
      this.$router.push(`/monitoring-rdt/detail/${id}`)
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
</style>
