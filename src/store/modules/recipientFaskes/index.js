import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  listRecipientFaskes: [],
  totalList: 0,
  summaryRecipientFaskes: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
