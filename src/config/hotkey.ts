import hotkeys from 'hotkeys-js'

import { useUIStore } from '@/store'

/**
 * Enables hotkey detection on all elements on the page.
 *
 * @link https://wangchujiang.com/hotkeys/#filter
 */
hotkeys.filter = event => {
  // Enable hotkeys on all elements
  return true
}

// ==============
// GLOBAL HOTKEYS
// ==============

hotkeys('command+k, strg+k, command+p, strg+p', event => {
  event.preventDefault()
  useUIStore().toggleCommandPalette()
})
