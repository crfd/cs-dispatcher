import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/config/firebase'
import initialLoad from '@/lib/initialLoad'
import router from '@/router'

/** Keeps track of whether this is the first time the function is called. */
let isInitialPageLoad = true

/**
 * The logout handler listens to any auth state changes and redirects to the
 * predefined logout page if the user is logged out.
 *
 * @param logoutPageName The name of the page that should be visited after
 *   logout (default: home)
 */
async function logoutHandler(logoutPageName: string = 'home') {
  onAuthStateChanged(auth, async user => {
    // At the initial page load there most likely is no user logged in as this
    // Value gets populated later on in the applications lifecycle.
    if (!user && !isInitialPageLoad) {
      router.push({ name: logoutPageName })
    }

    // A function that will be called once before any route will be loaded
    await initialLoad()

    isInitialPageLoad = false
  })
}

export default logoutHandler
