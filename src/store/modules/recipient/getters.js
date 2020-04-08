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
  dataRecipient: (state, getters) => {
    return state.dataRecipient
  },
  dataWidgetRecipient: (state, getters) => {
    return state.dataWidgetRecipient
  }
}
