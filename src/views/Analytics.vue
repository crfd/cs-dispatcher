<template>
  <div id="page">
    <ContentHeader class="content-header" title="Analytics" border>
      <template v-slot:left></template>
      <template v-slot:right></template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </ContentHeader>

    <InPageNavigationLayout :routes="routes"> </InPageNavigationLayout>
  </div>
</template>

<script>
export default {
  name: 'analytics',
  props: {},
  data() {
    return {
      routes: [
        {
          id: 'operations',
          name: 'Operations'
        },
        {
          id: 'response',
          name: 'Response'
        },
        {
          id: 'performance',
          name: 'Performance'
        },
        {
          id: 'worker',
          name: 'Worker'
        }
      ]
    }
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
