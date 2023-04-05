import { createApp } from 'vue'
import App from './App.vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import './assets/main.css'

createApp(App).use(mdiVue, {
    icons: mdijs
}).mount('#app')