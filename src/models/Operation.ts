import CapturePoint from './CapturePoint'
import Contact from './Contact'
import EmergencyReport from './EmergencyReport'
import Reference from './Reference'
import UUID from './UUID'

/** An object that links */
type Capture = {
  device: Reference
  capturePoints: CapturePoint[]
}

/** A scheduled operation to enter a confined space. */
type Operation = {
  /** A unique identifier for the operation. */
  id: UUID

  /** The date and time the operation was entered into the system. */
  createdAt: Date

  /** The user who has created the operation. */
  createdByUser: Reference

  /** The id of the confined space that is being entered. */
  space: Reference

  /** The date and time the operation is scheduled to start. */
  scheduledAt: Date

  /** The date and time the operation was approved to take place. */
  approvedAt?: Date

  /** The dispatcher that approved the operation */
  approvedByUser?: Reference

  /** The time the operation started. */
  start?: Date

  /** The time the operation was completed. */
  end?: Date

  /** The persons entering the confined space. */
  entrants: Contact[]

  /** Any persons who were "hatch-watching" during the operation. */
  attendees: Contact[]

  /** A description of the work that is being performed. */
  description: string

  /** Describes the location of a lock out board. */
  lockOutBoardLocation?: string

  /** Additonal information that might be useful to the rescuer / the dispatcher. */
  rescueInformation?: string

  /** In case of an emergency additional information about the emergency can be stored. */
  emergency?: EmergencyReport

  /** Any documents documenting the operation. Such as entry permits, forms etc. */
  documents: Document[]

  /**
   * Contains an array of objects that list a number of capture points for a
   * given device id.
   */
  captures: Capture[]
}

export default Operation
