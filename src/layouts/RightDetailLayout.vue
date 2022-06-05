<template>
  <div id="layout">
    <Container center class="container">
      <div class="left">
        <slot name="left" />
      </div>
      <div class="right">
        <slot name="right" />
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'right-detail-layout'
}
</script>

<style lang="scss" scoped>
#layout {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: left;
  overflow: hidden;
  // border: 2px solid orange;
}

.container {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
}

.left {
  min-width: 200px;
  padding: 16px 0;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-right: 48px;
  // border: 2px solid blueviolet;
}

.left::-webkit-scrollbar {
  display: none;
}

.right {
  flex-grow: 1;
  overflow-y: scroll;
  padding: 16px;
  // border: 2px solid aquamarine;
}
</style>
