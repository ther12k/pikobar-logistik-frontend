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
                v-if="roles[0] === 'dinkeskota'"
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
                <tr v-for="(item, index) in listPasien" :key="item.index">
                  <td>{{ getTableRowNumbering(index) }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.age }}</td>
                  <td>{{ item.nationality }}</td>
                  <td>
                    <div v-if="item.gender =='P'">
                      Perempuan
                    </div>
                    <div v-else>
                      Laki-Laki
                    </div>
                  </td>
                  <td>{{ item.current_location_address }}</td>
                  <td>{{ item.address_district_name }}</td>
                  <td><status :status="item.last_status" /> </td>
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
      :total="totalList "
      :page="listQuery.page"
      :limit="listQuery.limit"
      :on-next="onNext"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LaporanList',
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 10,
        search: ''
      }
    }
  },
  computed: {
    ...mapGetters('reports', [
      'listPasien',
      'totalList'
    ]),
    ...mapGetters('user', [
      'roles'
    ])
  },
  watch: {
    'listQuery.search': {
      handler: function(value) {
        if (value.length >= 3) {
          this.handleSearch()
        } else if (value.length === 0) {
          this.handleSearch()
        }
      },
      immediate: true
    }
  },
  async mounted() {
    await this.$store.dispatch('reports/listReportCase')
  },
  methods: {
    async handleCreate() {
      await this.$store.dispatch('reports/resetFormPasien')
      await this.$router.push('/laporan/stepper')
    },
    async handleSearch() {
      this.listQuery.page = 1
      await this.$store.dispatch('reports/listReportCase', this.listQuery)
    },
    getTableRowNumbering(index) {
      return ((this.listQuery.page - 1) * this.listQuery.limit) + (index + 1)
    },
    async onNext(value) {
      this.listQuery.page = value
      await this.$store.dispatch('reports/listReportCase', this.listQuery)
    }
  }
}
</script>

<style scoped>

</style>
