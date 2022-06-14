import { FirebaseObject } from '@/models/FirebaseObject'
import {
  CollectionReference,
  DocumentReference,
  onSnapshot
} from 'firebase/firestore'
import { ref, Ref } from 'vue'

function useDocument<T extends FirebaseObject>(reference: DocumentReference) {
  let documentRef: Ref<T | null> = ref(null)

  onSnapshot(reference, snapshot => {
    console.dir(snapshot)
    documentRef.value = {
      ...(snapshot.data() as T),
      id: snapshot.id
    }
  })

  return documentRef
}

function useCollection<T extends FirebaseObject>(
  reference: CollectionReference
) {
  let collectionRef: Ref<T[]> = ref([])

  onSnapshot(reference, snapshot => {
    collectionRef.value = snapshot.docs.map(doc => {
      return {
        ...(doc.data() as T),
        id: doc.id
      }
    })
  })

  return collectionRef
}

export { useDocument, useCollection }
