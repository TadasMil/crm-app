import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import UsersIndex from '../views/UsersIndex.vue'
import UserEdit from '../views/UserEdit.vue'
import UserNew from '../views/UserNew.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'UsersIndex',
    component: UsersIndex,
    meta: { pageName: 'Users' },
  },
  {
    path: '/new-user',
    name: 'UserNew',
    component: UserNew,
    meta: { pageName: 'Create New User' },
  },
  {
    path: '/edit-user/:id',
    name: 'UserEdit',
    component: UserEdit,
    meta: { pageName: 'Edit User' },
  },
]

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
})
