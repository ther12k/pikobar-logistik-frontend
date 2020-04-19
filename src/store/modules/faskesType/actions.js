import { fetchList } from '@/api'

export default {
  async getListFaskesType({ commit }, params) {
    try {
      const response = await fetchList('/api/v1/master-faskes-type', 'GET', params)
      commit('SET_LIST_FASKES_TYPE', response.data)
      return response
    } catch (error) {
      return error.response
    }
  }
}
