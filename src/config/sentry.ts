import * as Sentry from '@sentry/vue'
import { Vue } from '@sentry/vue/types/types'
import { BrowserTracing } from '@sentry/tracing'

import router from '@/router'

export function initializeSentry(app: Vue | Vue[] | undefined) {
  Sentry.init({
    app,
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: [
          'localhost',
          'https://cs-dispatcher.netlify.app/',
          /^\//
        ]
      })
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0, // 0.2

    /**
     * TrackComponents (defaults to false) - Decides whether to track components
     * by hooking into its lifecycle methods. Can be set to either boolean, to
     * enable/disable tracking for all of them, or to an array of specific
     * component names (case-sensitive).
     */
    trackComponents: true
  })
}
