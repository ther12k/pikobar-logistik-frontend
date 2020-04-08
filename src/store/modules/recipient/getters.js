export default {
  recipientList: (state, getters) => {
    return state.listRecipient
  },
  totalList: (state, getters) => {
    return state.totalList
  },
  recipientSummary: (state, getters) => {
    return state.summaryRecipient
  },
  dataKitRecipient: (state, getters) => {
    return state.dataKitRecipient
  },
  dataWidgetRecipient: (state, getters) => {
    return state.dataWidgetRecipient
  },
  detailListRecipient: (state, getters) => {
    return state.listDetailRecipient
  },
  totalListDetailRecipient: (state, getters) => {
    return state.totalListDetailRecipient
  }
}
