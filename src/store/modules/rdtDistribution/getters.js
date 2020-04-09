export default {
  listRdtDistribution: (state, getters) => {
    return state.listRdtDistribution
  },
  totalList: (state, getters) => {
    return state.totalList
  },
  usedStock: (state, getters) => {
    return state.usedStock
  },
  distributedStock: (state, getters) => {
    return state.distributedStock
  },
  availableStock: (state, getters) => {
    return state.availableStock
  },
  rdtDistributionForm: (state, getters, rootState) => {
    state.rdtDistributionForm.location_province_code = rootState.constants.westJavaLocalProvinceCode
    return state.rdtDistributionForm
  }
}
