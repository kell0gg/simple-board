import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
  },
  {
    path: '/board',
    name: 'BoardPage',
    component: () => import('@/views/BoardPage.vue'),
  },
  {
    path: '/post/:postId',
    name: 'PostViewPage',
    component: () => import('@/views/PostViewPage.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
