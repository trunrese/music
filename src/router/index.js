import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Home from '../views/home.vue'
import Find from '../views/find.vue'
import Cloud from '../views/cloud.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/find',
    name: 'find',
    component: () => import('../views/find.vue')
  },
  {
    path: '/cloud',
    name: 'cloud',
    component: () => import('../views/cloud.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router