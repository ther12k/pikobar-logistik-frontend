<template>
  <v-col cols="12" md="4" sm="4">
    <ValidationProvider
      v-slot="{ errors }"
      :rules="required ? 'required': ''"
    >
      <v-autocomplete
        v-model="nameSubDistrict"
        :items="listSubDistrict"
        :label="$t('label.select_sub_district')"
        :error-messages="errors"
        :disabled="disable"
        :return-object="true"
        menu-props="auto"
        item-value="kecamatan_kode"
        item-text="kecamatan_nama"
        single-line
        solo
        autocomplete
        @change="onSelectSubDistrict"
      />
    </ValidationProvider>
  </v-col>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'SelectAreaSubDistrict',
  components: {
    ValidationProvider
  },
  props: {
    disabledSelect: {
      type: Boolean,
      default: false
    },
    subDistrict: {
      type: Object,
      default: function() {
        return []
      }
    },
    required: {
      type: Boolean,
      default: false
    },
    onSelectSubDistrict: {
      type: Function,
      default: null
    },
    codeDistrict: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      disable: true,
      listSubDistrict: [],
      nameSubDistrict: ''
    }
  },
  watch: {
    codeDistrict: async function(value) {
      if (value.length > 0) {
        const response = await this.$store.dispatch('region/getListSubDistrict', value)
        this.listSubDistrict = response.data
        this.disable = false
      }
    }
  },
  async created() {
    this.nameSubDistrict = this.subDistrict
    if (this.disabledSelect) {
      this.disable = true
    } else if (this.codeDistrict) {
      const response = await this.$store.dispatch('region/getListSubDistrict', this.codeDistrict)
      this.listSubDistrict = response.data
      this.disable = false
    }
  }
}
</script>
