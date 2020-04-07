<template>
  <div>
    <h1><b>{{ idData }}</b></h1>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-green">{{ $t('label.kit_received') }}</v-list-item-title>
              <v-list-item-title class="mb-1">{{ kitDiterima }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-green">{{ $t('label.kit_available') }}</v-list-item-title>
              <v-list-item-title class="mb-1">{{ kitTersedia }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-green">{{ $t('label.used_kit') }}</v-list-item-title>
              <v-list-item-title class="mb-1">{{ kitTerpakai }}</v-list-item-title>
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
              <v-list-item-title class="mb-1">0% ({{ kitDiterima }} {{ $t('label.label_human') }})</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-green"> {{ $t('label.negative') }} </v-list-item-title>
              <v-list-item-title class="mb-1">0% ({{ kitTersedia }} {{ $t('label.label_human') }})</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-green"> {{ $t('label.invalid') }} </v-list-item-title>
              <v-list-item-title class="mb-1">0% ({{ kitTerpakai }} {{ $t('label.label_human') }})</v-list-item-title>
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
                  <th class="text-left">{{ $t('label.rdt_code').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.nik').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.full_name').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.category').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.check_date').toUpperCase() }}</th>
                  <th class="text-left">{{ $t('label.test_result').toUpperCase() }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in dataPengguna" :key="item.index">
                  <td>{{ getTableRowNumbering(index) }}</td>
                  <td>{{ item.nik }}</td>
                  <td>{{ item.kodeRdt }}</td>
                  <td>{{ item.namaLengkap }}</td>
                  <td>{{ item.kategori }}</td>
                  <td>{{ item.tanggal_pemeriksaan }}</td>
                  <td>{{ item.hasil_test }}</td>
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
export default {
  name: 'DetailRdtFaskes',
  props: {
    idData: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      kitDiterima: 0,
      kitTersedia: 0,
      kitTerpakai: 0,
      positif: 0,
      negatif: 0,
      invalid: 0,
      // data dummy TODO: integrasi dengan API
      dataPengguna: [
        {
          kodeRdt: '123',
          nik: '115',
          namaLengkap: 'orang 1',
          kategori: 'kategori 1',
          tanggal_pemeriksaan: '1-1-2020',
          hasil_test: 'positif'
        },
        {
          kodeRdt: '123123',
          nik: '115123',
          namaLengkap: 'orang 2',
          kategori: 'kategori 2',
          tanggal_pemeriksaan: '1-1-2020',
          hasil_test: 'negatif'
        }
      ],
      dialog: false,
      dataDelete: null
    }
  },
  async mounted() {
    // TODO: integrasi dengan API
  },
  methods: {
    getTableRowNumbering(index) {
      return (index + 1)
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
