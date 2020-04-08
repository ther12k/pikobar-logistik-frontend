<template>
  <div>
    <h1><b>{{ dataRecipient.cityName }}</b></h1>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-green">{{ $t('label.kit_received') }}</v-list-item-title>
              <v-list-item-title class="mb-1">{{ dataRecipient.totalReceived }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-green">{{ $t('label.kit_available') }}</v-list-item-title>
              <v-list-item-title class="mb-1">{{ dataRecipient.totalStock }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-green">{{ $t('label.used_kit') }}</v-list-item-title>
              <v-list-item-title class="mb-1">{{ dataRecipient.totalUsed }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-green"> {{ $t('label.positive') }} </v-list-item-title>
              <v-list-item-title class="mb-1">{{ dataWidgetRecipient.POSITIF }} {{ $t('label.label_human') }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-green"> {{ $t('label.negative') }} </v-list-item-title>
              <v-list-item-title class="mb-1">{{ dataWidgetRecipient.NEGATIF }} {{ $t('label.label_human') }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-green"> {{ $t('label.invalid') }} </v-list-item-title>
              <v-list-item-title class="mb-1">{{ dataWidgetRecipient.INVALID }} {{ $t('label.label_human') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-card
      outlined
    >
      <v-row>
        <v-col cols="12" sm="6">
          <v-card-text>
            <div class="text-size">
              {{ $t('label.list_rdt_kit') }}
            </div>
          </v-card-text>
        </v-col>
      </v-row>
      <hr>
      <v-row>
        <v-col auto>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">#</th>
                  <th class="text-left">{{ $t('label.faskes_name').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.used_kit').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.positive').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.negative').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.invalid').toUpperCase() }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in dataPengguna" :key="item.index">
                  <td>{{ getTableRowNumbering(index) }}</td>
                  <td>{{ item.namaFaskes }}</td>
                  <td>{{ item.kitTerpakai }}</td>
                  <td>{{ item.positif }}</td>
                  <td>
                    {{ item.negatif }}
                  </td>
                  <td>
                    {{ item.invalid }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card>
    <dialog-delete
      :dialog="dialog"
      :data-deleted="dataDelete"
      :dialog-delete.sync="dialog"
      :delete-date.sync="dataDelete"
      :store-path-delete="`reports/deleteReportCase`"
      :store-path-get-list="`reports/listReportCase`"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DetailRdtKota',
  props: {
    idData: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      // data dummy TODO: integrasi dengan API
      dataPengguna: [
        {
          namaFaskes: 'RSUD 1',
          stokDinkes: 115,
          kitTerpakai: 100,
          stokSisa: 15,
          positif: 25,
          negatif: 50,
          invalid: 25
        },
        {
          namaFaskes: 'RSUD 2',
          stokDinkes: 100,
          kitTerpakai: 80,
          stokSisa: 20,
          positif: 25,
          negatif: 50,
          invalid: 25
        }
      ],
      dialog: false,
      dataDelete: null
    }
  },
  computed: {
    ...mapGetters('recipient', [
      'dataRecipient',
      'dataWidgetRecipient'
    ])
  },
  async mounted() {
    // TODO: integrasi dengan API
    await this.getRecipient(this.$route.params.id)
    await this.getWidgetRecipient(this.$route.params.id)
  },
  methods: {
    getTableRowNumbering(index) {
      return (index + 1)
    },
    async getRecipient(cityCode) {
      this.loading = true
      await this.$store.dispatch('recipient/getListRecipient', { city_code: cityCode })
      this.loading = false
    },
    async getWidgetRecipient(cityCode) {
      this.loading = true
      await this.$store.dispatch('recipient/getWidgetRecipient', { city_code: cityCode })
      this.loading = false
    }
  }
}
</script>

<style scoped>
.row-detail {
  padding-left: 2rem;
  padding-right: 2rem;
}
.row-detail-label {
  margin: auto;
}
.text-green {
  color: #219653;
}
.text-size {
    font-size: 1.5rem;
}
</style>
