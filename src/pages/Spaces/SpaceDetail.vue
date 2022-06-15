<template>
  <div id="page">
    <SubHeader class="content-header" :title="title">
      <template v-slot:left></template>
      <template v-slot:right></template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </SubHeader>
  </div>
</template>

<script>
export default {
  name: 'space-detail',
  props: {},
  data() {
    return {}
  },
  computed: {
    title() {
      return 'Space ' + this.$route.params.id
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
