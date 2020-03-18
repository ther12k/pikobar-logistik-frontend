export default {
  SET_LIST_PASIEN: (state, data) => {
    state.listPasien = data
  },
  SET_TOTAL_LIST_PASIEN: (state, data) => {
    state.totalList = data
  },
  SET_DETAIL_PASIEN: (state, data) => {
    state.detailPasien = data
  },
  SET_FORM_PASIEN: (state, data) => {
    state.formPasien = data
  },
  RESET_FORM_PASIEN: (state) => {
    state.formPasien.id_case = ''
    state.formPasien.national_identity_number = ''
    state.formPasien.related_identity_number = ''
    state.formPasien.birth_date = ''
    state.formPasien.age = ''
    state.formPasien.gender = ''
    state.formPasien.address_street = ''
    state.formPasien.address_city_code = ''
    state.formPasien.address_district_name = ''
    state.formPasien.address_district_code = ''
    state.formPasien.address_subdistrict_name = ''
    state.formPasien.address_village_code = ''
    state.formPasien.address_village_name = ''
    state.formPasien.nationality_type = ''
    state.formPasien.nationality_country = ''
    state.formPasien.occupation = ''
    state.formPasien.status = ''
    state.formPasien.stage = 0
    state.formPasien.final_result = 0
    state.formPasien.history_tracing = []
    state.formPasien.history_notes = ''
    state.formPasien.current_location_type = 'RUMAH'
    state.formPasien.current_location_address = ''
    state.formPasien.current_location_province = ''
    state.formPasien.current_location_district = ''
    state.formPasien.current_location_subdistrict = ''
    state.formPasien.current_location_village = ''
  },
  RESET_RIWAYAT_FORM_PASIEN: (state) => {
    state.formRiwayatPasien.case = ''
    state.formRiwayatPasien.status = ''
    state.formRiwayatPasien.stage = ''
    state.formRiwayatPasien.diagnosis = []
    state.formRiwayatPasien.history_tracing = []
    state.formRiwayatPasien.history_notes = ''
    state.formRiwayatPasien.current_location_type = 'RUMAH'
    state.formRiwayatPasien.current_location_address = ''
    state.formRiwayatPasien.current_location_district = ''
    state.formRiwayatPasien.current_location_subdistrict = ''
    state.formRiwayatPasien.current_location_village = ''
  }
}
