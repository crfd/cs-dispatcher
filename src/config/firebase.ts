import { initializeApp } from 'firebase/app'
import { enableIndexedDbPersistence, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged
} from 'firebase/auth'

// Initialize Firebase
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
const auth = getAuth(app)

// Enable authentication persistence
setPersistence(auth, browserLocalPersistence)

// Enable firestore persistence
enableIndexedDbPersistence(db)

// Simple auth state change logger
onAuthStateChanged(auth, user => {
  if (user) {
    console.log('User is signed in')
  } else {
    console.log('User is signed out')
  }
})

export { app, db, storage, auth }
