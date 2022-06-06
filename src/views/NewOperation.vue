<template>
  <div id="page">
    <ContentHeader class="content-header" title="New Operation">
      <template v-slot:left></template>
      <template v-slot:right>
        <CRFDButton flavour="secondary" @click="push('operations')">
          Cancle
        </CRFDButton>
        <!-- <CRFDButton :disabled="disabled">Save</CRFDButton> -->
      </template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </ContentHeader>

    <PathLayout :path="path" :value="step">
      <template #general>
        <CRFDBox :title="selectedPath.name">
          Hello World
          <template #footer-right>
            <CRFDButton flavour="secondary" disabled> Next </CRFDButton>
          </template>
        </CRFDBox>
      </template>

      <template #contact>
        <CRFDBox :title="selectedPath.name">
          Hello World
          <template #footer-right>
            <CRFDButton flavour="secondary" disabled> Next </CRFDButton>
          </template>
        </CRFDBox>
      </template>

      <template #documents>
        <CRFDBox :title="selectedPath.name">
          Hello World
          <template #footer-right>
            <CRFDButton flavour="secondary" disabled> Next </CRFDButton>
          </template>
        </CRFDBox>
      </template>
    </PathLayout>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      path: [
        {
          id: 'general',
          name: 'General'
        },
        {
          id: 'contact',
          name: 'Contact'
        },
        {
          id: 'documents',
          name: 'Documents'
        }
      ],
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
