import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'
import toast from './modules/toast'
import distribusiRdt from './modules/distribusiRdt'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    permission,
    toast,
    user,
    distribusiRdt,
  }
})

export default store
