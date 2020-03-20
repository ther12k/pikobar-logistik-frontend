import { fetchList } from '@/api'

export default {
  getListDistrictCity({ commit }) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchList('/api/areas/district-city', 'GET')
        commit('SET_DISTRICT_CITY', response.data)
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  },
  getDetailDistrict({ commit }, codeDistrict) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchList(`/api/areas/district-city?kota_kode=${codeDistrict}`, 'GET')
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  },
  getListSubDistrict({ commit }, codeDistrict) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchList(`/api/areas/sub-district/${codeDistrict}`, 'GET')
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  },
  getListVillage({ commit }, codeSubDistrict) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchList(`/api/areas/village/${codeSubDistrict}`, 'GET')
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  },
  getListHospotal({ commit }) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchList('/api/areas/hospital', 'GET')
        commit('SET_HOSPITAL_CITY', response.data)
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  }
}
