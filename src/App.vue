<template>
  <div id="global" v-cloak>
    <transition name="fade" mode="out-in">
      <CRFDOverlay v-if="showOverlay" @dismiss="showOverlay = false">
        <CRFDCommandPalette id="palette" @dismiss="showOverlay = false" />
      </CRFDOverlay>
    </transition>

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

// See: https://wangchujiang.com/hotkeys/#filter
hotkeys.filter = function (event) {
  // Enable hotkeys on all elements
  return true
}

export default {
  name: 'App',
  data() {
    return {
      showOverlay: false
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
</style>
