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
              <v-label class="title"><b>{{ $t('label.contact_person') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
              <v-text-field
                v-model="formIdentityApplicant.applicantName"
                outlined
                :error-messages="errors"
                :placeholder="$t('label.input_full_name')"
                solo-inverted
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
              <v-label class="title"><b>{{ $t('label.applicant_position') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
              <v-text-field
                v-model="formIdentityApplicant.applicantPosition"
                outlined
                :error-messages="errors"
                :placeholder="$t('label.applicant_position_placeholder')"
                solo-inverted
              />
            </ValidationProvider>
            <ValidationProvider
              rules="required"
            >
              <v-label class="title"><b>{{ $t('label.upload_applicant_ktp') }}</b></v-label>
              <br>
              <div>
                <v-label v-if="!isUpload">{{ $t('label.not_yet_upload_file') }}</v-label>
                <v-label v-else>{{ selectedFileName }}</v-label>
                <br>
                <input
                  ref="uploader"
                  type="file"
                  class="d-none"
                  accept=".pdf, .jpg, .jpeg, .png"
                  @change="onFileChanged"
                >
                <v-text-field
                  v-model="selectedFileName"
                  disabled
                  class="d-none"
                />
                <v-btn
                  v-if="!isUpload"
                  color="#2E7D32"
                  class="margin-10"
                  depressed
                  :outlined="true"
                  :loading="isSelecting"
                  @click="onButtonClick"
                >
                  {{ $t('label.upload') }}
                </v-btn>
                <v-btn
                  v-if="isUpload"
                  outlined
                  @click="deleteFile"
                >
                  {{ $t('label.delete') }}
                </v-btn>
                <v-btn
                  v-if="isUpload"
                  color="#2E7D32"
                  class="margin-10"
                  depressed
                  :outlined="true"
                  :loading="isSelecting"
                  @click="onButtonClick"
                >
                  {{ $t('label.reupload') }}
                </v-btn>
                <v-alert
                  v-if="uploadAlert"
                  type="error"
                >
                  {{ $t('label.upload_error_message') }}
                </v-alert>
              </div>
            </ValidationProvider>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|email"
            >
              <v-label class="title"><b>{{ $t('label.applicant_email') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
              <v-text-field
                v-model="formIdentityApplicant.applicantEmail"
                outlined
                :error-messages="errors"
                :placeholder="$t('label.applicant_email_placeholder')"
                solo-inverted
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|isPhoneNumber"
            >
              <v-label class="title"><b>{{ $t('label.applicant_phone_number') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
              <v-text-field
                v-model="formIdentityApplicant.applicantPhoneNumber"
                outlined
                :error-messages="errors"
                :placeholder="$t('label.applicant_phone_number_placeholder')"
                solo-inverted
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|isPhoneNumber"
            >
              <v-label class="title"><b>{{ $t('label.other_applicant_phone_number') }}</b> <i class="text-small">{{ $t('label.must_fill') }}</i></v-label>
              <v-text-field
                v-model="formIdentityApplicant.applicantPhoneNumber2"
                outlined
                :error-messages="errors"
                :placeholder="$t('label.applicant_phone_number_placeholder')"
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
                @click="onNext"
              >{{ $t('label.next') }}</v-btn>
              <v-btn
                class="margin-positive"
                outlined
                text
                @click="onPrev"
              >{{ $t('label.cancel') }}</v-btn>
            </v-col>
          </div>
          <div class="btn-mobile">
            <v-col cols="12" sm="12" md="6" class="float-right">
              <v-btn
                class="margin-positive"
                color="primary"
                @click="onNext"
              >{{ $t('label.next') }}</v-btn>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="float-right">
              <v-btn
                class="margin-positive"
                outlined
                text
                @click="onPrev"
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
  name: 'IdentitasPemohon',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  props: {
    formIdentityApplicant: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      step: 2,
      isSelecting: false,
      selectedFile: null,
      selectedFileName: '',
      isUpload: false,
      uploadAlert: false
    }
  },
  methods: {
    async onNext() {
      console.log(this.$refs.observer)
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        this.uploadAlert = true
        return
      }
      EventBus.$emit('nextStep', this.step)
    },
    onPrev() {
      EventBus.$emit('prevStep', this.step)
    },
    onButtonClick() {
      this.isSelecting = false
      this.isUpload = true
      this.uploadAlert = false
      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0]
      this.selectedFileName = this.selectedFile.name
      this.isUpload = true
      const formData = new FormData()
      formData.append('file', this.selectedFile)
    },
    deleteFile() {
      this.selectedFileName = ''
      this.isUpload = false
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
.margin-10 {
  margin: 10px;
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
