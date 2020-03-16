import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Vue from 'vue'

import Dashboard from '@/views/dashboard'
const router = new Router()
Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('Dashboard.vue', () => {
  it('should render dashboard', () => {
    shallowMount(Dashboard, {
      localVue,
      router
    })
  })
})
