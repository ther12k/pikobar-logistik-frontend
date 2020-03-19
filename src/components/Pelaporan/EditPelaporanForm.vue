<template>
  <div>
    <v-card
      outlined
    >
      <v-row>
        <v-expansion-panels
          v-model="panelRiwayat"
          multiple
        >
          <v-expansion-panel>
            <v-expansion-panel-header>Update Riwayat Kasus</v-expansion-panel-header>
            <v-expansion-panel-content>
              <ValidationObserver v-slot="{ validate, reset }" ref="observer">
                <v-form
                  ref="form"
                  lazy-validation
                >
                  <v-row>
                    <v-col
                      cols="6"
                      md="6"
                      sm="12"
                    >
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <v-label>Status</v-label>
                        <v-radio-group
                          v-model="formRiwayatPasien.status"
                          :error-messages="errors"
                          row
                        >
                          <v-radio label="ODP" value="ODP" />
                          <v-radio label="PDP" value="PDP" />
                          <v-radio label="POSITIF" value="POSITIF" />
                        </v-radio-group>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <v-label>State</v-label>
                        <v-radio-group
                          v-model="formRiwayatPasien.stage"
                          :error-messages="errors"
                          row
                        >
                          <v-radio label="Proses" value="0" />
                          <v-radio label="Selesai" value="1" />
                        </v-radio-group>
                      </ValidationProvider>
                      <ValidationProvider v-slot="{ errors }" rules="required|atLeastOne">
                        <v-label>Gejala*</v-label>
                        <div v-for="(item, index) in optionGejala" :key="index">
                          <label class="material-checkbox-custom">
                            <input
                              :value="item.value"
                              v-model="formRiwayatPasien.diagnosis"
                              type="checkbox"
                            >
                            <span v-if="errors.length" class="error--text">{{ item.text }}</span>
                            <span v-else>{{ item.text }}</span>
                          </label>
                        </div>
                        <span
                          v-if="errors.length"
                          class="v-messages error--text"
                        >{{ errors[0] }}</span>
                      </ValidationProvider>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      sm="12"
                    >
                      <ValidationProvider v-slot="{ errors }">
                        <v-label>Riwayat</v-label>
                        <v-checkbox
                          v-model="formRiwayatPasien.history_tracing"
                          label="Dari Luar Negeri"
                          value="Dari Luar Negeri"
                        />
                        <v-checkbox
                          v-model="formRiwayatPasien.history_tracing"
                          label="Kontak Dengan Pasien Positif"
                          value="Kontak Dengan Pasien Positif"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          v-model="formRiwayatPasien.history_notes"
                          placeholder="Masukkan Riwayat Lainnya Jika Ada"
                          solo-inverted
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <v-label>Dirawat</v-label>
                        <v-radio-group
                          v-model="formRiwayatPasien.current_location_type"
                          :error-messages="errors"
                          row
                          @change="handleChange"
                        >
                          <v-radio label="Rumah" value="RUMAH" />
                          <v-radio label="Rumah Sakit" value="RS" />
                        </v-radio-group>
                      </ValidationProvider>
                      <div v-if="formRiwayatPasien.current_location_type === 'RUMAH'">
                        <v-label>Alamat</v-label>
                        <address-region
                          :district-name="formRiwayatPasien.current_location_district"
                          :name-district.sync="formRiwayatPasien.current_location_district"
                          :subdistrict-name="formRiwayatPasien.current_location_subdistrict"
                          :name-sub-district.sync="formRiwayatPasien.current_location_subdistrict"
                          :village-name="formRiwayatPasien.current_location_village"
                          :name-village.sync="formRiwayatPasien.current_location_village"
                          :disabled-address="false"
                          :required-address="false"
                        />
                      </div>
                      <ValidationProvider
                        v-slot="{ errors }"
                        v-if="formRiwayatPasien.current_location_type === 'RUMAH'"
                      >
                        <v-label>Alamat Lengkap Rumah</v-label>
                        <v-text-field
                          :error-messages="errors"
                          v-model="formRiwayatPasien.current_location_address"
                          solo-inverted
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        v-if="formRiwayatPasien.current_location_type === 'RS'"
                      >
                        <v-autocomplete
                          v-model="formRiwayatPasien.current_location_address"
                          :items="hospitalList"
                          :error-messages="errors"
                          label="Lokasi Rumah Sakit"
                          menu-props="auto"
                          item-text="name"
                          item-value="name"
                          single-line
                          solo
                          autocomplete
                        />
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                  <v-container fluid>
                    <v-row class="survey-bottom-form">
                      <v-col>
                        <v-btn
                          color="success"
                          bottom
                          style="float: right;"
                          @click="handleSave"
                        >
                          Simpan
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </ValidationObserver>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
      <v-row>
        <v-expansion-panels
          v-model="panelListRiwayat"
          multiple
        >
          <v-expansion-panel>
            <v-expansion-panel-header>List Riwayat Kasus</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-simple-table fixed-header height="500px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">#</th>
                      <th class="text-left">STATUS</th>
                      <th class="text-left">LOKASI SAAT INI</th>
                      <th class="text-left">TANGGAL DIUPDATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in listHistoryCase" :key="item.index">
                      <td>{{ getTableRowNumbering(index) }}</td>
                      <td><status :status="item.status" /></td>
                      <td>{{ item.current_location_type }}</td>
                      <td>{{ formatDatetime(item.last_changed, "DD MMMM YYYY") }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { optionGejala } from '@/utils/constantVariable'
import { formatDatetime } from '@/utils/parseDatetime'
import { mapGetters } from 'vuex'
export default {
  name: 'EditPelaporanForm',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  props: {
    idData: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      panelRiwayat: [0],
      panelListRiwayat: [0],
      optionGejala: optionGejala,
      listHistoryCase: null
    }
  },
  computed: {
    ...mapGetters('reports', [
      'formRiwayatPasien'
    ]),
    ...mapGetters('region', [
      'hospitalList'
    ])
  },
  async mounted() {
    await this.$store.dispatch('region/getListHospotal')
    const detail = await this.$store.dispatch('reports/detailReportCase', this.idData)
    const response = await this.$store.dispatch('reports/listHistoryCase', this.idData)
    this.formRiwayatPasien.case = detail.data.id_case
    this.listHistoryCase = response.data
  },
  methods: {
    formatDatetime,
    handleChange(value) {
      if (value === 'RUMAH') {
        this.formRiwayatPasien.current_location_address = ''
      } else {
        this.formRiwayatPasien.current_location_address = ''
        this.formRiwayatPasien.current_location_district = ''
        this.formRiwayatPasien.current_location_subdistrict = ''
        this.formRiwayatPasien.current_location_village = ''
      }
    },
    async handleSave() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
      await this.$store.dispatch('reports/createHistoryCase', this.formRiwayatPasien)
      await this.$store.dispatch('reports/resetRiwayatFormPasien')
      await this.$router.push('/laporan/index')
    },
    getTableRowNumbering(index) {
      return (index + 1)
    }
  }
}
</script>

<style scoped>

</style>
