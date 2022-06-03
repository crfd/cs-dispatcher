<template>
  <div id="global" v-cloak>
    <page-header id="header" />

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
import { PageHeader } from '@/components'
import { Spinner } from '@crfd'
import { Container } from '@hydrogen'

export default {
  components: {
    PageHeader,
    Container,
    'crfd-spinner': Spinner
  },
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
