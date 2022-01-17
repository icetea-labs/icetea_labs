import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    path: '/new/:id',
    name: 'New',
    component: () => import(/* webpackChunkName: "about" */ '../views/New.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
