import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Vuetify········'
    shallowMount(HelloWorld, {
      propsData: { msg }
    })
  })
})
