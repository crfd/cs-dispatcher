import { db } from '@/config/firebase'
import { useCollection } from '@/lib/useCollection'
import * as models from '@/models'
import { createGlobalState } from '@vueuse/core'
import { collection } from 'firebase/firestore'

export const useUsers = createGlobalState(() =>
  useCollection<models.User>(collection(db, 'users'))
)

export const useOperations = createGlobalState(() =>
  useCollection<models.Operation>(collection(db, 'operations'))
)

export const useSpaces = createGlobalState(() =>
  useCollection<models.ConfinedSpace>(collection(db, 'spaces'))
)

export const useContractors = createGlobalState(() =>
  useCollection<models.Contractor>(collection(db, 'contractors'))
)

export const useCapturePoints = createGlobalState(() =>
  useCollection<models.CapturePoint>(collection(db, 'capturePoints'))
)

export const useFeedback = createGlobalState(() =>
  useCollection<models.Feedback>(collection(db, 'feedback'))
)
