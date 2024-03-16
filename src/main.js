import Vue from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'
// import 'vuetify/dist/vuetify.min.css';
// import '@mdi/font/css/materialdesignicons.min.css';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
