import Contact from './Contact'
import Reference from './Reference'
import UUID from './UUID'

enum UserRole {
  /** Has additional privilidges to the User */
  Admin,

  /** Official of the fire department */
  User,

  /** Only has access to the worker application */
  Worker
}

/**
 * A user can be one of the following:
 *
 * - The dispatcher
 * - The fireman
 * - A worker working for a contractor
 * - The administation staff of a contractor
 */
type User = {
  /** The username is the email address of the user */
  username: UUID
  createdAt: Date
  createdByUser: Reference

  role: UserRole

  /** When no last login is set the user has never logged in. */
  lastLogin?: Date

  /** Contact information for the user. */
  contact: Contact

  /** Wether or not the users has been verified. */
  verified: boolean

  /**
   * Stores additional information about a user. Such as his position inside the
   * company or his obligations.
   */
  description?: string

  isDeleted: boolean
}

export default User
