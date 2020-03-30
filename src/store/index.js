import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'
import toast from './modules/toast'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    permission,
    toast,
    user
  }
})

export default store
