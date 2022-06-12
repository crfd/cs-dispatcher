import { DocumentReference } from 'firebase/firestore'

type Meta = {
  UpdatedAt: Date
  UpdatedByUser: DocumentReference
}

export default Meta
