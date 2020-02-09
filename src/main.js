import Vue from 'vue';
import i18n from '@/libs/i18n';

import App from './App';
import router from './router';
import store from './store';

import '@/libs/index';
import '@/assets/styles/common.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
