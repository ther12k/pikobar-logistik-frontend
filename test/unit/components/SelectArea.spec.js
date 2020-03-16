import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'

import DistrictCity from '@/components/SelectRegion/DistrictCity'
import SubDistrict from '@/components/SelectRegion/SubDistrict'
import Village from '@/components/SelectRegion/Village'
import store from '@/store'
const localVue = createLocalVue()
Vue.use(Vuetify)
localVue.use(Vuetify)

describe('Select Region', () => {
  test('is a DistrictCity instance', () => {
    const wrapper = shallowMount(DistrictCity, {
      localVue,
      store
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('is a SubDistrict instance', () => {
    const wrapper = shallowMount(SubDistrict, {
      localVue,
      store
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('is a Village instance', () => {
    const wrapper = shallowMount(Village, {
      localVue,
      store
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
