<template>
  <div class="Status">
    <v-chip
      v-if="status === 'ODP'"
      class="ma-2"
      color="success"
      outlined
    >
      {{ status }}
    </v-chip>
    <v-chip
      v-if="status === 'Positif'"
      class="ma-2"
      color="#EB5757"
      outlined
    >
      {{ status }}
    </v-chip>
    <v-chip
      v-if="status === 'PDP'"
      class="ma-2"
      color="warning"
      outlined
    >
      {{ status }}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: 'Status',
  props: {
    status: {
      type: String,
      default: ''
    }
  }
}
</script>
