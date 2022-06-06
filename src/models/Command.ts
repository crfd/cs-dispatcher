import { RouteRecordNormalized } from 'vue-router'
import CRFDRouteMeta from './CRFDRouteMeta'
import { v4 as uuidv4 } from 'uuid'

class Command {
  id = uuidv4()
  name: string
  description: string
  icon?: string

  constructor(name: string, description: string, icon?: string) {
    this.name = name
    this.description = description
    this.icon = icon
  }
}

class RouteCommand extends Command {
  routeRecord: RouteRecordNormalized

  constructor(
    name: string,
    description: string,
    routeRecord: RouteRecordNormalized,
    icon: string | undefined = undefined
  ) {
    const tempIcon = icon ?? (routeRecord.meta as CRFDRouteMeta).icon
    super(name, description, tempIcon)
    this.routeRecord = routeRecord
  }
}

export default Command

export { RouteCommand }
