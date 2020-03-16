import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'

import Search from '@/components/Search'
Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)
const props = {
  listQuery: {
    search: ''
  }
}
describe('Search.vue', () => {
  it('should render Search', () => {
    shallowMount(Search, {
      localVue,
      propsData: props
    })
  })
})
