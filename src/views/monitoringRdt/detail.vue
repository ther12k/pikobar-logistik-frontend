<template>
  <div>
    <detail-rdt-kota
      v-if="roles[0] === 'dinkesprov'"
      :id-data="this.$route.params.id"
    />
    <detail-rdt-faskes
      v-if="roles[0] === 'dinkeskota'"
      :id-data="this.$route.params.id"
    />
  </div>
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
