import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

import isAuthenticated from '@lib/isAuthenticated'

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

export default authGuard
