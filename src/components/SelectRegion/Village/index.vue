<template>
  <v-col cols="12" sm="4" md="4">
    <ValidationProvider
      v-slot="{ errors }"
      :rules="required ? 'required': ''"
    >
      <v-autocomplete
        v-model="nameVillage"
        :items="listVillage"
        :label="$t('label.select_village')"
        :error-messages="errors"
        :disabled="disable"
        menu-props="auto"
        item-text="desa_nama"
        single-line
        solo
        autocomplete
        @change="onSelectVillage"
      />
    </ValidationProvider>
  </v-col>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'SelectAreaVillage',
  components: {
    ValidationProvider
  },
  props: {
    disabledSelect: {
      type: Boolean,
      default: false
    },
    village: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    codeSubDistrict: {
      type: String,
      default: null
    },
    onSelectVillage: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      listVillage: [],
      disable: true
    }
  },
  computed: {
    nameVillage: {
      get() {
        return this.village
      },
      set(val) {
        this.$emit('update:updateVillage', val.desa_nama)
      }
    }
  },
  watch: {
    codeSubDistrict: async function(value) {
      if (value.length > 0) {
        const response = await this.$store.dispatch('region/getListVillage', value)
        this.listVillage = response.data
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
