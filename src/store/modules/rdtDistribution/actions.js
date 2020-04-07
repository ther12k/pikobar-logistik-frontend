import { fetchList, doPostUpdate, doDetailDelete } from '@/api'

export default {
  async getListRdtDistribution({ commit }, params) {
    try {
      const response = await fetchList('/api/v1/transactions', 'GET', params)
      commit('SET_TOTAL_LIST_RDT_DISTRIBUTION', response.last_page)
      commit('SET_LIST_RDT_DISTRIBUTION', response.data)
      return response
    } catch (error) {
      return error.response
    }
  },
  async getSummary({ commit }, params) {
    try {
      const response = await fetchList('/api/v1/transactions/summary', 'GET', params)
      commit('SET_FIRST_STOCK', response.data.quantity_original)
      commit('SET_DISTRIBUTED_STOCK', response.data.quantity_distributed)
      commit('SET_REMAINING_STOCK', response.data.quantity_available)
      return response
    } catch (error) {
      return error.response
    }
  },
  async createRdtDistribution({ commit }, data) {
    try {
      const response = await doPostUpdate('/api/v1/transactions', 'POST', data)
      return response
    } catch (error) {
      return error.response
    }
  },
  async updateRdtDistribution({ commit }, data) {
    const idCase = await data.id
    try {
      const response = await doPostUpdate(`/api/v1/transactions/${idCase}`, 'PUT', data.data)
      return response
    } catch (error) {
      return error.response
    }
  },
  resetRdtDistributionForm({ commit }) {
    commit('RESET_RDT_DISTRIBUTION_FORM')
  },
  async getDistributionItem({ commit }, idDistribution) {
    try {
      const response = await doDetailDelete(`/api/v1/transactions`, 'GET', idDistribution)
      commit('SET_RDT_DISTRIBUTION_FORM', response.data)
      return response
    } catch (error) {
      return error.response
    }
  }
}
