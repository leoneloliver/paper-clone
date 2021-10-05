import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Essay from '../views/Essay'
import NotFound from '../views/404'
import Dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/essay',
    name: 'Essay',
    component: Essay
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
