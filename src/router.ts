import { createRouter, createWebHashHistory } from 'vue-router'

import * as icons from './assets/icons'

import Home from './views/Home.vue'
import Operations from './views/Operations.vue'

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
      hidden: true,
      hideBar: true
    }
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home',
      requiresAuth: true,
      hidden: false,
      icon: icons.Home
    }
  },
  {
    path: '/operations',
    name: 'operations',
    component: Operations,
    meta: {
      title: 'Operations',
      requiresAuth: true,
      hidden: false,
      icon: icons.Runner
    }
  },
  {
    path: '/spaces',
    name: 'spaces',
    component: User,
    meta: {
      title: 'Spaces',
      requiresAuth: true,
      hidden: false,
      icon: icons.City
    }
  },
  {
    path: '/map',
    name: 'map',
    component: User,
    meta: {
      title: 'Map',
      requiresAuth: true,
      hidden: false,
      icon: icons.Map
    }
  },
  {
    path: '/anlytics',
    name: 'analytics',
    component: User,
    meta: {
      title: 'Analytics',
      requiresAuth: true,
      hidden: false,
      icon: icons.PieChart
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: User,
    meta: {
      title: 'Settings',
      requiresAuth: true,
      hidden: false,
      icon: icons.Gear
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
