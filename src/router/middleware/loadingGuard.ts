import { RouteLocationNormalized } from 'vue-router'

import { useUIStore } from '@/store'

/**
 * This will store all paths that have been loaded in the current session and
 * don't need time to be asyncronously loaded - therefore not shown a loading indicator.
 */
var visitiedRoutes: string[] = []

/** Starts the loading animation. */
const start = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  // This will prevent a page from showing the reload indicator when the page uses query parameters
  // for navigation.
  if (to.path == from.path) return

  // The loading indicator will not be shown when the page has been loaded before
  // (in the current session).
  if (visitiedRoutes.includes(to.path)) return

  // Store the visited route name in the current session.
  visitiedRoutes.push(to.path)

  useUIStore().setLoading(true)
}

/** Stops the loading animation. */
const stop = () => {
  useUIStore().setLoading(false)
}

export default { start, stop }
