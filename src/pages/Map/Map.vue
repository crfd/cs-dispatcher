<template>
  <div id="page">
    <CRFDMap class="map" />
    <CRFDCard class="panel">
      <CRFDModifier title="Filter" flavour="inactive" :icon="icons.Filter" />
    </CRFDCard>
  </div>
</template>

<script>
import { Filter } from '@icons'

export default {
  name: 'operations',

  props: {},
  data() {
    return {
      icons: {
        Filter
      }
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
#page {
  position: relative;
  height: 100%;
  width: 100%;
}

.map {
  height: 100%;
}

.panel {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 240px;
}
</style>
