import { DocumentReference } from 'firebase/firestore'

export type FirebaseObject = {}

export type FirebaseMetaObject = FirebaseObject & {
  createdAt: Date
  createdBy: DocumentReference
}
