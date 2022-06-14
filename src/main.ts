import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { initializeSentry } from '@/config/sentry'

import App from '@/App.vue'
import router from '@/router'
import i18n from '@/locales'

import '@/config/firebase'

import '@styles/global.css'
import '@styles/tailwind.css'
import '@styles/fonts.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n)

initializeSentry(app)

app.mount('#app')
