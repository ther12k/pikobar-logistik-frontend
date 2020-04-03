export default {
  SET_LIST_RECIPIENT: (state, data) => {
    if (data.length !== 1) {
      state.listRecipient = data
    } else {
      state.listRecipient = data[0]
    }
  },
  SET_TOTAL_LIST_RECIPIENT: (state, data) => {
    state.totalList = data
  },
  SET_SUMMARY_RECIPIENT: (state, data) => {
    state.summaryRecipient = data
  }
}
