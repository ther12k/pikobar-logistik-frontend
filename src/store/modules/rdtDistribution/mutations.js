export default {
  SET_LIST_RDT_DISTRIBUTION: (state, data) => {
    state.listRdtDistribution = data
  },
  SET_TOTAL_LIST_RDT_DISTRIBUTION: (state, data) => {
    state.totalList = data
  },
  SET_FIRST_STOCK: (state, data) => {
    state.firstStock = data
  },
  SET_DISTRIBUTED_STOCK: (state, data) => {
    state.distributedStock = data
  },
  SET_REMAINING_STOCK: (state, data) => {
    state.remainingStock = data
  }
}
