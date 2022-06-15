<template>
  <VBoxLayout>
    <CRFDBox class="box" title="View">
      <p>Change important aspects of every map view inside the application</p>

      <CRFDSideSelect :options="mapNames" v-model="selectedMapIndex">
        <img class="map-preview" :src="selectedURL" />
      </CRFDSideSelect>

      <template #footer-left></template>
      <template #footer-right>
        <CRFDButton flavour="secondary" disabled>Save</CRFDButton>
      </template>
    </CRFDBox>

    <CRFDBox class="box" title="API Token">
      <p>
        An API token is a way for a service to restrict and limit access to
        their services. In case the request limit is reached the Mapbox service
        prohibits any further use of their service. The request limit will be
        reset monthly or can be increased by purchasing a paid plan.
      </p>

      <a href=""></a>

      <p class="text-center text-red/primary">
        DO NOT SHARE THIS KEY WITH ANYONE!
      </p>

      <HFlex>
        <CRFDInput type="password" v-model="mapboxToken" />
      </HFlex>

      <template #footer-left> </template>
      <template #footer-right>
        <CRFDButton flavour="secondary" disabled>Save</CRFDButton>
      </template>
    </CRFDBox>
  </VBoxLayout>
</template>

<script>
import MapboxStaticImageAPI, {
  defaulMap
} from '@/controller/MapboxStaticImageAPI'

export default {
  data() {
    return {
      selectedMapIndex: 0,
      mapStyleDidChange: false,
      mapboxToken: import.meta.env.VITE_MAPBOX_TOKEN,
      maps: [
        {
          name: 'Streets',
          username: 'mapbox',
          styleId: 'streets-v11'
        },
        {
          name: 'Outdoors',
          username: 'mapbox',
          styleId: 'outdoors-v11'
        },
        {
          name: 'Light',
          username: 'mapbox',
          styleId: 'light-v10'
        },
        {
          name: 'Dark',
          username: 'mapbox',
          styleId: 'dark-v10'
        },
        {
          name: 'Satellite',
          username: 'mapbox',
          styleId: 'satellite-v9'
        },
        {
          name: 'Satellite Streets',
          username: 'mapbox',
          styleId: 'satellite-streets-v11'
        },
        {
          name: 'Traffic Day',
          username: 'mapbox',
          styleId: 'navigation-preview-day-v4'
        },
        {
          name: 'Traffic Night',
          username: 'mapbox',
          styleId: 'navigation-preview-night-v4'
        },
        {
          name: 'Guidance Day',
          username: 'mapbox',
          styleId: 'navigation-guidance-day-v4'
        },
        {
          name: 'Guidance Night',
          username: 'mapbox',
          styleId: 'navigation-guidance-night-v4'
        },
        {
          name: 'Senic',
          username: 'kuhltime',
          styleId: 'cjp00uo730a4h2rmg0wencqyu'
        }
      ]
    }
  },
  computed: {
    mapImageUrls() {
      return this.maps.map(map => {
        return MapboxStaticImageAPI.getImageURL(
          defaulMap(map.username, map.styleId)
        )
      })
    },
    mapNames() {
      return this.maps.map(map => {
        return map.name
      })
    },
    selectedMap() {
      return this.maps[this.selectedMapIndex]
    },
    selectedURL() {
      return this.mapImageUrls[this.selectedMapIndex]
    }
  },
  methods: {
    textForMap(index) {
      const map = this.maps[index]
      return `${map.username}/${map.styleId}`
    }
  }
}
</script>

<style lang="scss" scoped>
.map-preview {
  width: 100%;
  object-fit: cover;
  @apply rounded;
}
</style>
