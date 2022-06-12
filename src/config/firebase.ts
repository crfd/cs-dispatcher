import { initializeApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC98i5YcbUMGICdztiYXfPUyC793eczeWQ',
  authDomain: 'crfd-data.firebaseapp.com',
  projectId: 'crfd-data',
  storageBucket: 'crfd-data.appspot.com',
  messagingSenderId: '253564876414',
  appId: '1:253564876414:web:93090ce2a84bf9f99d8a2f'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
