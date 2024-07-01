import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import mitt from 'mitt'
import App from './App.vue'
// import router from './router'


import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';



const app = createApp(App)
const emitter = mitt();

app.config.globalProperties.emitter = emitter;
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(createPinia())

app.mount('#app')
