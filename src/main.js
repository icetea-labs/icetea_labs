import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import VueHead from "vue-head";

createApp(App).use(router).use(VueHead).mount('#app')
