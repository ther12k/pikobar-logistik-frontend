import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  detailPasien: null,
  listPasien: null,
  totalList: 0,
  formPasien: {
    id_case: '',
    national_identity_number: '',
    related_identity_number: '',
    name: '',
    birth_date: '',
    age: '',
    gender: '',
    phone_number: null,
    address_street: '',
    address_province_code: '35',
    address_province_name: 'Jawa Barat',
    address_district_code: '',
    address_district_name: '',
    address_subdistrict_code: '',
    address_subdistrict_name: '',
    address_village_code: '',
    address_village_name: '',
    nationality_type: '',
    nationality_country: '',
    occupation: '',
    status: '',
    stage: 0,
    final_result: 0,
    history_tracing: true,
    history_notes: '',
    current_location_type: '0',
    current_hospital_id: '',
    current_location_address: '',
    current_location_province: '',
    current_location_district: '',
    current_location_subdistrict: '',
    current_location_village: ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
