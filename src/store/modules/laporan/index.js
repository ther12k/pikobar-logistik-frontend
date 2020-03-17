import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  detailPasien: null,
  formPasien: {
    identity_number: '',
    name: '',
    birth_date: '',
    age: '',
    gender: '',
    phone_number1: null,
    address_street: '',
    address_province_code: '',
    address_city_code: '',
    address_district_code: '',
    address_village_code: [],
    nationality_type: '',
    nationality_country: '',
    occupation_title: '',
    status: '',
    stage: 0,
    final_result: 0,
    history_tracing: true,
    history_notes: '',
    current_location: '',
    current_hospital_id: ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
