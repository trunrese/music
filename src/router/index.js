import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Home from '../views/home.vue'
import Find from '../views/find.vue'
import Cloud from '../views/cloud.vue'
import Search from '../views/Search.vue'
import Searchdetail from '../views/Searchdetail.vue'
import Singdetail from '../views/Singdetail.vue'
import Singer from '../views/Singer.vue'
import Songfeilei from '../views/Songfeilei.vue'
import Songfeileidetail from '../views/Songfeileidetail.vue'
import Songsheetdetail from '../views/Songsheetdetail.vue'
import Paihangdetail from '../views/Paihangdetail.vue'








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
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/searchdetail',
    name: 'searchdetail',
    component: () => import('../views/Searchdetail.vue')
  },
  {
    path: '/singdetail',
    name: 'singdetail',
    component: () => import('../views/Singdetail.vue')
  },
  {
    path: '/singer',
    name: 'singer',
    component: () => import('../views/Singer.vue')
  },
  {
    path: '/songfeilei',
    name: 'songfeilei',
    component: () => import('../views/Songfeilei.vue')
  },
  {
    path: '/songfeileidetail',
    name: 'songfeileidetail',
    component: () => import('../views/Songfeileidetail.vue')
  },
  {
    path: '/songsheetdetail',
    name: 'songsheetdetail',
    component: () => import('../views/Songsheetdetail.vue')
  },
  {
    path: '/paihangdetail',
    name: 'paihangdetail',
    component: () => import('../views/Paihangdetail.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router