import { createRouter, createWebHistory } from 'vue-router'
import People from '../views/People.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'people',
      component: People
    },
    {
      path: '/shows',
      name: 'Shows',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Shows.vue')
    }
  ]
})

export default router
