<template>
  <v-col cols="12" md="4" sm="4">
    <ValidationProvider
      v-slot="{ errors }"
      :rules="required ? 'required': ''"
    >
      <v-autocomplete
        v-model="nameDistrict"
        :items="listDistrictCity"
        :label="$t('label.select_district')"
        :error-messages="errors"
        :disabled="disabledSelect"
        :return-object="true"
        item-value="kota_kode"
        item-text="kota_nama"
        single-line
        solo
        autocomplete
        @change="onSelectDistrict"
      />
    </ValidationProvider>
  </v-col>
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
    districtCity: {
      type: Object,
      default: function() {
        return []
      }
    },
    required: {
      type: Boolean,
      default: false
    },
    onSelectDistrict: {
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
  async created() {
    this.nameDistrict = this.districtCity
    if (!this.disabledSelect) {
      await this.$store.dispatch('region/getListDistrictCity')
    }
  }
}
</script>
