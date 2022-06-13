import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized
} from 'vue-router'

import Home from '@views/Index.vue'

import {
  Home as HomeIcon,
  Runner as RunnerIcon,
  City as CityIcon,
  Map as MapIcon,
  PieChart as PieChartIcon,
  Gear as GearIcon,
  SafetyHat as SafetyHatIcon
} from './assets/icons'
import { useUIStore } from './stores/uiStore'
import isAuthenticated from './lib/isAuthenticated'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@views/Login.vue'),
    meta: {
      title: 'Login',
      requiresAuth: false,
      hidden: true,
      hideBar: true,
      hideFromCommandPalette: true
    }
  },
  {
    path: '/reset',
    name: 'resetPassword',
    component: () => import('@views/ResetPassword.vue'),
    meta: {
      title: 'Password Reset',
      requiresAuth: false,
      hidden: true,
      hideBar: true,
      hideFromCommandPalette: true
    }
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Component Library',
      requiresAuth: false,
      hidden: false,
      icon: HomeIcon,
      hideFromCommandPalette: false
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
      icon: RunnerIcon,
      hideFromCommandPalette: false
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
    },
    hideFromCommandPalette: true
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
      ],
      hideFromCommandPalette: true
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
      ],
      hideFromCommandPalette: true
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
      ],
      hideFromCommandPalette: true
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
      icon: CityIcon,
      hideFromCommandPalette: false
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
      hideBar: true,
      hideFromCommandPalette: true
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
      customNavbar: ['space-detail'],
      hideFromCommandPalette: true
    }
  },
  {
    path: '/contractors',
    name: 'contractors',
    component: () => import('@views/Contractors.vue'),
    meta: {
      title: 'Contractors',
      requiresAuth: true,
      hidden: false,
      icon: SafetyHatIcon,
      hideFromCommandPalette: false
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
      icon: MapIcon,
      hideFromCommandPalette: false
    }
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: () => import('@views/Analytics.vue'),
    meta: {
      title: 'Analytics',
      requiresAuth: true,
      hidden: false,
      icon: PieChartIcon,
      hideFromCommandPalette: false
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
      icon: GearIcon,
      hideFromCommandPalette: false
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@views/Profile.vue'),
    meta: {
      title: 'Profile',
      requiresAuth: true,
      hidden: true,
      hideBar: true,
      icon: undefined,
      hideFromCommandPalette: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const setLoading = (loading: boolean) => {
  useUIStore().isLoading = loading
}

// Get notified when the user gets logged out and return to the start page
// this should not happen on initial load
let initialPageLoad = true
onAuthStateChanged(auth, user => {
  if (!user && !initialPageLoad) {
    router.push({ name: 'home' })
  }
  initialPageLoad = false
})

const authGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // console.log(`${from.name?.toString()} -> ${to.name?.toString()}`)

  if (to.meta.requiresAuth) {
    const authenticated = await isAuthenticated()
    // TODO: Persist route that was tried to be accessed
    authenticated ? next() : next({ name: 'login' })
  } else {
    next()
  }
}

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    // This will prevent a page from showing the reload indicator when the page uses query parameters
    // for navigation.
    if (to.path == from.path) return
    setLoading(true)
  }
)

router.beforeEach(authGuard)

router.afterEach(() => {
  setLoading(false)
})

export default router
