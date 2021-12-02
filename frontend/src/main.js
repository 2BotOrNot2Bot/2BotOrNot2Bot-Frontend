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
import firebaseConfig from "./config/firebaseConfig";

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
