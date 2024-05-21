import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: import('../views/HomeView.vue')
  },
  {
    path: '/portfolio',
    component: () => import('../views/PortfolioView.vue')
  },
  {
    path: '/service',
    component: () => import('../views/ServiceView.vue')
  },
  {
    path: '/blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/contact',
    component: () => import('../views/ContactView.vue')
  },
  { path: '/:catchAll(.*)', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
  routes
})

export default router
