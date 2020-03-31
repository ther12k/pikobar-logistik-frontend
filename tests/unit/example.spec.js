import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Status from '@/components/Status'
Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('App', () => {
  it('renders props.msg when passed', () => {
    shallowMount(Status)
  })
})
