import { RouteMeta } from 'vue-router'

interface CRFDRouteMeta extends RouteMeta {
  title: string
  requiresAuth: boolean
  hidden: boolean
  icon: string
  back: string
  customNavbar: string[]
  hideFromCommandPalette: boolean
}

export default CRFDRouteMeta
