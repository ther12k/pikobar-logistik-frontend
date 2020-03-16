import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Vue from 'vue'

import Redirect from '@/views/redirect'
const router = new Router()
Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(Router)

describe('Redirect.vue', () => {
  it('should render redirect', () => {
    shallowMount(Redirect, {
      localVue,
      router
    })
  })
})
