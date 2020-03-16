<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="8">
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
            menu-props="auto"
            item-value="kecamatan_kode"
            item-text="kecamatan_nama"
            prepend-icon="map"
            single-line
            autocomplete
            @change="onSelectSubDistrict"
          />
        </ValidationProvider>
      </v-col>
    </v-row>
  </v-container>
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
      type: String,
      default: ''
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
      listSubDistrict: []
    }
  },
  computed: {
    nameSubDistrict: {
      get() {
        return this.subDistrict
      },
      set(val) {
        this.$emit('update:updateSubDistrict', val)
      }
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
    if (this.disabledSelect) {
      this.disable = true
    }
  }
}
</script>
