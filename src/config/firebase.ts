import { initializeApp } from 'firebase/app'
import { enableIndexedDbPersistence, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged
} from 'firebase/auth'
import { getFunctions } from 'firebase/functions'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC98i5YcbUMGICdztiYXfPUyC793eczeWQ',
  authDomain: 'crfd-data.firebaseapp.com',
  projectId: 'crfd-data',
  storageBucket: 'crfd-data.appspot.com',
  messagingSenderId: '253564876414',
  appId: '1:253564876414:web:93090ce2a84bf9f99d8a2f'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const functions = getFunctions(app)

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
