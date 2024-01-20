import { createApp } from 'vue'
import './style.css'
import store from './store/index.js'
import App from './App.vue'
import router from './router';
import '@icon-park/vue-next/styles/index.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');