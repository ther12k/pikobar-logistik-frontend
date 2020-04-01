import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'
import toast from './modules/toast'
import recipient from './modules/recipient'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    permission,
    toast,
    user,
    recipient
  }
})

export default store
