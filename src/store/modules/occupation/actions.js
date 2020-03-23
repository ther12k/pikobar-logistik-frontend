import { fetchList } from '@/api'

export default {
  async getListOccuption({ commit }) {
    try {
      const response = fetchList('/api/occupations', 'GET')
      commit('SET_LIST_OCCUPTION', response.data)
      return response
    } catch (e) {
      return e
    }
  }
}
