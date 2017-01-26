import VueRouter from 'vue-router'
import stuff from './components/stuff'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/stuff', component: stuff }
  ]
})

export default router