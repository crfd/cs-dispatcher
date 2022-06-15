// Import Icons
import {
  Home as HomeIcon,
  Runner as RunnerIcon,
  City as CityIcon,
  Map as MapIcon,
  PieChart as PieChartIcon,
  Gear as GearIcon,
  SafetyHat as SafetyHatIcon
} from '@icons'

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Dashboard/ComponentLibrary.vue'),
    meta: {
      title: 'Component Library',
      requiresAuth: false,
      hidden: false,
      icon: HomeIcon,
      hideFromCommandPalette: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/User/Login.vue'),
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
    component: () => import('@/pages/User/ResetPassword.vue'),
    meta: {
      title: 'Password Reset',
      requiresAuth: false,
      hidden: true,
      hideBar: true,
      hideFromCommandPalette: true
    }
  },
  {
    path: '/operations',
    name: 'operations',
    component: () => import('@/pages/Operations/Operations.vue'),
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
    component: () => import('@/pages/Operations/NewOperation.vue'),
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
    component: () => import('@/pages/Operations/OperationDetail.vue'),
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
    component: () => import('@/pages/Operations/OperationDetail.vue'),
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
    component: () => import('@/pages/Operations/OperationDetail.vue'),
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
    component: () => import('@/pages/Spaces/Spaces.vue'),
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
    component: () => import('@/pages/Spaces/NewSpace.vue'),
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
    component: () => import('@/pages/Spaces/SpaceDetail.vue'),
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
    component: () => import('@/pages/Contractors/Contractors.vue'),
    meta: {
      title: 'Contractors',
      requiresAuth: true,
      hidden: false,
      icon: SafetyHatIcon,
      hideFromCommandPalette: false
    }
  },
  {
    path: '/contractors/new',
    name: 'contractor-new',
    component: () => import('@/pages/Contractors/NewContractor.vue'),
    meta: {
      title: 'New Contractor',
      requiresAuth: true,
      hidden: true,
      hideBar: true,
      hideFromCommandPalette: true
    }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/pages/Map/Map.vue'),
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
    component: () => import('@/pages/Analytics/Analytics.vue'),
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
    component: () => import('@/pages/Settings/Settings.vue'),
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
    component: () => import('@/pages/User/Profile.vue'),
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
