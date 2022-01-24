import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue';
import News from '../views/News.vue';
import New from '../views/New.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/new/:id',
    name: 'New',
    component: New
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
});

export default router;
