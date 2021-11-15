import Vue from 'vue'
import Router from 'vue-router'
import {Message} from "element-ui";
import {isLogin} from "../config/authentication";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// PC端
const PcIndex = () => import('@/pages/pcIndex')
const PcHome = () => import('@/pages/pc/pcHome')
const MainChatIndex = () => import('@/pages/pc/MainChat/index')
const pcLogin = () => import('@/pages/pc/login');
const pcSignup = () => import('@/pages/pc/signup');

// 移动端
const MobileIndex = () => import('@/pages/mobileIndex')
const MobileHome = () => import('@/pages/mobile/mobileHome')

Vue.use(Router)

// Avoid repetitive routing
const originalPush = Router.prototype.push;
Router.prototype.push = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/pc',
      name: 'pcIndex',
      component: PcIndex,
      children: [{
        path: 'home',
        name: 'pcHome',
        component: PcHome
      },{
        path: 'chat',
        name: 'MainChatIndex',
        component: MainChatIndex
      },{
        path: 'login',
        name: 'pcLogin',
        component: pcLogin
      },{
        path: 'signup',
        name: 'pcSignup',
        component: pcSignup
      }]
    },
    {
      path: '/mobile',
      name: 'mobileIndex',
      component: MobileIndex,
      children: [{
        path: 'home',
        name: 'mobileHome',
        component: MobileHome
      }]
    }
  ]
})

// TODO: Verify login status
// router.beforeEach((to, from, next) => {
//   // console.log(to);
//   // console.log(from);
//   // https://firebase.google.com/docs/auth/web/manage-users
//   if (window.name !== "" && !hasToken() && to.name !== 'pcLogin' && to.name !== 'pcHome' && to.name !== 'pcSignup') {
//     // Need to login: redirect to login page
//     Message.error("Please login first.")
//     setTimeout(() => {
//       next({
//         path:'/pc/login'
//       })
//     }, 2500);
//   }
//   next();
// });

export default router
