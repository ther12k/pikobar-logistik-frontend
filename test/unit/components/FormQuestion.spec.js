import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'
import store from '@/store'

import HTMLBindingText from '@/components/HTMLBindingText'
import LoadingBar from '@/components/LoadingBar'
import FormQuestion from '@/components/Survey/FormQuestion'
import ModalGenerateLink from '@/components/Survey/ModalGenerateLink'
Vue.use(Vuetify)
import i18n from '@/lang'
Vue.component('html-binding-text', HTMLBindingText)
Vue.component('loading-bar', LoadingBar)
Vue.component('modal-generate-link', ModalGenerateLink)
const localVue = createLocalVue()
localVue.use(Vuetify)

const props = {
  questionsList: [],
  formSurvey: {
    description: '',
    introduction: ''
  }
}
describe('FormQuestion.vue', () => {
  it('should render FormQuestion', () => {
    shallowMount(FormQuestion, {
      localVue,
      propsData: props,
      store,
      i18n
    })
  })
})
