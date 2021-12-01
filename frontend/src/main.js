// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from './config/axios'

// Element-UI: https://element.eleme.cn/#/zh-CN/component/select
import ElementUI from 'element-ui';
import '@/assets/element-#F79328/index.css';


import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuesax)

/**
 * @Description:
 * @author Tianyi(Lorena) Yan
 * @date 2021/11/2
*/

// Configuration for firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIu7zwyQGt-6WzdCq7ZamJoZwWRPCT2vY",
  authDomain: "botornot2bot-8e49c.firebaseapp.com",
  databaseURL: "https://botornot2bot-8e49c-default-rtdb.firebaseio.com",
  projectId: "botornot2bot-8e49c",
  storageBucket: "botornot2bot-8e49c.appspot.com",
  messagingSenderId: "340881665889",
  appId: "1:340881665889:web:cb8f93b34b3b67c0ae5f20",
  measurementId: "G-0S5MHJ2H1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.prototype.$axios = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

const auth = getAuth();
export {auth, app}
