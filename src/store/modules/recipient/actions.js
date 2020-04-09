import { fetchList } from '@/api'

export default {
  async getListRecipient({ commit }, params) {
    try {
      const response = await fetchList('/api/v1/recipients', 'GET', params)
      commit('SET_TOTAL_LIST_RECIPIENT', response.data.last_page)
      commit('SET_LIST_RECIPIENT', response.data.data)
      commit('SET_DETAIL_RECIPIENT', response.data.data)
      return response
    } catch (error) {
      return error.response
    }
  },
  async getSummaryRecipient({ commit }) {
    try {
      const response = await fetchList('/api/v1/recipients/summary', 'GET')
      commit('SET_SUMMARY_RECIPIENT', response.data)
      return response
    } catch (error) {
      return error.response
    }
  },
  async getWidgetRecipient({ commit }, params) {
    try {
      const response = await fetchList('api/v1/recipients/rdt-result-summary', 'GET', params)
      commit('SET_WIDGET_RECIPIENT', response.data)
    } catch (error) {
      return error.response
    }
  },
  async getListDetailRecipient({ commit }, params) {
    const response = await fetchList('api/v1/recipients/' + params[0], 'GET', params[1])
    commit('SET_LIST_DETAIL_RECIPIENT', response.data.data)
    commit('SET_TOTAL_LIST_DETAIL_RECIPIENT', response.data.last_page)
  }
}
