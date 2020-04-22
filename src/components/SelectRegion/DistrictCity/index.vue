<template>
  <ValidationProvider
    v-slot="{ errors }"
    :rules="required ? rule : ''"
  >
    <v-autocomplete
      v-if="disabledDistrict !== true"
      :value="nameDistrict"
      :items="listDistrictCity"
      :label="$t('label.select_district')"
      :error-messages="errors"
      :disabled="disabledSelect"
      :return-object="true"
      item-value="kemendagri_kabupaten_kode"
      item-text="kemendagri_kabupaten_nama"
      single-line
      solo
      :clearable="true"
      autocomplete
      @click="clearDistrictCity"
      @change="onSelectDistrictCity"
    />
    <v-text-field
      v-else
      v-model="nameDistrict"
      :error-messages="errors"
      disabled
      solo-inverted
    />
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { mapGetters } from 'vuex'

export default {
  name: 'SelectAreaDistrictCity',
  components: {
    ValidationProvider
  },
  props: {
    disabledSelect: {
      type: Boolean,
      default: false
    },
    disabledDistrict: {
      type: Boolean,
      default: false
    },
    districtCity: {
      type: Object,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    rule: {
      type: String,
      default: ''
    },
    onSelectDistrictCity: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      nameDistrict: ''
    }
  },
  computed: {
    ...mapGetters('region', [
      'listDistrictCity'
    ])
  },
  watch: {
    'districtCity': function(value) {
      if (value && value.kemendagri_kabupaten_kode) {
        this.nameDistrict = value
      } else {
        this.nameDistrict = ''
      }
    }
  },
  async created() {
    if (this.disabledDistrict) {
      this.nameDistrict = this.districtCity.kemendagri_kabupaten_nama
    } else {
      this.nameDistrict = this.districtCity
    }
    if (!this.disabledSelect) {
      await this.$store.dispatch('region/getListDistrictCity')
    }
    await this.$emit('onSelectDistrictCity')
  },
  methods: {
    async clearDistrictCity() {
      await this.$emit('onSelectDistrictCity')
    }
  }
}
</script>
