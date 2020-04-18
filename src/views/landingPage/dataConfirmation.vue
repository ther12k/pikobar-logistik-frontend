<template>
  <div class="background-landing-page">
    <div class="full-landing-page">
      <div class="header-landing-page">
        <v-row justify="space-between" align="center">
          <v-col cols="12" md="8" xs="12">
            <v-row>
              <img height="40" src="../../static/logistik_logo_lingkar.svg">
              <div class="title-page-landing-page">{{ $t('label.logistics_medical_device') }}</div>
            </v-row>
          </v-col>
          <v-col cols="12" md="4" xs="12">
            <v-row class="float-right-landing-page">
              <v-icon color="white" size="17">{{ $t('label.icon_talk') }}</v-icon>
              <div class="call-center-landing-page">{{ $t('label.call_center') }}</div>
              <v-icon color="white" size="17">{{ $t('label.icon_help') }}</v-icon>
              <div class="pusat-bantuan-landing-page">{{ $t('label.help_center') }}</div>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div class="header-landing-page-mobile">
        <v-row>
          <v-col cols="8">
            <v-row>
              <v-col class="margin-left-20" cols="2">
                <img height="40" src="../../static/logistik_logo_lingkar.svg">
              </v-col>
              <v-col cols="6">
                <div class="title-page-landing-page-mobile">
                  {{ $t('label.logistic') }} <br>
                  {{ $t('label.medical_tools') }}
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row class="float-right-landing-page">
              <v-icon class="margin-20" color="white" size="30">{{ $t('label.icon_talk') }}</v-icon>
              <v-icon color="white" size="30">{{ $t('label.icon_help') }}</v-icon>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="negative-landing-page">
      <v-card class="main-card-data-confirmation" outlined>
        <div class="data-confirmation-text">Konfirmasi Data</div>
        <hr>
        <div class="main-color">Identitas Instansi</div>
        <div>
          <v-row>
            <v-col>
              <v-row>
                <v-col>
                  <v-row class="main-color">Jenis Instansi</v-row>
                  <v-row>Rumah Sakit Umum</v-row>
                  <v-row class="main-color">Nama Instansi</v-row>
                  <v-row>RSUD Kota Depok</v-row>
                  <v-row class="main-color">Nomor Telepon</v-row>
                  <v-row>081220702050</v-row>
                </v-col>
                <v-col>
                  <v-row class="main-color">Kota/Kabupaten</v-row>
                  <v-row>Kota Depok</v-row>
                  <v-row class="main-color">Kecamatan</v-row>
                  <v-row>Sawangan</v-row>
                  <v-row class="main-color">Kelurahan</v-row>
                  <v-row>Sawangan Lama</v-row>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <v-row class="main-color">Alamat Lengkap</v-row>
              <v-row>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora in, non ad provident aperiam alias. Iste voluptatem officia dicta repellat ullam nam quo accusamus expedita, magni odio eius quidem.</v-row>
            </v-col>
          </v-row>
        </div>
        <hr>
        <div class="main-color">Identitas Pemohon</div>
        <div>
          <v-row>
            <v-col>
              <v-row>
                <v-col>
                  <v-row class="main-color">Nama Pemohon</v-row>
                  <v-row>Muhammad Safrul</v-row>
                  <v-row class="main-color">Jabatan Pemohon</v-row>
                  <v-row>CEO RS Safrul</v-row>
                </v-col>
                <v-col>
                  <v-row class="main-color">Email</v-row>
                  <v-row>safrul@gmail.com</v-row>
                  <v-row class="main-color">No. HP Pemohon</v-row>
                  <v-row>08110101010</v-row>
                  <v-row class="main-color">No. HP Pemohon Pengganti</v-row>
                  <v-row>08110101010</v-row>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <v-row class="main-color">KTP/Kartu Pegawai/Surat Tugas</v-row>
            </v-col>
          </v-row>
        </div>
        <hr>
        <div class="main-color">Daftar Kebutuhan Logistik</div>
        <v-card outlined>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">{{ $t('label.number').toUpperCase() }}</th>
                  <th class="text-left">Nama/Spesifikasi APD</th>
                  <th class="text-left">Merk</th>
                  <th class="text-left">Jumlah</th>
                  <th class="text-left">Satuan</th>
                  <th class="text-left">Tujuan Penggunaan</th>
                  <th class="text-left">Tingkat Urgensi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="listLogisticNeeds.length === 0">
                  <td class="text-center" :colspan="7">{{ $t('label.no_data') }}</td>
                </tr>
                <tr v-for="(item, index) in listLogisticNeeds" v-else :key="item.index">
                  <td>{{ getTableRowNumbering(index) }}</td>
                  <td>{{ item.subdistrict === null ? $t('label.stripe') : item.subdistrict.kemendagri_kabupaten_nama === null ? $t('label.stripe') : item.subdistrict.kemendagri_kabupaten_nama.toUpperCase() }}</td>
                  <td>{{ item.name === null ? $t('label.stripe') : item.name.toUpperCase() }}</td>
                  <td>{{ item.quantity === null ? $t('label.stripe') : Math.abs(item.quantity) | currency }}</td>
                  <td>{{ item.time === null ? $t('label.stripe') : $moment(item.time).format('DD MMMM YYYY') }}</td>
                  <td><v-btn text small color="info" @click="handleEdit(item.id)">{{ $t('label.edit_2') }}</v-btn></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        <pagination
          :total="listLogisticNeeds.length"
          :page.sync="listQuery.page"
          limit.sync="3"
          :on-next="onNext"
        />
        <hr>
        <div class="main-color">Surat Permohonan</div>
        <a href="">Surat Permohonan yang ke sekian.pdf</a>
        <hr>
        <v-row justify="end">
          <v-btn class="ml-5 white--text" min-width="140px" color="success" outlined="">Kembali</v-btn>
          <v-btn class="ml-5 white--text" min-width="140px" color="success">Simpan</v-btn>
        </v-row>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      listQuery: {
        page: 1
      },
      listLogisticNeeds: []
    }
  },
  methods: {
    onNext() {
      console.log('NEXT')
    }
  }
}
</script>
<style>
  .main-card-data-confirmation {
    padding: 30px;
    margin: 10px 120px 30px 120px;
  }
  .data-confirmation-text {
    font-size: 20px;
    font-weight: bold;
  }
  .main-color {
    color: #27ae60;
    font-weight: bold;
    margin-top: 20px !important;
  }
  .col {
    padding: 0px;
  }
  .row {
    padding: 0px;
    margin: 0px;
  }
</style>
