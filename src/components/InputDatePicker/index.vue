<template>
  <v-menu
    ref="open"
    :close-on-content-click="false"
    v-model="openDatepicker"
    min-width="290px"
    transition="scale-transition"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="setDate"
        append-icon="event"
        style="padding-bottom: 12px;"
        solo-inverted
        readonly
        v-on="on"
      />
    </template>
    <v-date-picker
      v-model="date"
      @input="openDatepicker = false"
      @change="onChangeDate($event, 'changeDate')"
    />
  </v-menu>
</template>

<script>
export default {
  name: 'InputDatePicker',
  props: {
    label: {
      type: String,
      default: null
    },
    formatDate: {
      type: String,
      default: null
    },
    dateValue: {
      type: String,
      default: null
    }
  },
  data: () => ({
    date: null,
    openDatepicker: false
  }),
  computed: {
    setDate() {
      if (this.dateValue !== undefined) {
        return this.formatDateFunc(this.dateValue)
      }
      return this.formatDateFunc(this.date)
    }
  },
  methods: {
    formatDateFunc(date) {
      if (!date) return null
      return this.$moment(date).format(this.formatDate)
    },
    onChangeDate(value, type) {
      if (value === '') {
        value = null
      }
      this.$emit(type, value)
    }
  }
}
</script>
