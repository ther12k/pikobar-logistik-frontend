import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'

import LoadingBar from '@/components/LoadingBar'
Vue.use(Vuetify)
const localVue = createLocalVue()
import i18n from '@/lang'

localVue.use(Vuetify)

describe('LoadingBar.vue', () => {
  it('should render LoadingBar', () => {
    const wrapper = shallowMount(LoadingBar, {
      localVue,
      i18n,
      propsData: {
        loading: true
      }
    })

    wrapper.vm.$options.computed.loadingModal.get()
    expect(wrapper.vm.$props.loading).toBe(true)
  })
})
