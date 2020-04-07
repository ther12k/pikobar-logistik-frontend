import request from '@/utils/request'

export function fetchList(url, method, params) {
  return request({
    url: url,
    method: method,
    params: params
  })
}

export function doDetailDelete(url, method, id) {
  return request({
    url: `${url}/${id}`,
    method: method
  })
}

export function doPostUpdate(url, method, data) {
  return request({
    url: url,
    method: method,
    data
  })
}

export default {
  fetchList,
  doDetailDelete,
  doPostUpdate
}
