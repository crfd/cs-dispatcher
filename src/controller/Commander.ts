import router from '@/router'
import { Command, RouteCommand } from '@models/ui'
import CRFDRouteMeta from '@/models/ui/CRFDRouteMeta'
import cleanArray from '@/lib/cleanArray'

function getRouteCommands(): RouteCommand[] {
  return cleanArray(
    router.getRoutes().map(route => {
      const meta = route.meta as CRFDRouteMeta
      if (meta.hideFromCommandPalette === true) return undefined
      return new RouteCommand(meta.title, '', route)
    })
  )
}

class Commander {
  static all(): Command[] {
    return [...getRouteCommands()]
  }

  static search(name: string): Command[] {
    return this.all().filter(command => {
      return command.name.toLowerCase().includes(name.toLowerCase())
    })
  }
}

export default Commander
