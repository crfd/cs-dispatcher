<template>
  <div class="navbar">
    <crfd-navbar />
  </div>
  <router-view></router-view>
</template>

<script>
import CRFDNavbar from './components/CRFDNavbar.vue'

export default {
  components: {
    'crfd-navbar': CRFDNavbar
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
  @apply bg-white/primary;
}

#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 15px;
}

.navbar {
  @apply border-b-2 border-solid border-white/2;
}
</style>
