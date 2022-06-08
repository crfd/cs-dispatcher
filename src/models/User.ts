import Contact from './Contact'

/**
 * A user can be one of the following:
 *
 * - The dispatcher
 * - The fireman
 * - The administation staff of a contractor
 * - A worker working for a contractor
 */
type User = {
  username: string
  createdAt: Date
  contact: Contact

  /**
   * Stores additional infromation about a person. Such as his position inside
   * the company or his obligations.
   */
  description: string
}

export default User
