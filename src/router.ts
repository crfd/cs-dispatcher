import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@views/Index.vue'

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
    component: () => import('@views/Login.vue'),
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
      title: 'Component Library',
      requiresAuth: true,
      hidden: false,
      icon: HomeIcon
    }
  },
  {
    path: '/operations',
    name: 'operations',
    component: () => import('@views/Operations.vue'),
    meta: {
      title: 'Operations',
      requiresAuth: true,
      hidden: false,
      icon: RunnerIcon
    }
  },
  {
    path: '/operations/new',
    name: 'operation-new',
    component: () => import('@views/NewOperation.vue'),
    meta: {
      title: 'New Operation',
      requiresAuth: true,
      hidden: true,
      hideBar: true
    }
  },
  {
    path: '/operations/:id',
    name: 'operation-detail',
    component: () => import('@views/OperationDetail/Index.vue'),
    meta: {
      title: 'Overview',
      requiresAuth: true,
      hidden: true,
      back: 'operations',
      customNavbar: [
        'operation-detail',
        'operation-detail-space',
        'operation-detail-contact',
        'operation-detail-documents',
        'operation-detail-map'
      ]
    }
  },
  {
    path: '/operations/:id/space',
    name: 'operation-detail-space',
    component: () => import('@views/OperationDetail/Index.vue'),
    meta: {
      title: 'Space',
      requiresAuth: true,
      hidden: true,
      back: 'operations',
      customNavbar: [
        'operation-detail',
        'operation-detail-space',
        'operation-detail-contact',
        'operation-detail-documents',
        'operation-detail-map'
      ]
    }
  },
  {
    path: '/operations/:id/contact',
    name: 'operation-detail-contact',
    component: () => import('@views/OperationDetail/Index.vue'),
    meta: {
      title: 'Contact',
      requiresAuth: true,
      hidden: true,
      back: 'operations',
      customNavbar: [
        'operation-detail',
        'operation-detail-space',
        'operation-detail-contact',
        'operation-detail-documents',
        'operation-detail-map'
      ]
    }
  },
  {
    path: '/spaces',
    name: 'spaces',
    component: () => import('@views/Spaces.vue'),
    meta: {
      title: 'Spaces',
      requiresAuth: true,
      hidden: false,
      icon: CityIcon
    }
  },
  {
    path: '/spaces/new',
    name: 'space-new',
    component: () => import('@views/NewSpace.vue'),
    meta: {
      title: 'New Space',
      requiresAuth: true,
      hidden: true,
      hideBar: true
    }
  },
  {
    path: '/spaces/:id',
    name: 'space-detail',
    component: () => import('@views/SpaceDetail/Index.vue'),
    meta: {
      title: 'Overview',
      requiresAuth: true,
      hidden: true,
      back: 'spaces',
      customNavbar: ['space-detail']
    }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@views/Map.vue'),
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
    component: () => import('@views/Analytics.vue'),
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
    component: () => import('@views/Settings.vue'),
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
