<template>
  <div class="Status">
    <v-chip
      v-if="status === 'ODP'"
      class="ma-2"
      color="rgb(82, 143, 196)"
      outlined
    >
      {{ status }}
    </v-chip>
    <v-chip
      v-else-if="status === 'POSITIF'"
      class="ma-2"
      color="#EB5757"
      outlined
    >
      {{ status }}
    </v-chip>
    <v-chip
      v-else-if="status === 'PDP'"
      class="ma-2"
      color="rgb(255, 206, 79)"
      outlined
    >
      {{ status }}
    </v-chip>
    <v-chip
      v-else
      class="ma-2"
      color="rgba(0, 0, 0, 0.87)"
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
