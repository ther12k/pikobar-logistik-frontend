import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'
import toast from './modules/toast'
import region from './modules/region'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /index.js$/)
//
// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   console.log(value.default)
//   modules[moduleName] = value.default
//   return value.default
// }, {})

const store = new Vuex.Store({
  modules: {
    permission,
    region,
    toast,
    user
  }
})

export default store
