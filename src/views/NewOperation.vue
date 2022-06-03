<template>
  <div id="page">
    <ContentHeader class="content-header" title="New Operation">
      <template v-slot:left></template>
      <template v-slot:right>
        <crfd-button flavour="secondary" @click="push('operations')">
          Cancle
        </crfd-button>
        <crfd-button :disabled="disabled">Save</crfd-button>
      </template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </ContentHeader>

    <div class="page-body"></div>
  </div>
</template>

<script>
import { ContentHeader } from '@components'
import { Button } from '@crfd'

export default {
  name: 'new-operation',
  components: { ContentHeader, 'crfd-button': Button },
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
