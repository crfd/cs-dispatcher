import Reference from './Reference'
import UUID from './UUID'

type Device = {
  id: UUID

  /** The user the device is associated with. */
  user: Reference
}

export default Device
