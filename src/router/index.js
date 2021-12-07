import Vue from 'vue'
import Router from 'vue-router'

// PC
const PcIndex = () => import('@/pages/pcIndex')
const PcHome = () => import('@/pages/pc/pcHome')
const MainChatIndex = () => import('@/pages/pc/MainChat/index')
const pcLogin = () => import('@/pages/pc/login');
const pcSignup = () => import('@/pages/pc/signup');
const pcPassword = () => import('@/pages/pc/changePassword')


Vue.use(Router)

// Avoid repetitive routing
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/pc/home'
    },
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
      },{
        path:'changePassword',
        name:'pcChangePassword',
        component: pcPassword
      }]
    }
  ]
})

export default router
