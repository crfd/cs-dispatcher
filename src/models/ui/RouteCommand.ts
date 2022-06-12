import router from '@/router'
import { RouteRecordNormalized } from 'vue-router'
import Command from './Command'
import CRFDRouteMeta from './CRFDRouteMeta'

class RouteCommand extends Command {
  routeRecord: RouteRecordNormalized

  constructor(
    name: string,
    description: string,
    routeRecord: RouteRecordNormalized,
    icon: string | undefined = undefined
  ) {
    const tempIcon = icon ?? (routeRecord.meta as CRFDRouteMeta).icon
    super(name, description, tempIcon, () => {
      router.push({ name: routeRecord.name })
    })
    this.routeRecord = routeRecord
  }
}

export default RouteCommand
