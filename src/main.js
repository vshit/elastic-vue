import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BaseLayout from './Layouts/BaseLayout.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('layout', BaseLayout)

app.mount('#app')
