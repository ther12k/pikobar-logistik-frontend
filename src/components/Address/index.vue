<template>
  <div class="type-questions-ddress">
    <v-row>
      <select-area-district-city
        :disabled-select="disabledAddress"
        :required="requiredAddress"
        :district-city="districtCity"
        :update-district-city.sync="districtCity"
        :on-select-district="onSelectDistrict"
      />
      <select-area-sub-district
        :disabled-select="disabledAddress"
        :required="requiredAddress"
        :sub-district="subDistrict"
        :update-sub-district.sync="subDistrict"
        :code-district="districtCode"
        :district-code.sync="districtCode"
        :on-select-sub-district="onSelectSubDistrict"
      />
      <select-area-village
        :disabled-select="disabledAddress"
        :required="requiredAddress"
        :village="village"
        :update-village.sync="village"
        :code-sub-district="subDistrictCode"
        :sub-district-code.sync="subDistrictCode"
        :on-select-village="onSelectVillage"
      />
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AddressRegion',
  props: {
    disabledAddress: {
      type: Boolean,
      default: false
    },
    requiredAddress: {
      type: Boolean,
      default: false
    },
    village: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      districtCode: '',
      subDistrictCode: '',
      districtCity: '',
      subDistrict: ''
    }
  },
  watch: {
    districtCity: async function(value) {
      if (value.length > 0) {
        this.subDistrict = ''
        this.village = ''
      }
    },
    subDistrict: async function(value) {
      if (value.length > 0) {
        this.village = ''
      }
    }
  },
  methods: {
    async onSelectDistrict(value) {
      this.districtCode = value
      this.subDistrictCode = ''
    },
    async onSelectSubDistrict(value) {
      this.subDistrictCode = value
    },
    async onSelectVillage(value) {
      this.village = value
    }
  }
}
</script>
