import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@views/Home.vue'

import {
  Home as HomeIcon,
  Runner as RunnerIcon,
  City as CityIcon,
  Map as MapIcon,
  PieChart as PieChartIcon,
  Gear as GearIcon
} from './assets/icons'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@views/Login.vue'),
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
      icon: HomeIcon
    }
  },
  {
    path: '/operations',
    name: 'operations',
    component: () =>
      import(/* webpackChunkName: "login" */ './views/Operations.vue'),
    meta: {
      title: 'Operations',
      requiresAuth: true,
      hidden: false,
      icon: RunnerIcon
    }
  },
  {
    path: '/spaces',
    name: 'spaces',
    component: () =>
      import(/* webpackChunkName: "login" */ './views/Spaces.vue'),
    meta: {
      title: 'Spaces',
      requiresAuth: true,
      hidden: false,
      icon: CityIcon
    }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "login" */ './views/Map.vue'),
    meta: {
      title: 'Map',
      requiresAuth: true,
      hidden: false,
      icon: MapIcon
    }
  },
  {
    path: '/anlytics',
    name: 'analytics',
    component: () =>
      import(/* webpackChunkName: "login" */ './views/Analytics.vue'),
    meta: {
      title: 'Analytics',
      requiresAuth: true,
      hidden: false,
      icon: PieChartIcon
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: () =>
      import(/* webpackChunkName: "login" */ './views/Settings.vue'),
    meta: {
      title: 'Settings',
      requiresAuth: true,
      hidden: false,
      icon: GearIcon
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
