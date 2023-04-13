import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark'
    }
})
createApp(App).use(vuetify, { iconfont: 'mdi' }).mount('#app')