import { defineStore } from 'pinia'

import { Message, MessageType } from '@/models/ui'

export type State = {
  messages: Message[]
  mute: MessageType | null
}

export const useMessageStore = defineStore('messages', {
  state: (): State => ({ messages: [], mute: null }),
  actions: {
    /** Adds a new message to the store. */
    addMessage(message: Message) {
      this.messages.push(message)
    },

    /** Removes a message from the store. */
    removeMessage(message: Message) {
      this.messages = this.messages.filter(m => m !== message)
    }
  }
})
