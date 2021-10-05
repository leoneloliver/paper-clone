import Vue from 'vue'
import VueRouter from 'vue-router'
import Chat from '../views/Chat.vue'
import Essay from '../views/Essay'
import NotFound from '../views/404'
import Dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/essay',
    name: 'Essay',
    component: Essay
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
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
