export default {
  SET_LIST_RECIPIENT: (state, data) => {
    state.listRecipient = data
  },
  SET_TOTAL_LIST_RECIPIENT: (state, data) => {
    state.totalList = data
  },
  SET_SUMMARY_RECIPIENT: (state, data) => {
    state.summaryRecipient = data
  },
  SET_DATA_RECIPIENT: (state, data) => {
    state.dataRecipient = data[0]
  }
}
