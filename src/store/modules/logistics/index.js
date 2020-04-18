import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  dataListAPD: [],
  dataInstanceType: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
