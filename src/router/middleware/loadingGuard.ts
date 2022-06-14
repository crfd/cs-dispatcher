import { RouteLocationNormalized } from 'vue-router'

import { useUIStore } from '@/store/uiStore'

/** Starts the loading animation. */
const start = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  // This will prevent a page from showing the reload indicator when the page uses query parameters
  // for navigation.
  if (to.path == from.path) return
  useUIStore().setLoading(true)
}

/** Stops the loading animation. */
const stop = () => {
  useUIStore().setLoading(false)
}

export default { start, stop }
