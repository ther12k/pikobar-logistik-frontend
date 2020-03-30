<template>
  <v-card
    max-width="100%"
    class=""
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="4" sm="6">
          <v-card
            color="#fcdfe0"
            style="border-color:#ffb4b5; border-radius: .5rem"
          >
            <v-card-title class="body-1 font-weight-bold text--secondary">~</v-card-title>

            <v-spacer />

            <v-card-subtitle class="display-2 font-weight-bold text--primary pt-0 mb-4">~</v-card-subtitle>

          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            color="#d3eee3"
            style="border-color:#91dcbd; border-radius: .5rem"
          >
            <v-card-title class="body-1 font-weight-bold text--secondary">~</v-card-title>

            <v-spacer />

            <v-card-subtitle class="display-2 font-weight-bold text--primary pt-0 mb-4">~</v-card-subtitle>

          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            color="#fbeadf"
            style="border-color:#fed1b1; border-radius: .5rem"
          >
            <v-card-title class="body-1 font-weight-bold text--secondary">~</v-card-title>

            <v-spacer />

            <v-card-subtitle class="display-2 font-weight-bold text--primary pt-0 mb-4">~</v-card-subtitle>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

export default {
  inject: ['theme'],
  name: 'CardData'
}
</script>
