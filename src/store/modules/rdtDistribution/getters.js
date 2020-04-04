export default {
  listRdtDistribution: (state, getters) => {
    return state.listRdtDistribution
  },
  totalList: (state, getters) => {
    return state.totalList
  },
  firstStock: (state, getters) => {
    return state.firstStock
  },
  distributedStock: (state, getters) => {
    return state.distributedStock
  },
  remainingStock: (state, getters) => {
    return state.remainingStock
  },
  rdtDistributionForm: (state, getters, rootState) => {
    state.rdtDistributionForm.location_province_code = rootState.constants.westJavaLocalProvinceCode
    return state.rdtDistributionForm
  }
}
