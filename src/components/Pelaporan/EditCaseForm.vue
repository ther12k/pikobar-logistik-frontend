<template>
  <div>
    <v-card
      outlined
    >
      <v-row>
        <v-expansion-panels
          v-model="panelCase"
          multiple
        >
          <v-expansion-panel>
            <v-expansion-panel-header>Update Detail Kasus</v-expansion-panel-header>
            <v-expansion-panel-content>
              <ValidationObserver v-slot="{ validate, reset }" ref="observer">
                <v-form
                  ref="form"
                  lazy-validation
                >
                  <v-row>
                    <v-col
                      cols="12"
                      md="6"
                      sm="12"
                    >
                      <ValidationProvider
                        v-slot="{ errors }"
                      >
                        <label>ID Kasus</label>
                        <v-text-field
                          v-model="formPasien.id_case"
                          disabled
                          solo-inverted
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                      >
                        <v-label>ID Kasus Pusat</v-label>
                        <v-text-field
                          :error-messages="errors"
                          v-model="formPasien.id_case_national"
                          solo-inverted
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                      >
                        <v-label>ID Kasus Terkait</v-label>
                        <v-text-field
                          :error-messages="errors"
                          v-model="formPasien.id_case_related"
                          solo-inverted
                        />
                      </ValidationProvider>
                      <ValidationProvider v-slot="{ errors }">
                        <v-label>Pekerjaan</v-label>
                        <v-select
                          v-model="formPasien.occupation"
                          :items="occupationList"
                          item-value="title"
                          item-text="title"
                          menu-props="auto"
                          solo
                        />
                      </ValidationProvider>
                      <ValidationProvider v-slot="{ errors }">
                        <v-label>Alamat Kantor</v-label>
                        <v-textarea
                          v-model="formPasien.office_address"
                          solo
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <label class="required">Kewarganegaraan</label>
                        <v-radio-group
                          v-model="formPasien.nationality"
                          :error-messages="errors"
                          row
                          @change="handleChangeNationality"
                        >
                          <v-radio label="WNI" value="WNI" />
                          <v-radio label="WNA" value="WNA" />
                        </v-radio-group>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        v-if="formPasien.nationality === 'WNA'"
                      >
                        <v-text-field
                          v-model="formPasien.nationality_name"
                          :error-messages="errors"
                          placeholder="Negara Asal"
                          solo-inverted
                        />
                      </ValidationProvider>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                      sm="12"
                    >
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required|isHtml"
                      >
                        <label class="required">Nama Pasien</label>
                        <v-text-field
                          :error-messages="errors"
                          v-model="formPasien.name"
                          solo-inverted
                        />
                      </ValidationProvider>
                      <label>Tanggal Lahir</label>
                      <select-datetime
                        :datetime="formPasien.birth_date"
                        :date-time.sync="formPasien.birth_date"
                        :formate-date="formatDate"
                      />
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required|isHtml"
                      >
                        <label class="required">Usia</label>
                        <v-text-field
                          :error-messages="errors"
                          v-model="formPasien.age"
                          solo-inverted
                          type="number"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <label class="required">Jenis Kelamin</label>
                        <v-radio-group
                          v-model="formPasien.gender"
                          :error-messages="errors"
                          row
                        >
                          <v-radio label="Laki-Laki" value="L" />
                          <v-radio label="Perempuan" value="P" />
                        </v-radio-group>
                      </ValidationProvider>
                      <label class="required">Alamat Tempat Tinggal</label>
                      <address-region
                        :district-code="formPasien.address_district_code"
                        :district-name="formPasien.address_district_name"
                        :code-district.sync="formPasien.address_district_code"
                        :name-district.sync="formPasien.address_district_name"
                        :sub-district-code="formPasien.address_subdistrict_code"
                        :sub-district-name="formPasien.address_subdistrict_name"
                        :code-sub-district.sync="formPasien.address_subdistrict_code"
                        :name-sub-district.sync="formPasien.address_subdistrict_name"
                        :village-code="formPasien.address_village_code"
                        :village-name="formPasien.address_village_name"
                        :code-village.sync="formPasien.address_village_code"
                        :name-village.sync="formPasien.address_village_name"
                        :disabled-address="false"
                        :required-address="true"
                      />
                      <ValidationProvider v-slot="{ errors }">
                        <v-label>Alamat Lengkap Tempat Tinggal</v-label>
                        <v-textarea
                          v-model="formPasien.address_street"
                          solo
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <label class="required">Nomor Telepon</label>
                        <v-text-field
                          v-model="formPasien.phone_number"
                          :error-messages="errors"
                          solo-inverted
                          type="number"
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
                          @click="handleUpdateCase"
                        >
                          Update Kasus
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
                      <th class="text-left">TAHAPAN</th>
                      <th class="text-left">LOKASI SAAT INI</th>
                      <th class="text-left">TANGGAL DIUPDATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in listHistoryCase" :key="item.index">
                      <td>{{ getTableRowNumbering(index) }}</td>
                      <td><status :status="item.status" /></td>
                      <td>
                        <div v-if="item.stage === '0'">
                          Proses
                        </div>
                        <div v-else>
                          Selesai
                        </div>
                      </td>
                      <td>{{ item.current_location_address }}</td>
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
import { getAge } from '@/utils/constantVariable'
import { formatDatetime } from '@/utils/parseDatetime'
import { mapGetters } from 'vuex'
export default {
  name: 'EditCaseForm',
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
      formatDate: 'YYYY/MM/DD',
      panelCase: [0],
      panelListRiwayat: [0],
      listHistoryCase: null
    }
  },
  computed: {
    ...mapGetters('reports', [
      'formPasien'
    ]),
    ...mapGetters('occupation', [
      'occupationList'
    ])
  },
  watch: {
    'formPasien.birth_date': function(value) {
      console.log(value)
      this.formPasien.age = this.getAge(value)
    }
  },
  async created() {
    await this.$store.dispatch('occupation/getListOccuption')
    await this.$store.dispatch('region/getListHospital')
    const detail = await this.$store.dispatch('reports/detailReportCase', this.idData)
    const response = await this.$store.dispatch('reports/listHistoryCase', this.idData)
    Object.assign(this.formPasien, detail.data)
    this.formPasien.birth_date = this.formatDatetime(detail.data.birth_date, this.formatDate)
    if (this.formPasien._id) {
      delete this.formPasien['_id']
      delete this.formPasien['author']
      delete this.formPasien['createdAt']
      delete this.formPasien['updatedAt']
      delete this.formPasien['last_history']
    }
    this.listHistoryCase = response.data
  },
  methods: {
    getAge,
    formatDatetime,
    async handleUpdateCase() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
      const updateCase = {
        id: this.idData,
        data: this.formPasien
      }
      const response = await this.$store.dispatch('reports/updateReportCase', updateCase)
      if (response) {
        await this.$store.dispatch('toast/successToast', 'Data Kasus Berhasil Di Rubah')
        await this.$store.dispatch('reports/resetRiwayatFormPasien')
        await this.$router.push('/laporan/index')
      }
    },
    handleChangeNationality(value) {
      if (value === 'WNI') {
        this.formPasien.nationality_name = ''
      }
    },
    getTableRowNumbering(index) {
      return (index + 1)
    }
  }
}
</script>

<style scoped>

</style>
