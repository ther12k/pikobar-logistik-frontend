<template>
  <div>
    <v-card class="main-card mb-12 margin-top-100">
      <div class="form-header">
        <center>
          <v-label class="title"><b>{{ $t('label.applicant_form_header') }}</b></v-label>
        </center>
      </div>
      <div class="margin-input">
        <v-row class="mx-auto">
          <v-col cols="6">
            <v-label class="title"><b>{{ $t('label.instance_type') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
            <v-autocomplete outlined :items="instance" :placeholder="$t('label.autocomplete_instance_placeholder')" />
          </v-col>
          <v-col cols="6">
            <v-label class="title"><b>{{ $t('label.city_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
            <v-autocomplete outlined :items="city" :placeholder="$t('label.autocomplete_city_placeholder')" />
          </v-col>
        </v-row>
        <v-row class="mx-auto margin-negative">
          <v-col cols="6">
            <v-label><b>{{ $t('label.instance_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
            <v-autocomplete outlined :items="instanceName" :placeholder="$t('label.example_instance_name')" />
          </v-col>
          <v-col cols="6">
            <v-label><b>{{ $t('label.district_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
            <v-autocomplete outlined :items="district" :placeholder="$t('label.autocomplete_capital_placeholder')" />
          </v-col>
        </v-row>
        <v-row class="mx-auto margin-negative">
          <v-col cols="6">
            <v-label><b>{{ $t('label.instance_phone_number') }}</b></v-label>
            <v-text-field outlined :error-messages="errors" :placeholder="$t('label.example_phone_number')" solo-inverted />
          </v-col>
          <v-col cols="6">
            <v-label><b>{{ $t('label.village_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
            <v-autocomplete outlined :items="village" :placeholder="$t('label.autocomplete_capital_placeholder')" />
          </v-col>
        </v-row>
        <v-row class="mx-auto margin-negative">
          <v-col cols="6" offset="6">
            <v-label><b>{{ $t('label.full_address') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
            <v-textarea outlined :height="100" :no-resize="true" :error-messages="errors" :placeholder="$t('label.example_full_address')" solo-inverted />
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card class="main-card-mobile">
      <v-row>
        <div class="margin-header-mobile">
          <center>
            <v-label class="title"><b>{{ $t('label.applicant_form_header') }}</b></v-label>
          </center>
        </div>
      </v-row>
      <div class="margin-top-80">
        <div>
          <v-col cols="12" sm="12">
            <v-label class="title"><b>{{ $t('label.instance_type') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
          </v-col>
          <v-col class="margin-text-mobile-10" cols="12" sm="12">
            <v-autocomplete outlined :items="instance" :placeholder="$t('label.autocomplete_instance_placeholder')" />
          </v-col>
        </div>
        <div class="margin-top-30">
          <v-col cols="12" sm="12">
            <v-label><b>{{ $t('label.instance_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
          </v-col>
          <v-col class="margin-text-mobile-10" cols="12" sm="12">
            <v-autocomplete outlined :items="instanceName" :placeholder="$t('label.example_instance_name')" />
          </v-col>
        </div>
        <div class="margin-top-30">
          <v-col cols="12" sm="12">
            <v-label><b>{{ $t('label.instance_phone_number') }}</b></v-label>
          </v-col>
          <v-col class="margin-text-mobile-10" cols="12" sm="12">
            <v-text-field outlined :error-messages="errors" :placeholder="$t('label.example_phone_number')" solo-inverted />
          </v-col>
        </div>
        <div class="margin-top-30">
          <v-col cols="12" sm="12">
            <v-label class="title"><b>{{ $t('label.city_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
          </v-col>
          <v-col class="margin-text-mobile-10" cols="12" sm="12">
            <v-autocomplete outlined :items="city" :placeholder="$t('label.autocomplete_city_placeholder')" />
          </v-col>
        </div>
        <div class="margin-top-30">
          <v-col cols="12" sm="12">
            <v-label><b>{{ $t('label.district_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
          </v-col>
          <v-col class="margin-text-mobile-10" cols="12" sm="12">
            <v-autocomplete outlined :items="district" :placeholder="$t('label.autocomplete_capital_placeholder')" />
          </v-col>
        </div>
        <div class="margin-top-30">
          <v-col cols="12" sm="12">
            <v-label><b>{{ $t('label.village_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
          </v-col>
          <v-col class="margin-text-mobile-10" cols="12" sm="12">
            <v-autocomplete outlined :items="village" :placeholder="$t('label.autocomplete_capital_placeholder')" />
          </v-col>
        </div>
        <div class="margin-top-30">
          <v-col cols="12" sm="12">
            <v-label><b>{{ $t('label.full_address') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
          </v-col>
          <v-col class="margin-text-mobile-10" cols="12" sm="12">
            <v-textarea outlined :height="100" :no-resize="true" :error-messages="errors" :placeholder="$t('label.example_full_address')" solo-inverted />
          </v-col>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'IdentitasInstansiPemohon',
  data() {
    return {
      // TODO: integrasi API, data yang digunakan saat ini masih data dummy
      instance: ['Puskesmas', 'Rumah Sakit'],
      instanceName: ['RSUD Bandung', 'RSUD Bogor'],
      city: ['Kota Bandung', 'Kab Bandung', 'Kota Bogor', 'Kab Bogor'],
      district: ['Kecamatan 1', 'Kecamatan 2'],
      village: ['Desa 1', 'Desa 2']
    }
  }
}
</script>
<style>
.main-card {
  margin-left: -50px;
  display: block;
}
.main-card-mobile {
  display: none;
}
.margin-negative {
  margin-top: -30px;
}
.text-small {
  font-size: 13px;
}
.margin-header-mobile {
  margin-top: -150px;
}
.margin-text-mobile-10 {
  margin-top: -10px;
  padding: 10px;
}
.margin-top-100 {
  margin-top: -100px !important;
}
.margin-top-80 {
  margin-top: -80px;
}
.margin-top-30 {
  margin-top: -30px;
}
.margin-input {
  margin-left: -130px;
  margin-right: -130px;
}
@media (max-width: 1199px) and (min-width: 960px) {
}
@media (max-width: 768px) and (min-width: 320px) {
}

@media (max-width: 588px) and (min-width: 320px) {
  .main-card {
    display: none;
  }
  .main-card-mobile {
    display: block;
  }
}
</style>
