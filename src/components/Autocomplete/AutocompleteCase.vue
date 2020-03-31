<template>
  <div>
    <label>Cari Kode Kasus/Nama</label>
    <v-autocomplete
      :loading="loading"
      :items="listKasus"
      :return-object="false"
      item-value="id"
      item-text="display"
      single-line
      :disabled="disabledCase"
      color="black"
      solo
      autocomplete
      @change="onSelectCase"
    >
      <template v-slot:selection="data">
        {{ data.item.display }}
      </template>
      <template v-slot:item="data">
        <v-list-item-content>
          <v-list-item-title v-html="data.item.display" />
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
      listKasus: null,
      listQuery: {
        address_district_code: ''
      }
    }
  },
  computed: {
    ...mapGetters('user', [
      'roles',
      'district_user'
    ])
  },
  async mounted() {
    this.loading = true
    this.listQuery.address_district_code = this.district_user
    const response = await this.$store.dispatch('rdt/getCases', this.listQuery.address_district_code)
    this.listKasus = response.data
    this.loading = false
  }
}
</script>
