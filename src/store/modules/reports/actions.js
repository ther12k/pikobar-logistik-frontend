import { fetchList, fetchDetail, fetchPostUpdate } from '@/api'

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
  updateReportCase({ commit }, data) {
    const id_case = data.id
    delete data['id']
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchPostUpdate(`/api/cases/${id_case}`, 'PUT', data.data)
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  },
  detailReportCase({ commit }, id) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchDetail('/api/cases', 'GET', id)
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  },
  countReportCase({ commit }, params) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchList('/api/cases-summary', 'GET', params)
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  },
  listHistoryCase({ commit }, id) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchList(`/api/cases/${id}/history`, 'GET', id)
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  },
  createHistoryCase({ commit }, data) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchPostUpdate('/api/history_cases', 'POST', data)
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  },
  resetFormPasien({ commit }) {
    commit('RESET_FORM_PASIEN')
  },
  resetRiwayatFormPasien({ commit }) {
    commit('RESET_RIWAYAT_FORM_PASIEN')
  }
}
