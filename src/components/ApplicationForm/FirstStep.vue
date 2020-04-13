<template>
  <div>
    <v-card class="mb-12">
      <div class="form-header">
        <center>
          <v-label class="title"><b>{{ $t('label.applicant_form_header') }}</b></v-label>
        </center>
      </div>
      <div>
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
            <v-text-field outlined :required="true" :error-messages="errors" :placeholder="$t('label.example_instance_name')" solo-inverted />
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
  </div>
</template>
<script>
export default {
  name: 'IdentitasInstansiPemohon',
  data() {
    return {
      e1: 1,
      instance: ['Puskesmas', 'Rumah Sakit'],
      city: ['Kota Bandung', 'Kab Bandung', 'Kota Bogor', 'Kab Bogor'],
      district: ['Kecamatan 1', 'Kecamatan 2'],
      village: ['Desa 1', 'Desa 2']
    }
  }
}
</script>
<style>
.margin-negative {
  margin-top: -30px
}
.text-small {
  font-size: 13px;
}
</style>
