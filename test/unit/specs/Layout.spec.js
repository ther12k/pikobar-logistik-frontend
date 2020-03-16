import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Router from 'vue-router'

import Layout from '@/layout'
import Header from '@/layout/Header/Header'
import Sidebar from '@/layout/Sidebar/Sidebar'
import Breadcrumb from '@/components/Breadcrumb'
import vuetify from '@/utils/vuetify'
import store from '@/store'
import VmBackTop from 'vue-multiple-back-top'

import i18n from '@/lang'
import Vue from 'vue'
const router = new Router()
const localVue = createLocalVue()
Vue.component('vm-back-top', VmBackTop)
Vue.component('breadcrumb', Breadcrumb)
localVue.use(Vuetify)
localVue.use(router)
localVue.use(i18n)

describe('layout.vue', () => {
  it('should render layout', () => {
    shallowMount(Layout, {
      localVue,
      router,
      store,
      i18n
    })
  })
  it('should render Header', () => {
    const wrapper = shallowMount(Header, {
      localVue,
      store,
      router,
      vuetify,
      i18n
    })

    const buttonchangeLanguage = wrapper.find('#changeLanguage')
    buttonchangeLanguage.trigger('click')

    const bottonChangeLayout = wrapper.find('#changeTemplateColor')
    bottonChangeLayout.trigger('click')

    const buttonLogout = wrapper.find('#logoutBottom')
    buttonLogout.trigger('click')

    wrapper.vm.emitDarkMode(true)
    wrapper.vm.changeLanguage('id')
  })
  it('should render Sidebar', () => {
    shallowMount(Sidebar, {
      store,
      localVue,
      i18n
    })
  })
})
