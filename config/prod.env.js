'use strict'

module.exports = (env) => {
  NODE_ENV ='"production"',
  VUE_APP_VERSION = '"0.0.1"',
  VUE_APP_SECURE = true,
  VUE_APP_URL = env.VUE_APP_URL,
  VUE_APP_PORT = env.VUE_APP_PORT
}
