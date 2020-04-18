<template>
  <v-container>
    <ValidationObserver ref="observer">
      <v-form
        ref="form"
        lazy-validation
      >
        <v-row>
          <center><v-label class="title"><b>{{ $t('label.applicant_form_header') }}</b></v-label></center>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <v-label class="title"><b>{{ $t('label.instance_type') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
              <v-autocomplete
                v-model="formApplicant.instanceType"
                outlined
                :error-messages="errors"
                :items="instance"
                :placeholder="$t('label.autocomplete_instance_placeholder')"
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <v-label class="title"><b>{{ $t('label.instance_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
              <v-autocomplete
                v-model="formApplicant.intanceName"
                outlined
                :error-messages="errors"
                :items="instanceName"
                :placeholder="$t('label.example_instance_name')"
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="isPhoneNumber"
            >
              <v-label class="title"><b>{{ $t('label.instance_phone_number') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
              <v-text-field
                v-model="formApplicant.instancePhoneNumber"
                outlined
                :error-messages="errors"
                :placeholder="$t('label.example_phone_number')"
                solo-inverted
              />
            </ValidationProvider>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <v-label class="title"><b>{{ $t('label.city_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
              <v-autocomplete
                v-model="formApplicant.cityName"
                outlined
                :error-messages="errors"
                :items="city"
                :placeholder="$t('label.autocomplete_city_placeholder')"
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <v-label class="title"><b>{{ $t('label.district_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
              <v-autocomplete
                v-model="formApplicant.districtName"
                outlined
                :error-messages="errors"
                :items="district"
                :placeholder="$t('label.autocomplete_capital_placeholder')"
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <v-label class="title"><b>{{ $t('label.village_name') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
              <v-autocomplete
                v-model="formApplicant.villageName"
                outlined
                :error-messages="errors"
                :items="village"
                :placeholder="$t('label.autocomplete_capital_placeholder')"
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <v-label class="title"><b>{{ $t('label.full_address') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
              <v-textarea
                v-model="formApplicant.fullAddress"
                outlined
                :height="100"
                :no-resize="true"
                :error-messages="errors"
                :items="village"
                :placeholder="$t('label.example_full_address')"
                solo-inverted
              />
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-container fluid>
          <div class="btn-desktop">
            <v-col cols="6" sm="6" md="6" class="float-right">
              <v-btn
                class="margin-positive"
                color="primary"
                @click="onNext()"
              >{{ $t('label.next') }}</v-btn>
              <v-btn
                class="margin-positive"
                outlined
                text
                href="#/landing-page"
              >{{ $t('label.cancel') }}</v-btn>
            </v-col>
          </div>
          <div class="btn-mobile">
            <v-col cols="6" sm="6" md="6" class="float-right">
              <v-btn
                class="margin-positive"
                color="primary"
                @click="onNext()"
              >{{ $t('label.next') }}</v-btn>
            </v-col>
            <v-col cols="6" sm="6" md="6" class="float-right">
              <v-btn
                class="margin-positive"
                outlined
                text
                href="#/landing-page"
              >{{ $t('label.cancel') }}</v-btn>
            </v-col>
          </div>
        </v-container>
      </v-form>
    </ValidationObserver>
  </v-container>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import EventBus from '@/utils/eventBus'

export default {
  name: 'IdentitasInstansiPemohon',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  props: {
    formApplicant: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      // TODO: integrasi API, data yang digunakan saat ini masih data dummy
      instance: ['Puskesmas', 'Rumah Sakit'],
      instanceName: ['RSUD Bandung', 'RSUD Bogor'],
      city: ['Kota Bandung', 'Kab Bandung', 'Kota Bogor', 'Kab Bogor'],
      district: ['Kecamatan 1', 'Kecamatan 2'],
      village: ['Desa 1', 'Desa 2'],
      step: 1
    }
  },
  methods: {
    async onNext() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }
      EventBus.$emit('nextStep', this.step)
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
  margin-top: -30px !important;
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
.float-right {
  float: right;
}
.btn-desktop {
  display:block;
}
.btn-mobile {
  display: none;
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
  .btn-desktop {
    display: none;
  }
  .btn-mobile {
    display: block;
  }
}
</style>
