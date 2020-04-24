import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  listMasterFaskes: [],
  totalMasterFaskes: 0
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
