import { createRouter, createWebHashHistory } from 'vue-router'
 
const routes = [
  {
    path: '/',
    component: require('@/views/main.vue').default,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/:catchAll(.*)',
    component: require('@/views/404.vue').default
  }
]
 
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
 
export default router