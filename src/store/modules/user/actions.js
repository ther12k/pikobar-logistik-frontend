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
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      fetchPostUpdate('/api/users/info', 'GET').then((response) => {
        const { role } = response.data
        console.log(role)
        const data = {
          roles: [role]
        }
        const { roles } = data
        console.log(roles)
        commit('SET_ROLES', roles)
        resolve(roles)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
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
