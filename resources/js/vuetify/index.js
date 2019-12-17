import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

Vue.component('AppHome', require('../components/AppHome.vue'));

const opts = {

}

export default new Vuetify(opts)
