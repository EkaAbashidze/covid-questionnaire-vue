import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import StartPage from './pages/StartPage.vue';
import FirstPage from './pages/FirstPage.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage,
    },
    {
      path: '/identification',
      name: 'identification',
      component: FirstPage,
    }
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
