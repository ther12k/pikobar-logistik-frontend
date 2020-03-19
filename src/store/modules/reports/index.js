import actions from './actions'
import mutations from './mutations'
import getters from './getters'

function initialState() {
  return {
    detailPasien: null,
    listPasien: null,
    totalList: 0,
    formPasien: {
      id_case: '',
      id_case_national: '',
      id_case_related: '',
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
      nationality: '',
      occupation: '',
      status: '',
      stage: 0,
      final_result: 0,
      diagnosis: [],
      history_tracing: [],
      history_notes: '',
      current_location_type: 'RUMAH',
      current_location_address: '',
      current_location_province: '',
      current_location_district: '',
      current_location_subdistrict: '',
      current_location_village: ''
    },
    formRiwayatPasien: {
      case: '',
      status: '',
      stage: '',
      diagnosis: [],
      history_tracing: [],
      history_notes: '',
      current_location_type: 'RUMAH',
      current_location_address: '',
      current_location_district: '',
      current_location_subdistrict: '',
      current_location_village: ''
    }
  }
}

const state = {
  detailPasien: initialState().detailPasien,
  listPasien: initialState().listPasien,
  totalList: initialState().totalList,
  formPasien: initialState().formPasien,
  formRiwayatPasien: initialState().formRiwayatPasien
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
