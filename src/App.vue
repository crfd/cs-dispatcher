<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue'
import hotkeys from 'hotkeys-js'
import { v4 as uuid } from 'uuid'
import { MessageType } from './models/ui'
import Message from '@/models/ui/Message'

// See: https://wangchujiang.com/hotkeys/#filter
hotkeys.filter = function (event) {
  // Enable hotkeys on all elements
  return true
}

const showOverlay = ref(false)
const messages: Ref<Message[]> = ref([
  // new Message('I may fade but my spirit will not.', MessageType.Info, 5),
  // new Message('I will stand strong!', MessageType.Warning, undefined)
])

onMounted(() => {
  hotkeys('command+k, strg+k, command+p, strg+p', event => {
    event.preventDefault()
    showOverlay.value = !showOverlay.value
  })
})
</script>

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
