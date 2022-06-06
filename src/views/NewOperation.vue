<template>
  <div id="page">
    <ContentHeader class="content-header" title="New Operation">
      <template v-slot:left></template>
      <template v-slot:right>
        <CRFDButton flavour="secondary" @click="push('operations')">
          Cancle
        </CRFDButton>
        <!-- <CRFDButton :disabled="disabled">Next</CRFDButton> -->
      </template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </ContentHeader>

    <PathLayout :path="path" :value="step">
      <CRFDBox :title="selectedPath">
        Hello World
        <template #footer-right>
          <CRFDButton flavour="secondary" disabled> Next </CRFDButton>
        </template>
      </CRFDBox>
    </PathLayout>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      path: ['General', 'Contact', 'Documents'],
      step: 0
    }
  },
  computed: {
    disabled() {
      return true
    },
    selectedPath() {
      return this.path[this.step]
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
