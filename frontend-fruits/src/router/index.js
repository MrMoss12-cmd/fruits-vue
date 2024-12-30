import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  { 
    path: '/',
    name: 'HomeView', 
    component: HomeView, 
  },
  { 
    path: '/service/:name', 
    name: 'ServiceView', 
    component: () => import('@/views/ServiceView.vue'),
    props: (route) => ({ serviceName: route.params.name }), 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
