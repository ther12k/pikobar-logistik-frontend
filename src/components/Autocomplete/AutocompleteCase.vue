<template>
  <div>
    <ValidationProvider
      v-slot="{ errors }"
    >
      <v-autocomplete
        :loading="loading"
        :items="listKasus"
        :return-object="false"
        item-value="display"
        item-text="display"
        single-line
        :disabled="disabledCase"
        :error-messages="errors"
        color="black"
        solo
        autocomplete
        @change="onSelectCase"
      >
        <template v-slot:selection="data">
          {{ data.item.display }}
        </template>
        <template v-slot:item="data">
          <v-list-item-content>
            <v-list-item-title v-html="data.item.display" />
          </v-list-item-content>
        </template>
      </v-autocomplete>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { mapGetters } from 'vuex'

export default {
  name: 'AutocompleteCases',
  components: {
    ValidationProvider
  },
  props: {
    requiredValidation: {
      type: Boolean,
      default: false
    },
    onSelectCase: {
      type: Function,
      default: null
    },
    disabledCase: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      listKasus: null,
      listQuery: {
        address_district_code: null
      }
    }
  },
  computed: {
    ...mapGetters('user', [
      'roles',
      'district_user'
    ])
  },
  async mounted() {
    this.loading = true
    this.listQuery.address_district_code = this.district_user
    const response = await this.$store.dispatch('rdt/getCases', this.listQuery)
    this.listKasus = response.data
    this.loading = false
  }
}
</script>
