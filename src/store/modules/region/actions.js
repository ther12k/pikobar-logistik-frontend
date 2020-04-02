import { fetchList } from '@/api'

export default {
  async getListDistrictCity({ commit }) {
    try {
      const response = await fetchList('/api/v1/areas/cities', 'GET')
      commit('SET_DISTRICT_CITY', response.data)
      return response
    } catch (e) {
      return e
    }
  },
  async getDetailDistrict({ commit }, codeDistrict) {
    try {
      const response = await fetchList(`/api/v1/areas/cities?kabkota_kode=${codeDistrict}`, 'GET')
      return response
    } catch (e) {
      return e
    }
  },
  async getListSubDistrict({ commit }, codeDistrict) {
    try {
      const response = await fetchList(`/api/v1/areas/subdistricts?city_code=${codeDistrict}`, 'GET')
      return response
    } catch (e) {
      return e
    }
  },
  async getListVillage({ commit }, codeSubDistrict) {
    try {
      const response = await fetchList(`/api/v1/areas/villages?subdistrict_code=${codeSubDistrict}`, 'GET')
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
