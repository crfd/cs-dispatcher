// See:
// https://stephanlangeveld.medium.com/simple-local-storage-implementation-using-vue-3-vueuse-and-pinia-with-zero-extra-lines-of-code-cb9ed2cce42a

import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { Contractor, ConfinedSpace, Operation, User, Device } from './models'
import { db } from '@/config/firebase'
import { collection } from 'firebase/firestore'

// capture points will only be requested when the application thinks its nessessary
export type State = {
  loading: boolean
  contractos: Contractor[]
  spaces: ConfinedSpace[]
  operations: Operation[]
  user: User | null
  users: User[]
  devices: Device[]
}

export const useMainStore = defineStore('main', {
  state: (): State => ({
    loading: false,
    contractos: [],
    spaces: [],
    operations: [],
    user: null,
    users: [],
    devices: []
  }),
  getters: {
    getAllOperations: state => state.operations,
    getAllSpaces: state => state.spaces
  },
  actions: {
    async setup() {
      // Get Collection reference
      const contractorsRef = collection(db, 'contractors')
      const spacesRef = collection(db, 'spaces')
      const operationsRef = collection(db, 'operations')
      const usersRef = collection(db, 'users')
      const devicesRef = collection(db, 'devices')

      // Sync
      this.sync('contractos', contractorsRef)
      this.sync('spaces', spacesRef)
      this.sync('operations', operationsRef)
      this.sync('users', usersRef)
      this.sync('devices', devicesRef)
    }
  }
})
