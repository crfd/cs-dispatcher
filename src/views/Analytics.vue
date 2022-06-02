<template>
  <div id="page">
    <ContentHeader class="content-header" title="Analytics">
      <template v-slot:left></template>
      <template v-slot:right></template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </ContentHeader>
  </div>
</template>

<script>
import { ContentHeader } from '../components'

export default {
  name: 'analytics',
  components: { ContentHeader },
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
