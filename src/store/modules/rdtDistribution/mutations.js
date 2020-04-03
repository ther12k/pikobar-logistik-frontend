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
  RESET_RDT_DISTRIBUTION_FORM: (state) => {
    state.rdtDistributionForm.id_user = ''
    state.rdtDistributionForm.name = ''
    state.rdtDistributionForm.contact_person = ''
    state.rdtDistributionForm.phone_number = ''
    state.rdtDistributionForm.location_address = ''
    state.rdtDistributionForm.location_subdistrict_code = ''
    state.rdtDistributionForm.location_district_code = ''
    state.rdtDistributionForm.quantity = ''
    state.rdtDistributionForm.time = ''
    state.rdtDistributionForm.note = ''
  }
}
