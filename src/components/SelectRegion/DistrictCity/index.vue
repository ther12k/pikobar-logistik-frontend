<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="8">
        <ValidationProvider
          v-slot="{ errors }"
          :rules="required ? 'required': ''"
        >
          <v-autocomplete
            v-model="nameDistrictCity"
            :items="listDistrictCity"
            :label="$t('label.select_district')"
            :error-messages="errors"
            :disabled="disabledSelect"
            item-value="kota_kode"
            item-text="kota_nama"
            prepend-icon="map"
            single-line
            autocomplete
            @change="onSelectDistrict"
          />
        </ValidationProvider>
      </v-col>
    </v-row>
  </v-container>
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
      type: String,
      default: ''
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
  computed: {
    ...mapGetters('region', [
      'listDistrictCity'
    ]),
    nameDistrictCity: {
      get() {
        return this.districtCity
      },
      set(val) {
        this.$emit('update:updateDistrictCity', val)
      }
    }
  },
  async mounted() {
    if (!this.disabledSelect) {
      await this.$store.dispatch('region/getListDistrictCity')
    }
  }
}
</script>
