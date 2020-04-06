<template>
  <detail-patient
    :title-detail="'Detail Kasus'"
    :id-data="this.$route.params.id"
  />
</template>

<script>
export default {
  name: 'Detail'
}
</script>
