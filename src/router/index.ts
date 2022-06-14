import { createRouter, createWebHistory } from 'vue-router'

import authGuard from './middleware/authGuard'
import loadingGuard from './middleware/loadingGuard'
import logoutHandler from './controller/logoutHandler'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Listen to when the user logged out and return to the start page
logoutHandler('home')

// Hast to be called first
router.beforeEach(loadingGuard.start)

// Middleware to check if the user is authenticated and allowed to access the route
router.beforeEach(authGuard)

// Has to run last
router.afterEach(loadingGuard.stop)

export default router
