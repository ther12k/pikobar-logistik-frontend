<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <br>
          <v-text-field
            v-model="listQuery.search"
            solo
            label="Search"
            prepend-inner-icon="search"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <v-label class="title">Hasil Test:</v-label>
          <v-select
            v-model="listQuery.final_result"
            :items="resultCheckList"
            solo
            item-text="label"
            item-value="value"
          />
        </v-col>
        <v-col cols="12" sm="3">
          <v-label class="title">Mekanisme:</v-label>
          <v-select
            v-model="listQuery.mechanism"
            :items="mechanismOptions"
            solo
          />
        </v-col>
        <v-col cols="12" sm="3">
          <v-label class="title">Metode Yang Digunakan:</v-label>
          <v-select
            v-model="listQuery.test_method"
            :items="methodsOptions"
            solo
            item-text="label"
            item-value="value"
          />
        </v-col>
        <v-col cols="12" sm="3">
          <v-label class="title">Tempat Test:</v-label>
          <select-area-district-city
            :district-city="listQuery.test_district_code"
            :city-district.sync="listQuery.test_district_code"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <v-label class="title">Kategori Sasaran:</v-label>
          <v-select
            v-model="listQuery.category"
            :items="categoryList"
            solo
            item-text="label"
            item-value="value"
          />
        </v-col>
        <v-col cols="12" sm="3">
          <v-label class="title">Tanggal Pemeriksaan:</v-label>
          <input-date-picker
            :format-date="formatDate"
            :label="'Tanggal Awal'"
            :date-value="listQuery.start_date"
            :value-date.sync="listQuery.start_date"
            @changeDate="listQuery.start_date = $event"
          />
        </v-col>
        <v-col cols="12" sm="3">
          <br>
          <input-date-picker
            :format-date="formatDate"
            :label="'Tanggal Akhir'"
            :date-value="listQuery.end_date"
            :value-date.sync="listQuery.end_date"
            @changeDate="listQuery.end_date = $event"
          />
        </v-col>
        <v-col cols="12" sm="3">
          <br>
          <div>
            <v-btn
              color="grey"
              style="height: 46px;min-width: 100px;margin-right: 4px;"
              @click="onReset"
            >
              Reset
            </v-btn>
            <v-btn
              color="success"
              style="height: 46px;min-width: 100px;"
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
import SelectAreaDistrictCity from '../SelectRegion/DistrictCity/index'
export default {
  name: 'FilterHasilTest',
  components: { SelectAreaDistrictCity },
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
      formatDate: 'YYYY-MM-DD',
      methodsOptions: [
        'HAND PRIX',
        'FLEBOTOMY'
      ],
      mechanismOptions: [
        'Door to door',
        'Faskes',
        'Drive-Thru'
      ],
      categoryList: [
        { label: 'Kategori A', value: 'A' },
        { label: 'Kategori B', value: 'B' },
        { label: 'Kategori C', value: 'C' }
      ],
      resultCheckList: [
        { label: 'Negatif', value: 'NEGATIF' },
        { label: 'Positif', value: 'POSITIF' },
        { label: 'Invalid', value: 'INVALID' }
      ]
    }
  }
}
</script>
