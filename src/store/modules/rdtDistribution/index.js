import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  totalList: 0,
  listRdtDistribution: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
