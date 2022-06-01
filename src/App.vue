<template>
  <div v-if="isLoading" class="center">
    <crfd-indicator />
  </div>
  <div v-cloak>
    <header>
      <h1 class="title">
        <img src="./assets/logo-leaf.svg" width="28" class="inline-block" />
        Confined Space Dispatcher
        <input v-model="backButton" type="checkbox" />
      </h1>
      <div class="navbar">
        <crfd-navbar :back-button="backButton" />
      </div>
    </header>
    <div id="content" ref="content">
      <router-view v-if="!isLoading"></router-view>
    </div>
  </div>
</template>

<script>
import CRFDNavbar from './components/CRFDNavbar.vue'
import CRFDIndicator from './components/CRFDIndicator.vue'

export default {
  components: {
    'crfd-navbar': CRFDNavbar,
    'crfd-indicator': CRFDIndicator
  },
  data() {
    return {
      isScrolled: false,
      isLoading: true,
      backButton: false
    }
  },
  mounted() {
    this.$refs.content.addEventListener('scroll', () => {
      this.isScrolled = this.$refs.content.scrollTop > 0
    })

    this.isLoading = false
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

[v-cloak] {
  display: none;
}

html,
body {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  @apply bg-white/1;
}

#content {
  box-sizing: border-box;
  position: absolute;
  width: 100vw;
  height: calc(100vh - 88px);
  overflow-y: scroll;
  z-index: 0;
}

header {
  position: relative;
  padding-bottom: -2px;
  @apply bg-white/primary transition-all ease-in-out;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.scroll {
  overflow-y: scroll;
}

.title {
  @apply mx-3 flex items-center gap-2 py-3 text-left text-lg font-semibold;
}

.navbar {
  position: relative;
  @apply border-b-2 border-solid border-white/2;
}
</style>
