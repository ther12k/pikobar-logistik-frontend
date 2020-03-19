<template>
  <div>
    <v-stepper
      v-model="e1"
      :alt-labels="altLabels"
    >
      <v-stepper-header>
        <template v-for="n in steps">
          <v-stepper-step
            :key="`${n}-step`"
            :complete="e1 > n"
            :step="n"
            :editable="editable"
          >
            <template v-if="n == 1">
              Informasi Umum Pasien
            </template>
            <template v-else-if="n == 2">
              Informasi Rekam Pasien
            </template>
          </v-stepper-step>

          <v-divider
            v-if="n !== steps"
            :key="n"
          />
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="n in steps"
          :key="`${n}-content`"
          :step="n"
        >
          <template v-if="e1 == 1">
            <form-information-patient
              :form-pasien="formPasien"
              :steps="n"
            />
          </template>
          <template v-else-if="e1 == 2">
            <form-information-history
              :form-pasien="formPasien"
              :steps="n"
            />
          </template>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import EventBus from '@/utils/eventBus'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      e1: 1,
      steps: 2,
      altLabels: false,
      editable: false
    }
  },
  computed: {
    ...mapGetters('reports', [
      'formPasien'
    ])
  },
  async created() {
    // on steps change
    EventBus.$on('nextSurveySteps', (value) => {
      this.e1 = value + 1
    })
    EventBus.$on('backSurveySteps', (value) => {
      this.e1 = value - 1
    })
  },
  methods: {
    onInput(val) {
      this.steps = parseInt(val)
    },
    onCancel() {
      this.$router.push('/survey/index')
    }
  }
}
</script>
