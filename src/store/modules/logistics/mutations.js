export default {
  SET_LIST_APD: (state, data) => {
    state.dataListAPD = data
  },
  SET_LIST_APD_UNIT: (state, data) => {
    state.dataListApdUnit = data
  },
  SET_LIST_INSTANCE_TYPE: (state, data) => {
    state.dataInstanceType = data
  },
  SET_LIST_LOGISTIC_REQUEST: (state, data) => {
    state.dataListLogisticRequest = data
  },
  SET_TOTAL_LIST_LOGISTIC_REQUEST: (state, data) => {
    state.totalListLogisticRequest = data
  }
}
