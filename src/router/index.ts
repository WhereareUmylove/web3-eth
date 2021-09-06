import { getStorage } from '@/utils/storage'
import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'active'
  },
  {
    path: '/active',
    component: Main,
    children: [{
      path: '',
      name: 'active',
      component: () => import('@/views/active/index.vue')
    }]
  },
  {
    path: '/pendingTransactions',
    component: Main,
    children: [{
      path: '',
      name: 'pendingTransactions',
      component: () => import('@/views/pendingTransactions/index.vue')
    }]
  },
  {
    path: '/banlance',
    component: Main,
    children: [{
      path: '',
      name: 'banlance',
      component: () => import('@/views/banlance/index.vue')
    }]
  },
  {
    path: '/getTransaction',
    component: Main,
    children: [{
      path: '',
      name: 'getTransaction',
      component: () => import('@/views/getTransaction/index.vue')
    }]
  },
]

const router = new VueRouter({
  scrollBehavior: () => ({
    x: 0,
    y: 0
  }),
  routes
})
const whiteList = ['/login']
// router.beforeEach((to, from, next) => {
//   if (getStorage()) {
//     if (to.path === '/login') {
//       next({ path: '/' })
//     } else {
//       next()
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next(`/login`)
//     }
//   }
// })
export default router

