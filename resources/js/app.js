require('./bootstrap');
window.Vue = require('vue');

import vuetify from './vuetify';
import App from './components/AppHome.vue';
import router from './router/router.js';

import md from 'marked'
window.md = md

import User from './Helpers/User'
window.User = User

window.EventBus = new Vue();

const app = new Vue({
    vuetify,
    render: h => h(App),
    el: '#app',
    router
});
