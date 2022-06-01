<template>
  <div class="map" :id="mapId"></div>
</template>

<script>
import { v4 as uuid } from 'uuid'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

console.log(import.meta.env)

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

const mapId = 'map-' + uuid()

export default {
  name: 'crfd-map',
  props: {},
  data() {
    return {
      mapId: mapId,
      map: null,
      options: {
        style: 'mapbox://styles/mapbox/outdoors-v11',
        lng: -125.247498,
        lat: 50.0244445,
        zoom: 11
      }
    }
  },
  mounted() {
    this.setMap()
  },
  methods: {
    setMap() {
      const o = this.options

      this.map = new mapboxgl.Map({
        container: mapId,
        style: o.style,
        center: [o.lng, o.lat],
        zoom: o.zoom,
        attributionControl: false,
        logoPosition: 'bottom-right',
        interactive: true,
        preserveDrawingBuffer: true,
        dragRotate: true,
        dragPan: true,
        scrollZoom: true,
        doubleClickZoom: true,
        keyboard: true,
        touchZoomRotate: true,
        trackResize: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 400px;
}

.mapboxgl-ctrl-attrib {
  display: none;
}
</style>
