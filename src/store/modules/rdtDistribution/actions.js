import { fetchList, fetchPostUpdate } from '@/api'

export default {
  async getListRdtDistribution({ commit }, params) {
    try {
      const response = await fetchList('/api/v1/transaction', 'GET', params)
      commit('SET_TOTAL_LIST_RDT_DISTRIBUTION', response.last_page)
      commit('SET_LIST_RDT_DISTRIBUTION', response.data)
      return response
    } catch (error) {
      return error.response
    }
  },
  async createRdtDistribution({ commit }, data) {
    try {
      const response = await fetchPostUpdate('/api/rdt', 'POST', data)
      return response
    } catch (error) {
      return error.response
    }
  },
  async updateRdtDistribution({ commit }, data) {
    const id_case = await data.id
    await delete data['id']
    try {
      const response = await fetchPostUpdate(`/api/rdt/${id_case}`, 'PUT', data.data)
      return response
    } catch (error) {
      return error.response
    }
  }
}
