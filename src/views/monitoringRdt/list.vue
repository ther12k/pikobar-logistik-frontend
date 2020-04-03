<template>
  <div>
    <monitoring-rdt-provinsi v-if="roles[0] === 'dinkesprov'" />
    <monitoring-rdt-kota v-if="roles[0] === 'dinkeskota'" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MonitoringRdtList',
  computed: {
    ...mapGetters('user', [
      'roles'
    ])
  },
  async mounted() {
    await this.$store.dispatch('user/getInfo')
  }
}
</script>
