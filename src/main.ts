import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './modules/useVeeValidations.js'

import { Router } from './router'

declare global {
  interface Window {
    L: any
  }
}

const app = createApp(App)

app.use(Router)

app.mount('#app')
