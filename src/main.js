import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('vue-');

app.use(router)
app.use(createPinia(App))
app.mount('#app')
