<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { useMessageStore, useUIStore } from '@/store'

const { messages } = storeToRefs(useMessageStore())
const { isLoading, showCommandPalette } = storeToRefs(useUIStore())
</script>

<template>
  <div id="global" v-cloak>
    <!-- Message Box -->
    <CRFDMessageCenter id="notification-center" v-model="messages" />

    <!-- Loading Spinner -->
    <transition name="fade" mode="out-in">
      <CRFDOverlay v-if="isLoading" light>
        <CRFDSpinner class="center" />
      </CRFDOverlay>
    </transition>

    <!-- Command Palette -->
    <transition name="fade" mode="out-in">
      <CRFDOverlay
        v-if="showCommandPalette"
        @dismiss="showCommandPalette = false"
      >
        <CRFDCommandPalette
          id="palette"
          @dismiss="showCommandPalette = false"
        />
      </CRFDOverlay>
    </transition>

    <!-- Main Content -->
    <Header @search="showCommandPalette = true" />
    <div id="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component v-if="!isLoading" :is="Component" />
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
