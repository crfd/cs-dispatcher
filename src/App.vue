<template>
  <div id="global" v-cloak>
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
export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {},
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
