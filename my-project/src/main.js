// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import router from './router'
import { routes } from './routes'
import { BootstrapVue } from 'bootstrap-vue'
import store from './store'
import VueResource from 'vue-resource'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//defined as global component



// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)



const router = new VueRouter({
  mode: 'history',
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
