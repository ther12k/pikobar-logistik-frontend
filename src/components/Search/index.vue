<template>
  <form>
    <v-text-field
      v-model="listQuery.search"
      solo-inverted
      flat
      hide-details
      label="Search"
      prepend-inner-icon="search"
      @keyup.enter.native="handleSearch"
    />
  </form>
</template>

<script>
export default {
  name: 'Search',
  props: {
    listQuery: {
      type: Object,
      default: null
    },
    handleSearch: {
      type: Function,
      default: null
    }
  }
}
</script>
