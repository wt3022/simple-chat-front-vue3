import { createApp } from 'vue'
import App from '@/App.vue'
import { piniaStore } from '@/stores'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/global.css'

loadFonts()

createApp(App).use(vuetify).use(piniaStore).mount('#app')
