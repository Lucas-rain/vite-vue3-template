const routes = [
  {
    path: '/',
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/home',
    component: () => import('@/pages/home.vue'),
  },
];
export default routes;
