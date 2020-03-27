<template>
  <div>
    <!-- <v-form v-model="valid"> -->
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-autocomplete
            v-model="select"
            :loading="loading"
            :items="listKasus"
            :search-input.sync="search"
            cache-items
            class="mx-4"
            outlined
            flat
            hide-no-data
            hide-details
            label="What state are you from?"
            solo-inverted
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <search
            :handle-search="handleSearch"
            :list-query="listQuery"
          />
        </v-col>
      </v-row>
    </v-container>
    {{ listKasus }}
    <!-- </v-form> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Autocomplete',
  data() {
    return {
      loading: false,
      items: ['aing'],
      search: null,
      select: null,
      states: [
        'Kucing',
        'makan',
        'tikus'
      ],
      listQuery: {
        address_district_code: '',
        page: 1,
        limit: 10,
        search: ''
      }
    }
  },
  computed: {
    ...mapGetters('reports', [
      'listKasus',
      'totalList'
    ])
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
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
    const data = await this.$store.dispatch('reports/listReportCase')
    // this.states = data.cases
    console.log(data.data.cases)
  },
  methods: {
    querySelections(v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
    async handleSearch() {
      await this.$store.dispatch('reports/listReportCase', this.listQuery)
    }
  }
}
</script>
