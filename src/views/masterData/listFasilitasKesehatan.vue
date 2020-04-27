<template>
  <div>
    <div>
      <v-row>
        <v-col cols="4" md="2" sm="2">
          <v-label class="title"><b>{{ $t('label.sort') }}</b></v-label>
          <br>
          <v-select
            v-model="listQuery.sort"
            :items="sortOption"
            solo
            item-text="label"
            item-value="value"
            @change="handleSearch"
          />
        </v-col>
        <v-col cols="8" md="4" sm="4">
          <br>
          <v-card
            outlined
            class="card-search"
          >
            <v-text-field
              v-model="listQuery.nama_faskes"
              solo-inverted
              flat
              hide-details
              :placeholder="$t('label.search_data')"
              prepend-inner-icon="search"
              @change="handleSearch"
            />
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row>
        <v-card outlined width="100%">
          <v-card-text>
            <span class="table-title">{{ $t('label.list_applicant_logistic_medic') }}</span>
          </v-card-text>
          <hr class="thin">
          <v-col auto>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">{{ $t('label.number').toUpperCase() }}</th>
                    <th class="text-left">{{ $t('label.registration_number').toUpperCase() }}</th>
                    <th class="text-left">{{ $t('label.faskes_name').toUpperCase() }}</th>
                    <th class="text-left">{{ $t('label.upper_name').toUpperCase() }}</th>
                    <th class="text-left">{{ $t('label.faskes_location').toUpperCase() }}</th>
                    <th class="text-left">{{ $t('label.action').toUpperCase() }}</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, index) in listMasterFaskes" :key="data.index">
                    <td>{{ getTableRowNumbering(index) }}</td>
                    <td>{{ data.nomor_registrasi }}</td>
                    <td>{{ data.nama_faskes }}</td>
                    <td>{{ data.nama_atasan }}</td>
                    <td>{{ $t('label.link_maps_lat_long') }}{{ data.latitude }},{{ data.longitude }}</td>
                    <td class="text-link">{{ $t('label.verification') }}</td>
                    <td class="text-link">{{ $t('label.reject') }}</td>
                  </tr>
                  <tr v-if="listMasterFaskes.length === 0">
                    <td colspan="6" class="text-center">{{ $t('label.no_data') }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-card>
        <v-col offset="6" offset-md="6" offset-sm="6" cols="12" md="6" sm="6">
          <v-pagination
            v-model="listQuery.page"
            :length="totalMasterFaskes"
            :total-visible="10"
            @input="onNext"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListFasilitasKesehatan',
  data() {
    return {
      sortOption: [
        { value: 'asc', label: 'A-Z' },
        { value: 'desc', label: 'Z-A' }
      ],
      listQuery: {
        page: 1,
        limit: 10,
        sort: 'asc',
        nama_faskes: ''
      }
    }
  },
  computed: {
    ...mapGetters('masterData', [
      'listMasterFaskes',
      'totalMasterFaskes'
    ])
  },
  created() {
    this.getMasterFaskes()
  },
  methods: {
    handleSearch() {
      this.listQuery.page = 1
      this.getMasterFaskes()
    },
    async getMasterFaskes() {
      await this.$store.dispatch('masterData/getMasterFaskes', this.listQuery)
    },
    onNext() {
      this.getMasterFaskes()
    },
    getTableRowNumbering(index) {
      return ((this.listQuery.page - 1) * this.listQuery.limit) + (index + 1)
    }
  }
}
</script>

<style>
.text-link {
  color: blue !important;
  text-decoration: underline;
}
</style>
