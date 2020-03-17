import { fetchList, fetchPostUpdate } from '@/api'

export default {
  listReportCase({ commit }, params) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchList('/api/cases', 'GET', params)
        commit('SET_TOTAL_LIST_PASIEN', response.data._meta.totalPages)
        commit('SET_LIST_PASIEN', response.data.cases)
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  },
  createReportCase({ commit }, data) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchPostUpdate('/api/cases', 'POST', data)
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  },
  resetFormPasien({ commit }) {
    commit('RESET_FORM_PASIEN')
  }
}
