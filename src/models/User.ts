import Contact from './Contact'
import { FirebaseMetaObject } from './FirebaseObject'

enum UserRole {
  /** Has additional privilidges to the User */
  Admin = 0,

  /** Official of the fire department */
  User = 1,

  /** Only has access to the worker application */
  Worker = 2
}

/**
 * A user can be one of the following:
 *
 * - The dispatcher
 * - The fireman
 * - A worker working for a contractor
 * - The administation staff of a contractor
 */
interface User extends FirebaseMetaObject {
  /** The user id the user is associated with */
  uid: string

  /** The email address with which the user logs in */
  email: string

  /** The role assigned to the user. The role sets certain security rules. */
  role: UserRole

  /** When no last login is set the user has never logged in. */
  lastLogin?: Date

  /** Contact information for the user. */
  contact: Contact

  /**
   * Stores additional information about a user. Such as his position inside the
   * company or his obligations.
   */
  description?: string

  /** The date at which the user has been marked as deleted. */
  isDeleted?: Date
}

export default User
