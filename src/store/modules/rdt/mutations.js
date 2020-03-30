export default {
  SET_LIST_RDT: (state, data) => {
    state.listRDT = data
  },
  SET_TOTAL_LIST_RDT: (state, data) => {
    state.totalList = data
  },
  RESET_LIST_RDT: (state, data) => {
    state.listRDT = []
  }
}
