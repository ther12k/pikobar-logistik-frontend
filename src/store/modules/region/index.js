import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  districtCity: [],
  hospitalList: [],
  applicantCity: [],
  applicantDistrict: [],
  applicantVillage: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
