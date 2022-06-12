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
        username: 'mapbox',
        styleId: 'streets-v11'
      }
    }),
  actions: {},
  getters: {}
})
