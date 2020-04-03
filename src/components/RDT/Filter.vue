<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="2">
          <v-label class="title">Urutkan</v-label>
          <v-select
            v-model="listQuery.sort"
            :items="sortOption"
            solo
            item-text="label"
            item-value="value"
          />
        </v-col>
        <v-col cols="12" sm="2">
          <v-label class="title">Kategori Sasaran</v-label>
          <v-select
            v-model="listQuery.category"
            :items="categoryList"
            solo
            item-text="label"
            item-value="value"
          />
        </v-col>
        <v-col cols="12" sm="2">
          <v-label class="title">Tanggal Pemeriksaan</v-label>
          <input-date-picker
            :format-date="'YYYY/MM/DD'"
            :date-value="listQuery.date_check"
            :value-date.sync="listQuery.date_check"
            @changeDate="listQuery.date_check = $event"
          />
        </v-col>
        <v-col cols="12" sm="3">
          <br>
          <v-text-field
            v-model="listQuery.search"
            solo
            clearable
            label="Search"
            prepend-inner-icon="search"
          />
        </v-col>
        <v-col cols="12" sm="3">
          <br>
          <div>
            <v-btn
              color="grey"
              style="height: 46px;min-width: 120px;margin-right: 4px;"
              @click="onReset"
            >
              Reset
            </v-btn>
            <v-btn
              color="success"
              style="height: 46px;min-width: 120px;"
              @click="onSearch"
            >
              Cari
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'FilterHasilTest',
  props: {
    listQuery: {
      type: Object,
      default: null
    },
    onSearch: {
      type: Function,
      default: null
    },
    onReset: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      sortOption: [
        { value: 'asc', label: 'A-Z' },
        { value: 'desc', label: 'Z-A' }
      ],
      formatDate: 'YYYY/MM/DD',
      categoryList: [
        { label: 'Kategori A', value: 'A' },
        { label: 'Kategori B', value: 'B' },
        { label: 'Kategori C', value: 'C' }
      ]
    }
  }
}
</script>
