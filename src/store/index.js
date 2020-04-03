import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'
import toast from './modules/toast'
import rdtDistribution from './modules/rdtDistribution'
import recipient from './modules/recipient'
import region from './modules/region'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    permission,
    toast,
    user,
    rdtDistribution,
    recipient,
    region
  }
})

export default store
