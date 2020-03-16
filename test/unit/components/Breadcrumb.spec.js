import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '@/lang'

import Breadcrumb from '@/components/Breadcrumb'
Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

Vue.component('breadcrumb', Breadcrumb)

describe('Breadcrumb', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Breadcrumb, {
      localVue,
      router,
      i18n
    })
    wrapper.vm.$options.watch.$route.call(wrapper.vm, 'survey_title')
  })
})
