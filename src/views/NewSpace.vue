<template>
  <div id="page">
    <ContentHeader class="content-header" title="New Space">
      <template v-slot:left></template>
      <template v-slot:right>
        <CRFDButton flavour="secondary" @click="push('spaces')">
          Cancle
        </CRFDButton>
        <!-- <CRFDButton :disabled="disabled">Next</CRFDButton> -->
      </template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </ContentHeader>

    <PathLayout :path="path" :value="step">
      <CRFDBox title="General">
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
  name: 'new-spaces',
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
