import { collection } from 'firebase/firestore'
import { createGlobalState } from '@vueuse/core'

import * as models from '@/models'
import { db } from '@/config/firebase'
import { useCollection } from '@/lib/useCollection'

// ============
// PINIA STORES
// ============

import { useAuthStore } from '@/store/stores/authStore'
import { useMessageStore } from '@/store/stores/messageStore'
import { useSettingsStore } from '@/store/stores/settingsStore'
import { useUIStore } from '@/store/stores/uiStore'

export { useAuthStore, useMessageStore, useSettingsStore, useUIStore }

// ==============
// GLOBALE STATES
// ==============

/** Global state for all firestore users. */
export const useUsers = createGlobalState(() =>
  useCollection<models.User>(collection(db, 'users'))
)

/** Global state for all firestore operations. */
export const useOperations = createGlobalState(() =>
  useCollection<models.Operation>(collection(db, 'operations'))
)

/** Global state for all firestore confined spaces. */
export const useSpaces = createGlobalState(() =>
  useCollection<models.ConfinedSpace>(collection(db, 'spaces'))
)

/** Global state for all firestore contractors. */
export const useContractors = createGlobalState(() =>
  useCollection<models.Contractor>(collection(db, 'contractors'))
)

/** Global state for all firestore capture points. */
export const useCapturePoints = createGlobalState(() =>
  useCollection<models.CapturePoint>(collection(db, 'capturePoints'))
)

/** Global state for all firestore feedback messages. */
export const useFeedback = createGlobalState(() =>
  useCollection<models.Feedback>(collection(db, 'feedback'))
)
