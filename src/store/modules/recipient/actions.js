import { fetchList } from '@/api'

export default {
  async getListRecipient({ commit }, params) {
    try {
      const response = await fetchList('/api/v1/recipient', 'GET', params)
      commit('SET_TOTAL_LIST_RECIPIENT', response.last_page)
      commit('SET_LIST_RECIPIENT', response.data)
      return response
    } catch (error) {
      return error.response
    }
  },
  async getSummaryRecipient({ commit }) {
    try {
      const response = await fetchList('/api/v1/recipient/summary', 'GET')
      commit('SET_SUMMARY_RECIPIENT', response.data)
      return response
    } catch (error) {
      return error.response
    }
  }
}
