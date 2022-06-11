import Contact from './Contact'
import Reference from './Reference'
import UUID from './UUID'

type Contractor = {
  /** A unique identifier for the contractor. */
  id: UUID

  /** The date at which this object got created. */
  createdAt: Date

  /** The person who created the contractor. */
  createdByUser: Reference

  /** The name of the contractor. */
  name: string

  /** A description of the contractor. What is his/her purpose? */
  description: string

  /** Any contacts associated with this contractor. */
  contacts: Contact[]

  /** An array of confined spaces listed under this contractor. */
  spaces: Reference[]

  /** An array of users that are associated with this contractor. */
  workers: Reference[]

  /**
   * Any documents that are associated with this contractor. Like the contract
   * between the fire department and the contractor.
   */
  documents: Document[]
}

export default Contractor
