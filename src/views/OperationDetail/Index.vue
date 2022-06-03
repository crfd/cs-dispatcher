<template>
  <div id="page">
    <ContentHeader class="content-header" :title="title">
      <template v-slot:left></template>
      <template v-slot:right></template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </ContentHeader>
  </div>
</template>

<script>
import { ContentHeader } from '@components'

export default {
  name: 'operation-detail',
  components: { ContentHeader },
  props: {},
  data() {
    return {}
  },
  computed: {
    title() {
      console.dir(this.$route.params)
      return 'Operation ' + this.$route.params.id
    }
  },
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
