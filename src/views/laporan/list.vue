<template>
  <div>
    <v-card class="d-block pa-1 mx-auto header-survey-list">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-card-text class="header-survey-text">
              <div>Total data Pasien : </div>
              <div>Tambahkan data pasien baru dengan menekan tombol Tambah Pasien</div>
            </v-card-text>
          </v-col>
          <v-col cols="auto">
            <v-card-text>
              <v-btn
                id="addsurvey"
                class="bottom-add-survey"
                depressed
                @click="handleCreate"
              >
                <v-icon left>add_circle_outline</v-icon>
                Tambah Pasien
              </v-btn>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto"
          outlined
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Orang Dalam Pemantauan</v-list-item-title>
              <v-list-item-subtitle>Orang yang mengalami gejala demam dan memiliki  <br> riwayat perjalanan ke negara terjangkit.<br>&nbsp;</v-list-item-subtitle>
              <v-list-item-title class="headline mb-1">1 Orang</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto"
          outlined
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Pasien Dalam Pengawasan</v-list-item-title>
              <v-list-item-subtitle>Orang yang sudah menunjukan gejala demam, batuk, <br> pilek dan sesak nafas memiliki riwayat <br> perjalanan ke negara terjangkit.</v-list-item-subtitle>
              <v-list-item-title class="headline mb-1">1 Orang</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto"
          outlined
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>POSITIF</v-list-item-title>
              <v-list-item-subtitle>Orang yang sudah menunjukan gejala corona <br> dan juga diduga kuat sudah melakukan kontak <br> dengan pasien positif Covid-19.</v-list-item-subtitle>
              <v-list-item-title class="headline mb-1">1 Orang</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-card
      outlined
    >
      <v-row>
        <v-col>
          <v-card-text>
            <div style="font-size: 1.5rem;">
              Data Pasien
            </div>
          </v-card-text>
        </v-col>
        <v-col>
          <search
            :handle-search="handleSearch"
            :list-query="listQuery"
          />
        </v-col>
      </v-row>
      <hr>
      <v-row>
        <v-col auto>
          <v-simple-table fixed-header height="500px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">#</th>
                  <th class="text-left">Nama</th>
                  <th class="text-left">Usia</th>
                  <th class="text-left">Warganegara</th>
                  <th class="text-left">Jenis Kelamin</th>
                  <th class="text-left">Lokasi Pengawasan</th>
                  <th class="text-left">Dinkes Kota/Kab</th>
                  <th class="text-left">Diagnosa</th>
                  <th class="text-left" />
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in desserts" :key="item.name">
                  <td>{{ getTableRowNumbering(index) }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.name }}</td>
                  <td><status :status="item.status" /> </td>
                  <td>
                    <v-card-actions>
                      <v-menu
                        :close-on-content-click="false"
                        :nudge-width="200"
                        :nudge-left="220"
                        :nudge-top="40"
                        offset-y
                      >
                        <template v-slot:activator="{ on }">
                          <v-btn
                            class="ma-2"
                            tile
                            large
                            color="grey"
                            icon
                            v-on="on"
                          >
                            <v-icon>more_horiz</v-icon>
                          </v-btn>
                        </template>
                        <v-card>
                          <v-list-item>
                            <img src="/static/icon-survey-results.svg" style="padding-right: 1rem;"> Approve
                          </v-list-item>
                          <v-list-item>
                            <img src="/static/update-it-survey.svg" style="padding-right: 1rem;"> Detail Pasien
                          </v-list-item>
                          <v-divider style="margin:0 !important;"/>
                          <v-list-item style="color: #EB5757 !important;">
                            <img src="/static/icon-delete.svg" style="padding-right: 1rem;"> Hapus Pasien
                          </v-list-item>
                        </v-card>
                      </v-menu>
                    </v-card-actions>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card>
    <pagination
      :total="10"
      :page="1"
      :limit="10"
      :on-next="handleSearch"
    />
  </div>
</template>

<script>
export default {
  name: 'LaporanList',
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 10,
        search: ''
      },
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          status: 'ODP'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          status: 'ODP'
        },
        {
          name: 'Eclair',
          calories: 262,
          status: 'PDP'
        },
        {
          name: 'Cupcake',
          calories: 305,
          status: 'Positif'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          status: 'Positif'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          status: 'PDP'
        },
        {
          name: 'Lollipop',
          calories: 392,
          status: 'PDP'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          status: 'PDP'
        },
        {
          name: 'Donut',
          calories: 452,
          status: 'PDP'
        },
        {
          name: 'KitKat',
          calories: 518,
          status: 'PDP'
        }
      ]
    }
  },
  methods: {
    handleCreate() {
      this.$router.push('/laporan/stepper')
    },
    handleSearch() {
      console.log('ok')
    },
    getTableRowNumbering(index) {
      return ((this.listQuery.page - 1) * this.listQuery.limit) + (index + 1)
    }
  }
}
</script>

<style scoped>

</style>
