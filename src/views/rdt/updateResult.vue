<template>
  <div>
    <participant-detail
      :title-detail="title"
      :id-data="this.$route.params.id"
    />
    <update-result-form />
  </div>
</template>

<script>
export default {
  name: 'UpdateResult',
  data() {
    return {
      title: 'Update Hasil Peserta'
    }
  }
}
</script>
