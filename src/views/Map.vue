<template>
  <div id="page">
    <crfd-map class="map" />
    <crfd-card class="panel">
      <crfd-modifier title="Filter" flavour="inactive" :icon="icons.Filter" />
    </crfd-card>
  </div>
</template>

<script>
import { Map, Card, Modifier } from '@crfd'
import { Container } from '@hydrogen'
import { Filter } from '@icons'

export default {
  name: 'operations',
  components: {
    Container,
    'crfd-map': Map,
    'crfd-card': Card,
    'crfd-modifier': Modifier
  },
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
