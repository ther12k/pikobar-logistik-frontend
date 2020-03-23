<template>
  <div v-if="detail">
    <edit-history-case-form
      :id-data="this.$route.params.id"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatDatetime } from '@/utils/parseDatetime'

export default {
  name: 'EditHistoryCase',
  data() {
    return {
      detail: null,
      formatDate: 'YYYY/MM/DD'
    }
  },
  computed: {
    ...mapGetters('reports', [
      'formRiwayatPasien'
    ])
  },
  async beforeMount() {
    await this.$store.dispatch('region/getListHospital')
    await this.$store.dispatch('reports/resetRiwayatFormPasien')
    this.detail = await this.$store.dispatch('reports/detailHistoryCase', this.$route.params.id)
    await Object.assign(this.formRiwayatPasien, this.detail)
    this.formRiwayatPasien.case = this.detail.case
    if ((this.detail.first_symptom_date !== null) && (this.detail.first_symptom_date !== 'Invalid date')) {
      this.formRiwayatPasien.first_symptom_date = await this.formatDatetime(this.detail.first_symptom_date, this.formatDate)
    } else {
      this.formRiwayatPasien.first_symptom_date = ''
    }
    if (this.formRiwayatPasien.case) {
      delete this.formRiwayatPasien['createdAt']
      delete this.formRiwayatPasien['updatedAt']
    }
  },
  methods: {
    formatDatetime
  }
}
</script>
