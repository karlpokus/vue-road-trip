import Vue from 'vue'
import router from './router'
import store from './store/store'
import app from './app'

// root?
new Vue({
  el: '#app',
  router: router,
  store: store,
  /* https://github.com/vuejs/vueify#configuring-options
  render: function (createElement) {
    return createElement(App)
  }*/
  template: '<app/>', // is this the template part of the app export?
  components: {
    app
  }
})
