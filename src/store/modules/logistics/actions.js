import { fetchList } from '@/api'

export default {
  async getListAPD({ commit }) {
    try {
      const response = await fetchList('/api/v1/landing-page-registration/products', 'GET')
      commit('SET_LIST_APD', response.data.data)
      return response
    } catch (e) {
      return e
    }
  }
}
