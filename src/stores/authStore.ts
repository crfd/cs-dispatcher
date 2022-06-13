import { auth } from '@/config/firebase'
import { useAuth } from '@vueuse/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return useAuth(auth)
  },
  actions: {
    async login(username: string, password: string) {
      return await signInWithEmailAndPassword(auth, username, password)
    }
  },
  getters: {}
})
