import { auth } from '@/config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

/**
 * Is required by the waitForAuth function. It will only be true until the
 * current login state is known.
 */
let isPageLoad = true

/**
 * It's a function to check if the user is authenticated. It will wait until the
 * initial login state is known.
 */
function isAuthenticated(): Promise<boolean> {
  return new Promise(resolve => {
    if (isPageLoad) {
      onAuthStateChanged(auth, user => {
        isPageLoad = false
        resolve(!!user)
      })
    } else {
      resolve(!!auth.currentUser)
    }
  })
}

export default isAuthenticated
