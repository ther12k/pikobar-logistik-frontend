import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import constant from '@/constants/state'

const state = {
  totalList: 0,
  listRdtDistribution: [],
  firstStock: 0,
  distributedStock: 0,
  remainingStock: 0,
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
    location_province_code: constant.westJavaLocalProvinceCode,
    quantity: '',
    time: '',
    note: ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
