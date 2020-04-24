import { fetchList } from '@/api'

export default {
  async getMasterFaskes({ commit }, params) {
    try {
      const response = await fetchList('/api/v1/master-faskes', 'GET', params)
      commit('SET_MASTER_FASKES', response.data.data)
      commit('SET_TOTAL_MASTER_FASKES', response.data.last_page)
    } catch (e) {
      return e
    }
  }
}
