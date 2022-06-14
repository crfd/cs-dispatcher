import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => {
    return {
      isLoading: true,
      showCommandPalette: false
    }
  },
  actions: {
    setLoading(loading: boolean) {
      this.isLoading = loading
    },

    /** Toggles the command palette to show or hide. */
    toggleCommandPalette() {
      this.showCommandPalette = !this.showCommandPalette
    }
  },
  getters: {}
})
