<template>
  <div id="page">
    <ContentHeader class="content-header" title="New Operation">
      <template v-slot:left></template>
      <template v-slot:right>
        <CRFDButton flavour="secondary" @click="push('operations')">
          Cancle
        </CRFDButton>
        <CRFDButton :disabled="disabled">Save</CRFDButton>
      </template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </ContentHeader>

    <div class="page-body"></div>
  </div>
</template>

<script>
export default {
  name: 'new-operation',
  props: {},
  data() {
    return {}
  },
  computed: {
    disabled() {
      return true
    }
  },
  methods: {
    push(name) {
      this.$router.push({ name })
    }
  }
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
