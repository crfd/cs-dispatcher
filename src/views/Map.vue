<template>
  <div id="page">
    <crfd-map class="map" />
  </div>
</template>

<script>
import { Map } from '../components/CRFD'

export default {
  name: 'operations',
  components: {
    'crfd-map': Map
  },
  props: {},
  data() {
    return {}
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

.map {
  height: 100%;
}
</style>
