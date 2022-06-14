import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => {
    return {
      isLoading: true
    }
  },
  actions: {
    setLoading(loading: boolean) {
      this.isLoading = loading
    }
  },
  getters: {}
})
