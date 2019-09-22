/* eslint-disable prettier/prettier */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'
import i18n from './plugins/lang/i18n'
import mavonEditor from 'mavon-editor'
import './assets/css/base.less'
import 'mavon-editor/dist/css/index.css'
import './plugins/element.js'

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.prototype.$store = store;

Vue.use(mavonEditor)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
