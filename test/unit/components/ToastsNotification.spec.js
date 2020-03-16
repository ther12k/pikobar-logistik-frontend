import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'
import store from '@/store'

import ToastsNotification from '@/components/ToastsNotification/index.vue'
Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('ToastsNotification.vue', () => {
  it('should render ToastsNotification', () => {
    const wrapper = shallowMount(ToastsNotification, {
      localVue,
      store
    })

    wrapper.vm.$options.computed.isShow
    const buttonLogin = wrapper.find('.icon-close-toast')
    buttonLogin.trigger('click')

    wrapper.vm.closeToast()
  })
})
