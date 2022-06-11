<template>
  <div id="global" v-cloak>
    <transition name="fade" mode="out-in">
      <CRFDOverlay v-if="showOverlay" @dismiss="showOverlay = false">
        <CRFDCommandPalette id="palette" @dismiss="showOverlay = false" />
      </CRFDOverlay>
    </transition>

    <CRFDMessageCenter id="notification-center" v-model="messages" />

    <PageHeader id="header" @search="showOverlay = true" />

    <div id="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import hotkeys from 'hotkeys-js'
import { useMainStore } from '@store'
import { v4 as uuid } from 'uuid'
import MessageType from '@models/UI/MessageType'

// See: https://wangchujiang.com/hotkeys/#filter
hotkeys.filter = function (event) {
  // Enable hotkeys on all elements
  return true
}

export default {
  name: 'App',
  data() {
    return {
      showOverlay: false,
      messages: [
        {
          id: uuid(),
          text: 'I may fade but my spirit will not.',
          type: MessageType.Info,
          autoDismiss: '5'
        },
        {
          id: uuid(),
          text: 'I will stand strong!!!',
          type: MessageType.Warning
        }
      ]
    }
  },
  mounted() {
    hotkeys('command+k, strg+k, command+p, strg+p', event => {
      event.preventDefault()
      this.showOverlay = !this.showOverlay
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#global {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

#content {
  height: 100vh;
  overflow-y: scroll;
}

#notification-center {
  position: fixed;
  bottom: 24px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: 1;
}
</style>
