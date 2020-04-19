import { fetchList, doPostUpdate } from '@/api'

export default {
  async getListAPD({ commit }) {
    try {
      const response = await fetchList('/api/v1/landing-page-registration/products', 'GET')
      commit('SET_LIST_APD', response.data.data)
      return response
    } catch (e) {
      return e
    }
  },
  async getListApdUnit({ commit }, idAlkes) {
    try {
      const response = await fetchList(`/api/v1/landing-page-registration/product-unit/${idAlkes}`, 'GET')
      commit('SET_LIST_APD_UNIT', response)
      return response
    } catch (e) {
      return e
    }
  },
  async getListInstanceType({ commit }) {
    try {
      const response = await fetchList('/api/v1/master-faskes-type', 'GET')
      commit('SET_LIST_INSTANCE_TYPE', response.data)
      return response
    } catch (e) {
      return e
    }
  },
  async getListInstanceName({ commit }, param) {
    try {
      const response = await fetchList('/api/v1/master-faskes', 'GET', param)
      commit('SET_LIST_INSTANCE_TYPE', response.data)
      return response
    } catch (e) {
      return e
    }
  },
  async postApplicantForm({ commit }, params) {
    try {
      const response = await doPostUpdate('/api/v1/logistic-request', 'POST', params)
      console.log(response)
      return response
    } catch (e) {
      return e
    }
  }
}
