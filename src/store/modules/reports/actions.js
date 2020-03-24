import { fetchList, fetchDetail, fetchPostUpdate } from '@/api'

export default {
  async listReportCase({ commit }, params) {
    const response = await fetchList('/api/cases', 'GET', params)
    commit('SET_TOTAL_LIST_PASIEN', response.data._meta.totalPages)
    commit('SET_LIST_PASIEN', response.data.cases)
    return response
  },
  async createReportCase({ commit }, data) {
    try {
      const response = await fetchPostUpdate('/api/cases', 'POST', data)
      return response
    } catch (e) {
      return e
    }
  },
  async updateReportCase({ commit }, data) {
    const id_case = await data.id
    await delete data['id']
    try {
      const response = await fetchPostUpdate(`/api/cases/${id_case}`, 'PUT', data.data)
      return response
    } catch (e) {
      return e
    }
  },
  async detailReportCase({ commit }, id) {
    try {
      const response = await fetchDetail('/api/cases', 'GET', id)
      return response
    } catch (e) {
      return e
    }
  },
  async deleteReportCase({ commit }, id) {
    try {
      const response = await fetchDetail('/api/cases', 'DELETE', id)
      return response
    } catch (e) {
      return e
    }
  },
  async detailHistoryCase({ commit }, id) {
    try {
      const response = await fetchList(`/api/cases/${id}/last-history`, 'GET')
      return response.data[0]
    } catch (e) {
      return e
    }
  },
  async countReportCase({ commit }, params) {
    try {
      const response = await fetchList('/api/cases-summary', 'GET', params)
      return response
    } catch (e) {
      return e
    }
  },
  async listHistoryCase({ commit }, id) {
    try {
      const response = await fetchList(`/api/cases/${id}/history`, 'GET')
      return response
    } catch (e) {
      return e
    }
  },
  async createHistoryCase({ commit }, data) {
    try {
      const response = await fetchPostUpdate('/api/history_cases', 'POST', data)
      return response
    } catch (e) {
      return e
    }
  },
  async resetFormPasien({ commit }) {
    commit('RESET_FORM_PASIEN')
  },
  async resetRiwayatFormPasien({ commit }) {
    commit('RESET_RIWAYAT_FORM_PASIEN')
  }
}
