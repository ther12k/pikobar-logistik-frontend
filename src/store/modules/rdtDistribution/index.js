import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// TODO: Ubah variable yang masih statis!
const state = {
  totalList: 0,
  listRdtDistribution: [],
  availableStock: 0,
  distributedStock: 0,
  usedStock: 0,
  rdtDistributionForm: {
    id_product: 1,
    id_user: '',
    id_recepient: 1,
    name: '',
    contact_person: '',
    phone_number: '',
    location_address: '',
    location_subdistrict_code: '',
    location_district_code: '',
    quantity: '',
    time: '',
    note: '',
    formQuantity: ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
