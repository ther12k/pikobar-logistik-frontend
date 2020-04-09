import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  listRecipient: [],
  totalList: 0,
  summaryRecipient: [],
  dataKitRecipient: {},
  dataWidgetRecipient: {},
  listDetailRecipient: [],
  totalListDetailRecipient: 0
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
