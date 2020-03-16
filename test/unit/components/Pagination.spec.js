import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'

import Pagination from '@/components/Pagination'
Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

Vue.component('pagination', Pagination)

describe('Pagination', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Pagination, {
      localVue,
      propsData: {
        total: 5,
        onNext: function() {
          return null
        }
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    wrapper.vm.changePageSize(2)
  })
})
