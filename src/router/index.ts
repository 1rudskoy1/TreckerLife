import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Habits from '../views/habits.vue'
import Account from '../views/account.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Habits
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
