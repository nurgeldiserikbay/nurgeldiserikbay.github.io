import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.scss'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

const pinia = createPinia()

createApp(App).use(pinia).use(router).use(i18n).mount('#app')
