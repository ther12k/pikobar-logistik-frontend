<template>
  <div>
    <label>Cari Kode Kasus/Nama</label>
    <v-autocomplete
      :loading="loading"
      :items="listKasus"
      :return-object="false"
      item-value="_id"
      item-text="name"
      single-line
      :disabled="disabledCase"
      clearable
      solo
      autocomplete
      @change="onSelectCase"
    >
      <template v-slot:selection="data">
        {{ data.item.name }}
      </template>
      <template v-slot:item="data">
        <v-list-item-content>
          <v-list-item-title v-html="data.item.id_case +' - '+ data.item.name" />
        </v-list-item-content>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AutocompleteCases',
  props: {
    required: {
      type: Boolean,
      default: false
    },
    onSelectCase: {
      type: Function,
      default: null
    },
    disabledCase: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      listQuery: {
        address_district_code: '',
        page: 1,
        limit: 30,
        search: ''
      }
    }
  },
  computed: {
    ...mapGetters('reports', [
      'listKasus'
    ]),
    ...mapGetters('user', [
      'roles',
      'district_user'
    ])
  },
  async created() {
    this.loading = true
    await this.$store.dispatch('reports/listReportCase', this.listQuery)
    this.loading = false
  }
}
</script>
