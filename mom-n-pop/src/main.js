import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './Router'
import App from './App'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
