<template>
  <div v-if="detail">
    <edit-case-form
      :id-data="this.$route.params.id"
    />
  </div>
</template>

<script>
import { formatDatetime } from '@/utils/parseDatetime'
import { mapGetters } from 'vuex'

export default {
  name: 'EditCase',
  data() {
    return {
      detail: null,
      formatDate: 'YYYY/MM/DD'
    }
  },
  computed: {
    ...mapGetters('reports', [
      'formPasien'
    ])
  },
  async beforeMount() {
    await this.$store.dispatch('reports/resetFormPasien')
    this.detail = await this.$store.dispatch('reports/detailReportCase', this.$route.params.id)
    await Object.assign(this.formPasien, this.detail.data)
    if (this.detail.data.birth_date) {
      this.formPasien.birth_date = await this.formatDatetime(this.detail.data.birth_date, this.formatDate)
    } else {
      this.formPasien.birth_date = ''
    }
    if (this.formPasien._id) {
      delete this.formPasien['_id']
      delete this.formPasien['author']
      delete this.formPasien['createdAt']
      delete this.formPasien['updatedAt']
      delete this.formPasien['last_history']
    }
  },
  methods: {
    formatDatetime
  }
}
</script>
