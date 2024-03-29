<template>
  <RightDetailLayout>
    <template #left>
      <nav>
        <ul>
          <li
            v-for="route in routes"
            :key="route.id"
            :class="{ divider: route.newSection }"
          >
            <CRFDButton
              class="button"
              position="left"
              :icon="route.icon"
              :flavour="buttonFlavour(route)"
              @click="routeChangeHandler(route)"
            >
              {{ route.name }}
            </CRFDButton>
          </li>
        </ul>
      </nav>
    </template>
    <template #right>
      <template v-for="route in routes" :key="route.id">
        <slot v-if="isActiveRoute(route)" :name="route.id">
          No content to display
        </slot>
      </template>
    </template>
  </RightDetailLayout>
</template>

<script>
import { setQueryParam, getQueryParam } from '@lib/queryParams'

export default {
  name: 'in-page-navigation-layout',
  props: {
    routes: {
      type: Array,
      default: [
        {
          id: 'fallback',
          name: 'Fallback'
        }
      ]
    }
  },
  beforeMount() {
    // Check wether there already is a route set in the query params
    const viewQueryParam = getQueryParam('view')
    const route = this.getRouteById(viewQueryParam)

    if (viewQueryParam && route) {
      // Update the view with the detected route
      this.routeChangeHandler(route)
    } else {
      // When no route is set use the first route
      this.routeChangeHandler(this.routes[0])
    }
  },
  data() {
    return {
      /** Holds the id of the currently active route */
      selectedRouteId: undefined
    }
  },
  computed: {
    /** Returns the route object for the selected route. */
    selectedRoute() {
      return this.getRouteById(this.selectedRouteId)
    }
  },
  emits: [],
  methods: {
    /**
     * Returns whether the provided route is the currently selected route.
     *
     * @param {Object} route
     */
    isActiveRoute(route) {
      return route.id === this.selectedRouteId
    },

    /**
     * Changes the selected route.
     *
     * @param {Object} route
     */
    routeChangeHandler(route) {
      this.selectedRouteId = route.id

      if (this.isDefaultRoute(route)) {
        setQueryParam('view', undefined)
      } else {
        setQueryParam('view', route.id)
      }
    },

    /**
     * Returns the button flavour for the provided route.
     *
     * @param {Object} route
     */
    buttonFlavour(route) {
      return this.isActiveRoute(route) ? 'link-active' : 'link'
    },

    /**
     * Returns the route for the provided id
     *
     * @param {String} id The id of the route to return
     * @returns {Object} The route object
     */
    getRouteById(id) {
      return this.routes.find(route => route.id === id)
    },

    /**
     * When the provided route is the default (first) route the function returns true.
     *
     * @param {Object} route The route to check for
     * @returns {Boolean} Whether the provided route is the default route
     */
    isDefaultRoute(route) {
      return route.id === this.routes[0].id
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  @apply my-1 w-full text-left;
}
li.divider {
  @apply mt-2 border-t-2 border-t-white/2 pt-1;
}
</style>
