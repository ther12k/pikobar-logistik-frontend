export default {
  SET_LIST_PASIEN: (state, data) => {
    state.listPasien = data
  },
  SET_DETAIL_PASIEN: (state, data) => {
    state.detailPasien = data
  },
  SET_FORM_PASIEN: (state, data) => {
    state.formPasien = data
  },
  RESET_FORM_PASIEN: (state, data) => {
    state.formPasien.id_case = ''
    state.formPasien.national_identity_number = ''
    state.formPasien.related_identity_number = ''
    state.formPasien.birth_date = ''
    state.formPasien.age = ''
    state.formPasien.gender = ''
    state.formPasien.address_street = ''
    // state.formPasien.address_province_code = ''
    // state.formPasien.address_city_code = ''
    // state.formPasien.address_district_code = ''
    // state.formPasien.address_village_code = ''
    state.formPasien.nationality_type = ''
    state.formPasien.nationality_country = ''
    state.formPasien.current_location_address = ''
    state.formPasien.occupation = ''
    state.formPasien.status = ''
    state.formPasien.stage = 0
    state.formPasien.final_result = 0
    state.formPasien.history_tracing = true
    state.formPasien.history_notes = ''
    state.formPasien.current_location = ''
    state.formPasien.current_hospital_id = ''
  }
}
