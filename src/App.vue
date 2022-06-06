<template>
  <div id="global" v-cloak>
    <CRFDOverlay v-if="showOverlay" @dismiss="showOverlay = false">
      <CRFDCommandPalette id="palette" />
    </CRFDOverlay>

    <PageHeader id="header" />

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

export default {
  name: 'App',
  data() {
    return {
      showOverlay: true
    }
  },
  mounted() {
    hotkeys('command+k', event => {
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
