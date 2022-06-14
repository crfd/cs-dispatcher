import { useUIStore } from '@/stores/uiStore'
import { RouteLocationNormalized } from 'vue-router'

const start = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  // This will prevent a page from showing the reload indicator when the page uses query parameters
  // for navigation.
  if (to.path == from.path) return
  useUIStore().setLoading(true)
}

const stop = () => {
  useUIStore().setLoading(false)
}

export default { start, stop }
