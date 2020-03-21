import { fetchList } from '@/api'

export default {
  getListOccuption({ commit }) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await fetchList('/api/occupations', 'GET')
        commit('SET_LIST_OCCUPTION', response.data)
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  }
}
