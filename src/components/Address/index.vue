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
        :code-district="districtCity"
        :district-code.sync="districtCity"
        :on-select-sub-district="onSelectSubDistrict"
      />
      <select-area-village
        :disabled-select="disabledAddress"
        :required="requiredAddress"
        :village="village"
        :update-village.sync="village"
        :code-sub-district="subDistrict"
        :sub-district-code.sync="subDistrict"
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
    districtCode: {
      type: String,
      default: null
    },
    districtName: {
      type: String,
      default: null
    },
    subDistrictCode: {
      type: String,
      default: null
    },
    subDistrictName: {
      type: String,
      default: null
    },
    villageCode: {
      type: String,
      default: null
    },
    villageName: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      districtCity: '',
      subDistrict: '',
      village: ''
    }
  },
  watch: {
    districtCity: async function(value) {
      if (value.kota_kode) {
        this.districtCity = value.kota_kode
      }
    }
  },
  methods: {
    async onSelectDistrict(value) {
      this.districtCity = value.kota_kode
      this.$emit('update:codeDistrict', value.kota_kode)
      this.$emit('update:nameDistrict', value.kota_nama)
    },
    async onSelectSubDistrict(value) {
      this.subDistrict = value.kecamatan_kode
      this.$emit('update:codeSubDistrict', value.kecamatan_kode)
      this.$emit('update:nameSubDistrict', value.kecamatan_nama)
    },
    async onSelectVillage(value) {
      this.village = value.desa_nama
      this.$emit('update:codeVillage', value.desa_kode)
      this.$emit('update:nameVillage', value.desa_nama)
    }
  }
}
</script>
