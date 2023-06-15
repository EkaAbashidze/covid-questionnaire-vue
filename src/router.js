import { createRouter, createWebHistory } from 'vue-router';


const StartPage = () => import('./pages/StartPage.vue');
const FirstPage = () => import('./pages/FirstPage.vue');
const SecondPage = () => import('./pages/SecondPage.vue');
const ThirdPage = () => import('./pages/ThirdPage.vue');
const FourthPage = () => import('./pages/FourthPage.vue');


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

export default router;