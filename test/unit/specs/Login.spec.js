import { mount, createLocalVue } from '@vue/test-utils'
import vuetify from '@/utils/vuetify'
import Router from 'vue-router'
import store from '@/store'
import Vuex from 'vuex'
import Login from '@/views/login'
import i18n from '@/lang'
const router = new Router()
const localVue = createLocalVue()
localVue.use(vuetify)
localVue.use(router)
localVue.use(Vuex)

describe('Login.vue', () => {
  const usernameVal = 'ganjar'
  const passwordVal = 'Jabar Juara'

  const wrapper = mount(Login, {
    localVue,
    vuetify,
    store,
    router,
    i18n
  })

  const buttonLogin = wrapper.find('.v-btn')
  const inputUsername = wrapper.find('#username')
  const inputPassword = wrapper.find('input[type="password"]')

  it('should render login and success login', async() => {
    store.dispatch = jest.fn().mockResolvedValue(true)

    // negative test, invalid input
    inputUsername.setValue('a')
    inputPassword.setValue('s')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.valid).toBe(false)

    inputUsername.setValue(usernameVal)
    inputPassword.setValue(passwordVal)
    buttonLogin.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.valid).toBe(true)
    expect(store.dispatch).toHaveBeenCalledWith('user/login', {
      username: usernameVal,
      password: passwordVal
    })

    expect(wrapper.vm.loading).toBe(false)
  })

  it('should deny login', async() => {
    store.dispatch = jest.fn().mockRejectedValue(new Error('login denied!'))

    inputUsername.setValue(usernameVal)
    inputPassword.setValue(passwordVal)
    buttonLogin.trigger('click')

    expect(wrapper.vm.valid).toBe(true)
    await wrapper.vm.$nextTick()

    expect(store.dispatch).toHaveBeenCalledWith('user/login', { username: usernameVal, password: passwordVal })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.loading).toBe(false)
  })
})
