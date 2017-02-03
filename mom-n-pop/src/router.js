import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import items from './components/items'
import item from './components/item'
import cart from './components/cart'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path:'/items', component:items},
    {path:'/item/:id', component:item},
    {path:'/cart', component:cart}
  ]
})

export default router