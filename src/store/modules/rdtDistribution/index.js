import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  totalList: 0,
  listRdtDistribution: [],
  firstStock: 0,
  distributedStock: 0,
  remainingStock: 0
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
