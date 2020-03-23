import { fetchList } from '@/api'

export default {
  async getListDistrictCity({ commit }) {
    try {
      const response = await fetchList('/api/areas/district-city', 'GET')
      commit('SET_DISTRICT_CITY', response.data)
      return response
    } catch (e) {
      return e
    }
  },
  async getDetailDistrict({ commit }, codeDistrict) {
    try {
      const response = await fetchList(`/api/areas/district-city?kota_kode=${codeDistrict}`, 'GET')
      return response
    } catch (e) {
      return e
    }
  },
  async getListSubDistrict({ commit }, codeDistrict) {
    try {
      const response = await fetchList(`/api/areas/sub-district/${codeDistrict}`, 'GET')
      return response
    } catch (e) {
      return e
    }
  },
  async getListVillage({ commit }, codeSubDistrict) {
    try {
      const response = await fetchList(`/api/areas/village/${codeSubDistrict}`, 'GET')
      return response
    } catch (e) {
      return e
    }
  },
  async getListHospital({ commit }) {
    try {
      const response = await fetchList('/api/areas/hospital', 'GET')
      commit('SET_HOSPITAL_CITY', response.data)
      return response
    } catch (e) {
      return e
    }
  }
}
