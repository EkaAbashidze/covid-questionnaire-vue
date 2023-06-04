import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './assets/fonts/bpg_arial_2009.ttf';
import store from './store/index.js';
import router from './router.js';



const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
