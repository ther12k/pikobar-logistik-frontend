export const ResponseRequest = {
  TIMEOUT: 'ECONNABORTED',
  NETWORKERROR: 'Network Error',
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  UNPROCESSABLE: 422,
  SERVERERROR: 500
}

export function baseUrl() {
  let url = `${window.location.hostname}`
  if (window.location.port.length > 0) {
    url += `:${window.location.port}`
  }
  return url
}

export const optionGejala = [
  {
    value: 'Suhu tubuh >37,5',
    text: 'Suhu tubuh >37,5'
  },
  {
    value: 'Batuk',
    text: 'Batuk'
  },
  {
    value: 'Flu',
    text: 'Flu'
  },
  {
    value: 'Demam',
    text: 'Demam'
  },
  {
    value: 'Sakit tenggorokan',
    text: 'Sakit tenggorokan'
  },
  {
    value: 'Sakit kepala',
    text: 'Sakit kepala'
  },
  {
    value: 'Lainnya',
    text: 'Lainnya'
  }
]
