import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './assets/fonts/bpg_arial_2009.ttf';
import store from './store/index.js';
import router from './router.js';

import { Field, Form, ErrorMessage, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';

configure({
    generateMessage: context => {
        const messages = {
            required: `The ${context.field} field is required.`,
            email: `The ${context.field} field must be a valid email.`,
        };

        const message = messages[context.rule.name] || `The ${context.field} field is invalid.`;
        return message;
    },
});

const app = createApp(App);

app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);


app.use(router);
app.use(store);

app.mount('#app');
