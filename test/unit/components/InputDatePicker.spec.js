import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'
import moment from 'moment'
import VueMoment from 'vue-moment'

import InputDatePicker from '@/components/InputDatePicker'

moment.locale('id')
Vue.use(Vuetify)
Vue.use(VueMoment, {
  moment
})
const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(moment)

Vue.component('input-date-picker', InputDatePicker)

describe('inputDatePicker', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(InputDatePicker, {
      localVue
    })
    wrapper.vm.formatDateFunc('2020-03-13T00:00:00.000Z')
    wrapper.vm.onChangeDate('2020-03-13T00:00:00.000Z', 'YYYY-MM-DD')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
