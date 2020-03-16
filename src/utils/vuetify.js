import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#27AE60'
      },
      dark: {
        primary: '#27AE60'
      }
    }
  }
}

export default new Vuetify(opts)
