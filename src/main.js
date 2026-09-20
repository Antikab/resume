import '@/assets/styles/main.css'
import '@/assets/styles/fonts.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import InlineSvg from 'vue-inline-svg'

const app = createApp(App)

app.component('inline-svg', InlineSvg)
app.mount('#app')
