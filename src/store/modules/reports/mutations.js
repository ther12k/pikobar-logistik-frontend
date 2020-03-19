
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
    console.log(state)
    state.formPasien.name = ''
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
