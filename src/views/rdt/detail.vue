<template>
  <participant-detail
    :title-detail="title"
    :id-data="this.$route.params.id"
  />
</template>

<script>
export default {
  name: 'DetailRDT',
  data() {
    return {
      title: 'Detail Peserta'
    }
  }
}
</script>
