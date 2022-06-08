import { RouteRecordNormalized } from 'vue-router'
import CRFDRouteMeta from './CRFDRouteMeta'
import router from '@/router'
import { v4 as uuidv4 } from 'uuid'

class Command {
  id = uuidv4()
  name: string
  description: string
  action: Function
  icon?: string

  constructor(
    name: string,
    description: string,
    icon: string | undefined = undefined,
    action: Function
  ) {
    this.name = name
    this.description = description
    this.icon = icon
    this.action = action
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
    super(name, description, tempIcon, () => {
      router.push({ name: routeRecord.name })
    })
    this.routeRecord = routeRecord
  }
}

export default Command

export { RouteCommand }
