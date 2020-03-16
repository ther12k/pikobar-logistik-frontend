import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Vue from 'vue'
import ToastsNotification from '@/components/ToastsNotification'
import App from '@/App.vue'
const router = new Router()
Vue.use(Vuetify)
Vue.component('toast-notification', ToastsNotification)
const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(Router)

describe('App.vue', () => {
  it('should render App', () => {
    jest.useFakeTimers()

    const wrapper = shallowMount(App, {
      localVue,
      router
    })

    jest.runAllTimers()
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1500)
    expect(wrapper.vm.loading).toBe(false)
  })
})
