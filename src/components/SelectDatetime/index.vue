<template>
  <div class="SelectDatetime">
    <v-row align="center">
      <v-col cols="12" md="4" sm="4">
        <v-select
          v-model="year"
          :items="yearList"
          menu-props="auto"
          label="Tahun"
          solo
          @change="onSelectYear"
        />
      </v-col>
      <v-col cols="12" md="4" sm="4">
        <v-select
          v-model="month"
          :items="listMonthName"
          menu-props="auto"
          item-value="value"
          item-text="text"
          label="Bulan"
          solo
          @change="onSelectMonth"
        />
      </v-col>
      <v-col cols="12" md="4" sm="4">
        <v-select
          v-model="days"
          :items="dayList"
          menu-props="auto"
          label="Tanggal"
          solo
          @change="onSelectDate"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { listYear, listMonthName, listDays } from '@/utils/constantVariable'
export default {
  name: 'SelectDatetime',
  props: {
    datetime: {
      type: String,
      default: ''
    },
    formateDate: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      year: '',
      month: '',
      days: '',
      date: [],
      finalDate: '',
      yearList: null,
      listMonthName: listMonthName,
      dayList: null
    }
  },
  async mounted() {
    this.yearList = await this.listYear()
    this.dayList = await this.listDays()
    const date = await this.datetime.split('/')
    this.year = parseInt(date[0])
    this.month = parseInt(date[1])
    this.days = parseInt(date[2])
  },
  methods: {
    listYear,
    listDays,
    onSelectYear(value) {
      this.date[0] = value
      if (this.date.length >= 3) {
        this.finalDate = `${this.date[0]}/${this.date[1]}/${this.date[2]}`
        this.$emit('update:dateTime', this.finalDate)
      }
    },
    onSelectMonth(value) {
      this.date[1] = value
      if (this.date.length >= 3) {
        this.finalDate = `${this.date[0]}/${this.date[1]}/${this.date[2]}`
        this.$emit('update:dateTime', this.finalDate)
      }
    },
    onSelectDate(value) {
      this.date[2] = value
      if (this.date.length >= 3) {
        this.finalDate = `${this.date[0]}/${this.date[1]}/${this.date[2]}`
        this.$emit('update:dateTime', this.finalDate)
      }
    }
  }
}
</script>
