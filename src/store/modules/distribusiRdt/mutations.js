export default {
  SET_LIST_DISTRIBUSI_RDT: (state, data) => {
    state.listDistribusiRdt = data
  },
  SET_TOTAL_LIST_DISTRIBUSI_RDT: (state, data) => {
    state.totalList = data
  },
  SET_FORM_DISTRIBUSI_RDT: (state, data) => {
    state.formDistribusiRdt = data
  },
  RESET_FORM_DISTRIBUSI_RDT: (state) => {
    state.formDistribusiRdt.id_user = ''
    state.formDistribusiRdt.name = ''
    state.formDistribusiRdt.contact_person = ''
    state.formDistribusiRdt.phone_number = ''
    state.formDistribusiRdt.location_address = ''
    state.formDistribusiRdt.location_subdistrict_code = ''
    state.formDistribusiRdt.location_district_code = ''
    state.formDistribusiRdt.quantity = ''
    state.formDistribusiRdt.time = ''
    state.formDistribusiRdt.note = ''
  }
}
