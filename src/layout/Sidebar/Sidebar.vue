<template>
  <div>
    <v-list shaped>
      <v-list-item-group v-model="item" class="sidebar" color="primary">
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
        />
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  data: () => ({
    drawer: null,
    item: null
  }),
  computed: {
    ...mapGetters('permission', [
      'permission_routes'
    ])
  }
}
</script>
