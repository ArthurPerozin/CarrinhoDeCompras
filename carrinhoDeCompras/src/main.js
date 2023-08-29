import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes.js'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import store from "../src/components/store/index.js"

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    },
  })
  
const app = createApp(App)
app
.use(router)
.use(store)
.use(vuetify)
.mount('#app')
