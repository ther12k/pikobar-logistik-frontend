import { fetchList, fetchPostUpdate, fetchDetail } from '@/api'

export default {
  async getListRDT({ commit }, params) {
    try {
      const response = await fetchList('/api/rdt', 'GET', params)
      commit('SET_TOTAL_LIST_RDT', response.data._meta.totalPages)
      commit('SET_LIST_RDT', response.data.rdt)
      return response
    } catch (error) {
      return error.response
    }
  },
  async createRDT({ commit }, data) {
    try {
      const response = await fetchPostUpdate('/api/rdt', 'POST', data)
      return response
    } catch (error) {
      return error.response
    }
  },
  async deleteRDT({ commit }, id) {
    try {
      const response = await fetchDetail('/api/rdt', 'DELETE', id)
      return response
    } catch (error) {
      return error.response
    }
  },
  async detailParticipant({ commit }, id) {
    try {
      const response = await fetchDetail('/api/rdt', 'GET', id)
      return response
    } catch (error) {
      return error.response
    }
  },
  async updateRDT({ commit }, data) {
    const id_case = await data.id
    await delete data['id']
    try {
      const response = await fetchPostUpdate(`/api/rdt/${id_case}`, 'PUT', data.data)
      return response
    } catch (error) {
      return error.response
    }
  },
  async resetListRDT({ commit }) {
    commit('RESET_LIST_RDT')
  }
}
