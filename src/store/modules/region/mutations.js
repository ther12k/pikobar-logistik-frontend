export default {
  SET_DISTRICT_CITY: (state, data) => {
    state.districtCity = data
  },
  SET_HOSPITAL_CITY: (state, data) => {
    state.hospitalList = data
  },
  SET_APPLICANT_LIST_CITY: (state, data) => {
    state.applicantCity = data
  },
  SET_APPLICANT_LIST_DISTRICT: (state, data) => {
    state.applicantDistrict = data
  }
}
