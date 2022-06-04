<template>
  <div id="page">
    <ContentHeader class="content-header" title="Settings" border>
      <template v-slot:left></template>
      <template v-slot:right></template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </ContentHeader>
    <InPageNavigationLayout :routes="routes">
      <template #general>
        <crfd-box class="box" title="1. Setting">
          <template #footer-left>Some Text</template>
          Here is some text that is inside the box
          <template #footer-right>
            <crfd-button flavour="secondary" disabled>Save</crfd-button>
          </template>
        </crfd-box>

        <crfd-box class="box" title="2. Setting">
          <template #footer-left>Some Text</template>
          Here is some text that is inside the box
          <template #footer-right>
            <crfd-button flavour="secondary" disabled>Save</crfd-button>
          </template>
        </crfd-box>
      </template>

      <template #personal>
        <lorem-ipsum />
      </template>
    </InPageNavigationLayout>
  </div>
</template>

<script>
import InPageNavigationLayout from '@layouts/InPageNavigationLayout.vue'
import { ContentHeader, LoremIpsum } from '@components'
import { Box, Button } from '@crfd'

export default {
  name: 'settings',
  components: {
    InPageNavigationLayout,
    ContentHeader,
    LoremIpsum,
    'crfd-box': Box,
    'crfd-button': Button
  },
  props: {},
  data() {
    return {
      routes: [
        {
          id: 'general',
          name: 'General'
        },
        {
          id: 'personal',
          name: 'Personal'
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

.box:not(:first-child) {
  @apply mt-6;
}
</style>
