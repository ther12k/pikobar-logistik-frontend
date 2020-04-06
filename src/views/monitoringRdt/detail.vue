<template>
  <detail-rdt-kota
    v-if="roles[0] === 'dinkesprov'"
    :id-data="this.$route.params.id"
  />
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DetailPenggunaanRdt',
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
