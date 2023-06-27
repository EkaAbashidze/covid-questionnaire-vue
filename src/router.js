import { createRouter, createWebHistory } from 'vue-router';


const StartPage = () => import('./pages/StartPage.vue');
const Identification = () => import('./pages/Identification.vue');
const Questionnaire = () => import('./pages/Questionnaire.vue');
const Vaccine = () => import('./pages/Vaccine.vue');
const Suggestions = () => import('./pages/Suggestions.vue');
const ThankYou = () => import('./pages/ThankYou.vue');



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
      component: Identification,
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire,
    },
    {
      path: '/vaccine',
      name: 'vaccine',
      component: Vaccine,
    },
    {
      path: '/suggestions',
      name: 'suggestions',
      component: Suggestions,
    },
    {
      path: '/thankyou',
      name: 'thankyou',
      component: ThankYou,
    }
  ]
});

export default router;