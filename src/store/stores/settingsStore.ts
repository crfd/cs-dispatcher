import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () =>
    useStorage('settings', {
      language: 'en',
      navbar: {
        showIcons: true
      },
      map: {
        style: 'mapbox://styles/mapbox/streets-v11'
      }
    }),
  actions: {
    setMapStyle(username: string, styleId: string) {
      this.map.style = `mapbox://styles/${username}/${styleId}`
    }
  },
  getters: {}
})
