import axios from 'axios'
import store from '@/store'
import { ResponseRequest } from '@/utils/constantVariable'
import { getToken } from '@/utils/cookies'

const isSecure = String(process.env.VUE_APP_SECURE) === 'true'
const method = isSecure ? 'https' : 'http'
let url
if (process.env.VUE_APP_PORT !== undefined && process.env.VUE_APP_PORT.length > 0) {
  url = `${method}://${process.env.VUE_APP_URL}:${process.env.VUE_APP_PORT}`
} else {
  url = `${method}://${process.env.VUE_APP_URL}`
}

// create an axios instance
const service = axios.create({
  baseURL: url, // api base_url
  withCredentials: false, // cookies
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters['user/token']) {
      // Set Bearer Token
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */
  response => {
    const res = response.data

    return res
  },
  async(error) => {
    const status = await error.response.status
    switch (status) {
      case ResponseRequest.NOTFOUND:
        store.dispatch('toast/errorToast', error.response.data.message)
        break
      case ResponseRequest.SERVERERROR:
        store.dispatch('toast/errorToast', error.response.data.message)
        break
      case ResponseRequest.UNAUTHORIZED:
        store.dispatch('toast/errorToast', error.response.data.message)
        break
      case ResponseRequest.UNPROCESSABLE:
        store.dispatch('toast/errorToast', error.response.data.message)
        break
      default:
        store.dispatch('toast/errorToast', error.message)
    }
    return Promise.reject(error)
  }
)

export default service
