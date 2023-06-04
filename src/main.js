import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import StartPage from './pages/StartPage.vue';
import FirstPage from './pages/FirstPage.vue';
import SecondPage from './pages/SecondPage.vue';
import ThirdPage from './pages/ThirdPage.vue';
import FourthPage from './pages/FourthPage.vue';
import './assets/fonts/bpg_arial_2009.ttf';


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
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: SecondPage,
    },
    {
      path: '/vaccine',
      name: 'vaccine',
      component: ThirdPage,
    },
    {
      path: '/suggestions',
      name: 'suggestions',
      component: FourthPage,
    }
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
