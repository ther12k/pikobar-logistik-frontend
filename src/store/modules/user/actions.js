import { fetchPostUpdate } from '@/api'
import { setToken, removeToken } from '@/utils/cookies'
import { resetRouter } from '@/router'

export default {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      fetchPostUpdate('/api/login', 'POST', userInfo).then((response) => {
        const { token } = response.data
        commit('SET_TOKEN', token)
        setToken(token)
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      fetchPostUpdate('/api/users/info', 'GET').then((response) => {
        const { role, fullname, code_district_city } = response.data
        const data = {
          roles: [role]
        }
        const { roles } = data
        commit('SET_ROLES', roles)
        commit('SET_DISTRICT', code_district_city)
        commit('SET_FULLNAME', fullname)
        resolve(roles)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  async changePasswordUser({ commit }, data) {
    try {
      const response = await fetchPostUpdate('/api/users/change-password', 'PUT', data)
      return response
    } catch (e) {
      return e
    }
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      commit('SET_DISTRICT', [])
      removeToken()
      resetRouter()

      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  }
}
