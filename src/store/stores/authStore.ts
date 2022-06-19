import { auth, db } from '@/config/firebase'
import { useAuth } from '@vueuse/firebase'
import { signInWithEmailAndPassword, updatePassword } from 'firebase/auth'
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return useAuth(auth)
  },
  actions: {
    async login(username: string, password: string) {
      return await signInWithEmailAndPassword(auth, username, password)
    },
    async logout() {
      if (auth.currentUser) return await auth.signOut()
    },
    async setNewPassword(newPassword: string) {
      if (auth.currentUser)
        return await updatePassword(auth.currentUser, newPassword)
    },
    async register(
      email: string,
      token: string,
      newPassword: string,
      phone: string,
      street: string,
      city: string,
      state: string,
      zip: string,
      country: string
    ) {
      await this.login(email, token)
      await this.setNewPassword(newPassword)

      if (!auth.currentUser) throw new Error('No user set')

      const userDoc = doc(db, `users/${auth.currentUser.uid}`)

      await setDoc(
        userDoc,
        {
          contact: {
            phone,
            address: {
              street,
              city,
              state,
              zip,
              country
            }
          }
        },
        { merge: true }
      )
    }
  },
  getters: {
    isAuthenticated: state => !!state.user
  }
})
