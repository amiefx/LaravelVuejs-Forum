require('./bootstrap');
window.Vue = require('vue');

import vuetify from './vuetify';
import App from './components/AppHome.vue';
import router from './router/router.js';


import User from './Helpers/User'
window.User = User
console.log(User.id())

const app = new Vue({
    vuetify,
    render: h => h(App),
    el: '#app',
    router
});
