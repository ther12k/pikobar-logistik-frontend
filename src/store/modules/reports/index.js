import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  detailPasien: null,
  listPasien: null,
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
    address_province_code: '02',
    address_province_name: 'Jawa Barat',
    address_district_code: '02',
    address_district_name: 'Kota Bandung',
    address_subdistrict_code: '09',
    address_subdistrict_name: 'Cihapit',
    address_village_code: '03',
    address_village_name: 'Kelurahan Cihapit',
    nationality_type: '',
    nationality_country: '',
    current_location_address: '',
    occupation: '',
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
