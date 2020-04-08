import { fetchList } from '@/api'

export default {
  async getListRecipientFaskes({ commit }, params) {
    try {
      const response = await fetchList('/api/v1/recipients-faskes', 'GET', params)
      commit('SET_TOTAL_LIST_RECIPIENT_FASKES', response.last_page)
      commit('SET_LIST_RECIPIENT_FASKES', response.data)
      return response
    } catch (error) {
      return error.response
    }
  },
  async getSummaryRecipientFaskes({ commit }) {
    try {
      const response = await fetchList('/api/v1/recipients-faskes/summary', 'GET')
      commit('SET_SUMMARY_RECIPIENT_FASKES', response.data)
      return response
    } catch (error) {
      return error.response
    }
  }
}
