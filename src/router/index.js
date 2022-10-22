import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ListSubscription',
    component: () => import('../components/ListSubscription')

  },
  {
    path: '/create',
    name: 'CreateSubscription',
    component: () => import('../components/CreateSubscription')
  },

  {
    path: '/edit/:id',
    name: 'editSubscription',
    component: () => import('../components/EditSubscription')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
