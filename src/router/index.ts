import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import UsersIndex from '../views/UsersIndex.vue'
import UsersNew from '../views/UsersNew.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'UsersIndex',
    component: UsersIndex,
    meta: { pageName: 'Users' },
  },
  {
    path: '/new-user',
    name: 'UsersNew',
    component: UsersNew,
    meta: { pageName: 'New User' },
  },
]

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
})
