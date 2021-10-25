// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Element-UI: https://element.eleme.cn/#/zh-CN/component/select
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuesax)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
