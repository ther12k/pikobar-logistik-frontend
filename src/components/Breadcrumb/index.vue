<template>
  <v-breadcrumbs v-if="itemsBreadcrumbs.length > 0" :items="itemsBreadcrumbs" class="jabarsurvey-breadcrumb" />
</template>

<script>
import generateTitle from '@/utils/generateTitle'
export default {
  name: 'Breadcrumb',
  data() {
    return {
      levelList: null,
      itemsBreadcrumbs: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    generateTitle,
    getBreadcrumb() {
      if (this.$route.meta) {
        this.itemsBreadcrumbs = [
          {
            text: generateTitle(this.$route.meta.title),
            disabled: false,
            to: this.$route.path
          }
        ]
      }
    }
  }
}
</script>
