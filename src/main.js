// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Vue2Dragula } from 'vue2-dragula'
import VmBackTop from 'vue-multiple-back-top'
import VueBreadcrumbs from 'vue2-breadcrumbs'
import VueMoment from 'vue-moment'
import * as VeeValidate from 'vee-validate'
import moment from 'moment'
import infiniteScroll from 'vue-infinite-scroll'
import FlagIcon from 'vue-flag-icon'
import VueCurrencyFilter from 'vue-currency-filter'
import * as VueGoogleMaps from 'vue2-google-maps'

moment.locale('id')

import vuetify from './plugins/vuetify'
Vue.config.performance = process.env.NODE_ENV === 'development'

import App from './App'
import store from './store'
import router from './router'

import './components' // include all components
import '@/styles' // include all css files
import './permission' // permission control
import '@/utils/vee-validate' // include all validate form
import i18n from './lang' // Internationalization
import './registerServiceWorker'

Vue.use(FlagIcon)
Vue.use(Vue2Dragula)
Vue.use(VueBreadcrumbs)
Vue.component(VmBackTop.name, VmBackTop)

Vue.config.productionTip = false

Vue.use(infiniteScroll)
Vue.use(VueMoment, {
  moment
})

Vue.use(VeeValidate, {
  i18n
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA7fLMZEL1CdQp5h04_QaphO-R6UE5M7Yw',
    libraries: 'AIzaSyA7fLMZEL1CdQp5h04_QaphO-R6UE5M7Yw' // necessary for places input
  }
})

Vue.use(VueCurrencyFilter, {
  symbol: '',
  thousandsSeparator: '.',
  fractionCount: 0,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App)
})
