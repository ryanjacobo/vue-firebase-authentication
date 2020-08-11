import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import firebase from 'firebase/app';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAI-PpReuzq2sUIz8SCe4wGcwzERYRQX9k",
  authDomain: "vue-authentication-b0da7.firebaseapp.com",
  databaseURL: "https://vue-authentication-b0da7.firebaseio.com",
  projectId: "vue-authentication-b0da7",
  storageBucket: "vue-authentication-b0da7.appspot.com",
  messagingSenderId: "918699269464",
  appId: "1:918699269464:web:abd2c7b09f7e831dbb992d",
  measurementId: "G-P8VTY51J8M"
};

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
