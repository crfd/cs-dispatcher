import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'

import Home from './views/Home.vue'

const User = {
  template: '<div>User</div>'
}

// import Home from './views/Home.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ './views/Login.vue'),
    meta: {
      title: 'Login',
      requiresAuth: false,
      hidden: true
    }
  },
  {
    path: '/',
    name: 'dashboard',
    component: Home,
    meta: {
      title: 'Dashboard',
      requiresAuth: true,
      hidden: false
    }
  },
  {
    path: '/operations',
    name: 'operations',
    component: User,
    meta: {
      title: 'Operations',
      requiresAuth: true,
      hidden: false
    }
  },
  {
    path: '/spaces',
    name: 'spaces',
    component: User,
    meta: {
      title: 'Spaces',
      requiresAuth: true,
      hidden: false
    }
  },
  {
    path: '/anlytics',
    name: 'analytics',
    component: User,
    meta: {
      title: 'Analytics',
      requiresAuth: true,
      hidden: false
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: User,
    meta: {
      title: 'Settings',
      requiresAuth: true,
      hidden: false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
