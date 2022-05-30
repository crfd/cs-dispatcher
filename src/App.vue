<template>
  <router-view></router-view>
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  position: relative;
  height: 100%;
  width: 100%;
  @apply bg-white/1;
}

#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 15px;
}
</style>
