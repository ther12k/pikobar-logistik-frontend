<template>
  <v-dialog
    v-model="show"
    max-width="500"
    :persistent="true"
  >
    <v-card>
      <ValidationObserver ref="observer">
        <v-col>
          <span class="title-dialog">{{ $t('label.add_medical_facility') }}</span>
          <br>
          <br>
          <ValidationProvider
            v-slot="{ errors }"
            rules="requiredRegistrationNumber"
          >
            <v-label class="title"><b>{{ $t('label.regis_number') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
            <v-text-field
              v-model="listQuery.nomor_registrasi"
              :placeholder="$t('label.regis_number_placeholder')"
              :error-messages="errors"
              outlined
            />
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            rules="requiredFaskesName"
          >
            <v-label class="title"><b>{{ $t('label.faskes_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
            <v-text-field
              v-model="listQuery.nama_faskes"
              :placeholder="$t('label.input_faskes_name')"
              outlined
              :error-messages="errors"
            />
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            rules="requiredInstanceType"
          >
            <v-label class="title"><b>{{ $t('label.instance_type') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
            <v-select
              v-model="listQuery.id_tipe_faskes"
              :placeholder="$t('label.autocomplete_instance_placeholder')"
              outlined
              :items="faskesTypeList"
              item-text="name"
              item-value="id"
              :error-messages="errors"
            />
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            rules="requiredUpperName"
          >
            <v-label class="title"><b>{{ $t('label.upper_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
            <v-text-field
              v-model="listQuery.nama_atasan"
              :placeholder="$t('label.input_upper_name')"
              outlined
              :error-messages="errors"
            />
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            rules="requiredFaskesLocation"
          >
            <v-label class="title"><b>{{ $t('label.faskes_location') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
            <v-text-field
              v-model="listQuery.faskes_location"
              :placeholder="$t('label.input_faskes_location')"
              outlined
              :error-messages="errors"
            />
          </ValidationProvider>
          <div>
            <i>{{ $t('label.add_instance_not_found_notif') }}</i>
          </div>
          <div>
            <v-btn class="margin-10" outlined @click="hideDialog">{{ $t('label.cancel') }}</v-btn>
            <v-btn class="margin-10" color="success" @click="submitData">{{ $t('label.save') }}</v-btn>
          </div>
        </v-col>
      </ValidationObserver>
    </v-card>
  </v-dialog>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapGetters } from 'vuex'
import EventBus from '@/utils/eventBus'

export default {
  name: 'FormAddInstance',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  props: {
    show: {
      type: Boolean,
      default: null
    }
  },
  data() {
    return {
      listQuery: {}
    }
  },
  computed: {
    ...mapGetters('faskesType', [
      'faskesTypeList'
    ])
  },
  async created() {
    await this.$store.dispatch('faskesType/getListFaskesType')
  },
  methods: {
    async submitData() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
      const response = await this.$store.dispatch('logistics/postAddFaskes', this.listQuery)
      if (response) {
        window.location.reload()
      }
    },
    hideDialog() {
      EventBus.$emit('dialogHide', false)
    }
  }
}
</script>

<style>
.title-dialog {
  margin-top: 20px;
  color: #219653 !important;
  font-family: "Product Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
}
.text-small {
  font-size: 13px;
}
.margin-10 {
  margin: 10px
}
</style>
