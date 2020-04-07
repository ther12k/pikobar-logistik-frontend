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
    state.rdtDistributionForm.formQuantity = ''
  },
  SET_RDT_DISTRIBUTION_FORM: (state, data) => {
    state.rdtDistributionForm.id_user = data.id_user
    state.rdtDistributionForm.name = data.name
    state.rdtDistributionForm.contact_person = data.contact_person
    state.rdtDistributionForm.phone_number = data.phone_number
    state.rdtDistributionForm.location_address = data.location_address
    state.rdtDistributionForm.location_subdistrict_code = data.location_subdistrict_code
    state.rdtDistributionForm.location_district_code = data.location_district_code
    state.rdtDistributionForm.quantity = Math.abs(data.quantity)
    state.rdtDistributionForm.time = data.time.date.substr(0, 10)
    state.rdtDistributionForm.note = data.note
    state.rdtDistributionForm.formQuantity = Math.abs(data.quantity)
  }
}
