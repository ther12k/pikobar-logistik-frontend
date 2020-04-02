import { fetchList, fetchPostUpdate } from '@/api'

export default {
  async getListDistribusiRdt({ commit }, params) {
    try {
      const response = await fetchList('/api/v1/transaction', 'GET', params)
      commit('SET_TOTAL_LIST_DISTRIBUSI_RDT', response.last_page)
      commit('SET_LIST_DISTRIBUSI_RDT', response.data)
      return response
    } catch (error) {
      return error.response
    }
  },
  async createDistribusiRdt({ commit }, data) {
    try {
      const response = await fetchPostUpdate('/api/rdt', 'POST', data)
      return response
    } catch (error) {
      return error.response
    }
  },
  async updateDistribusiRdt({ commit }, data) {
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
