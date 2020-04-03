export default {
  SET_LIST_RDT_DISTRIBUTION: (state, data) => {
    state.listRdtDistribution = data
  },
  SET_TOTAL_LIST_RDT_DISTRIBUTION: (state, data) => {
    state.totalList = data
  },
  SET_FIRST_STOCK: (state, data) => {
    state.firstStock = data
  },
  SET_DISTRIBUTED_STOCK: (state, data) => {
    state.distributedStock = data
  },
  SET_REMAINING_STOCK: (state, data) => {
    state.remainingStock = data
  },
  SET_FORM_DISTRIBUSI_RDT: (state, data) => {
    state.rdtDistributionFrom = data
  },
  RESET_RDT_DISTRIBUTION_FORM: (state) => {
    state.rdtDistributionFrom.id_user = ''
    state.rdtDistributionFrom.name = ''
    state.rdtDistributionFrom.contact_person = ''
    state.rdtDistributionFrom.phone_number = ''
    state.rdtDistributionFrom.location_address = ''
    state.rdtDistributionFrom.location_subdistrict_code = ''
    state.rdtDistributionFrom.location_district_code = ''
    state.rdtDistributionFrom.quantity = ''
    state.rdtDistributionFrom.time = ''
    state.rdtDistributionFrom.note = ''
  }
}
