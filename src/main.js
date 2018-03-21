// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

import VueI18n from 'vue-i18n';
import Vuelidate from 'vuelidate';

import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import App from './App';
import router from './router';
import translation from './translation';

Vue.use(VueFire);
Vue.use(Buefy);
Vue.use(VueI18n);
Vue.use(Vuelidate);

firebase.initializeApp({
  projectId: 'ftiness-9e512',
  databaseURL: 'https://ftiness-9e512.firebaseio.com',
});

export const db = firebase.firestore();

Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'de',
  messages: translation
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n
});
