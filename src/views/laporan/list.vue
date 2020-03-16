<template>
  <div>
    <v-card>
      <v-row>
        <search
          :handle-search="handleSearch"
          :list-query="listQuery"
        />
      </v-row>
    </v-card>
  </div>
</template>

<script>
import Search from '@/components/Search'
export default {
  name: 'LaporanList',
  components: {
    Search
  },
  data() {
    return {
      listQuery: {
        search: ''
      }
    }
  },
  methods: {
    handleSearch() {
      console.log('ok')
    }
  }
}
</script>

<style scoped>

</style>
