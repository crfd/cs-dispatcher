<template>
  <header>
    <h1 class="title">
      <img src="./assets/logo-leaf.svg" width="28" class="inline-block" />
      Confined Space Dispatcher
    </h1>
    <div class="navbar">
      <crfd-navbar />
    </div>
  </header>
  <div id="content" ref="content">
    <router-view></router-view>
  </div>
</template>

<script>
import CRFDNavbar from './components/CRFDNavbar.vue'

export default {
  components: {
    'crfd-navbar': CRFDNavbar
  },
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    this.$refs.content.addEventListener('scroll', () => {
      this.isScrolled = this.$refs.content.scrollTop > 0
    })
  }
}
</script>

<style>
* {
  box-sizing: border-box;
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
