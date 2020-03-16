import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'

import CardSurvey from '@/components/Survey/CardSurvey'
import ModalGenerateLink from '@/components/Survey/ModalGenerateLink'
import QuestionsBuilder from '@/components/Survey/QuestionsBuilder'
import DialogDelete from '@/components/DialogDelete'
Vue.use(Vuetify)
const localVue = createLocalVue()
import i18n from '@/lang'
Vue.component('dialog-delete', DialogDelete)
localVue.use(Vuetify)
const props = {
  detail: {
    survey_name: 'Jabar Survei'
  }
}

describe('Survey Components', () => {
  it('should render CardSurvey', () => {
    const wrapper = shallowMount(CardSurvey, {
      propsData: props,
      localVue,
      i18n
    })
    wrapper.vm.handleEdit(1)
  })
  it('should render ModalGenerateLink', () => {
    const wrapper = shallowMount(ModalGenerateLink, {
      propsData: props,
      localVue,
      i18n
    })
    const button = wrapper.find('#copyUrl')
    button.trigger('click')
  })
  it('should render QuestionsBuilder', () => {
    shallowMount(QuestionsBuilder, {
      propsData: props,
      localVue,
      i18n
    })
  })
})
