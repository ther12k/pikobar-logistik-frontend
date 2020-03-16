<template>
  <div v-html="html" />
</template>

<script>
export default {
  name: 'HTMLBindingText',
  props: {
    html: {
      type: String,
      default: null
    }
  }
}
</script>
