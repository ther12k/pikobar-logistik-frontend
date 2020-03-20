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
    value: 'Suhu tubuh > 38,5',
    text: 'Suhu tubuh > 38,5'
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
    value: 'Sakit Tenggorokan',
    text: 'Sakit Tenggorokan'
  },
  {
    value: 'Sakit Kepala',
    text: 'Sakit Kepala'
  },
  {
    value: 'Sesak Napas',
    text: 'Sesak Napas'
  },
  {
    value: 'Menggigil',
    text: 'Menggigil'
  },
  {
    value: 'Lemah (malaise)',
    text: 'Lemah (malaise)'
  },
  {
    value: 'Nyeri Otot',
    text: 'Nyeri Otot'
  },
  {
    value: 'Mual atau muntah',
    text: 'Mual atau muntah'
  },
  {
    value: 'Nyeri Abdomen',
    text: 'Nyeri Abdomen'
  },
  {
    value: 'Diare',
    text: 'Diare'
  },
  {
    value: 'Lainnya',
    text: 'Lainnya'
  }
]
