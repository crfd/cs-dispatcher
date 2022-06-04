<template>
  <div id="page">
    <ContentHeader class="content-header" title="Settings" border>
      <template v-slot:left></template>
      <template v-slot:right></template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </ContentHeader>
    <InPageNavigationLayout>
      <lorem-ipsum />
    </InPageNavigationLayout>
  </div>
</template>

<script>
import { ContentHeader, LoremIpsum } from '@components'
import InPageNavigationLayout from '@layouts/InPageNavigationLayout.vue'

export default {
  name: 'settings',
  components: { InPageNavigationLayout, ContentHeader, LoremIpsum },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
#page {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  flex: 1;
}
</style>
