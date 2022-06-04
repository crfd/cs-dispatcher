<template>
  <div id="layout">
    <container center class="container">
      <div class="left">
        <nav>
          <ul>
            <li v-for="route in routes" :key="route.id">
              <crfd-button
                :flavour="buttonFlavour(route)"
                @click="routeChangeHandler(route)"
              >
                {{ route.name }}
              </crfd-button>
            </li>
          </ul>
        </nav>
      </div>
      <div class="right">
        <transition name="fade" mode="out-in">
          <slot />
        </transition>
      </div>
    </container>
  </div>
</template>

<script>
import { Button } from '@crfd'
import { Container } from '@hydrogen'

export default {
  name: 'in-page-navigation-layout',
  components: { Container, 'crfd-button': Button },
  props: {
    route: {
      type: String,
      default: 'General'
    },
    routes: {
      type: Array,
      default: [
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
  data() {
    return {
      route: 'general'
    }
  },
  computed: {},
  emits: ['update:route'],
  methods: {
    routeChangeHandler(route) {
      this.route = route.id
    },
    buttonFlavour(route) {
      return route.id === this.route ? 'link-active' : 'link'
    }
  }
}
</script>

<style lang="scss" scoped>
#layout {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: left;
  overflow: hidden;
  // border: 2px solid orange;
}

.container {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
}

.left {
  flex-basis: 200px;
  padding: 16px 0;
  padding-right: 48px;
  // border: 2px solid blueviolet;
}

.right {
  flex-grow: 1;
  overflow-y: scroll;
  padding: 16px;
  // border: 2px solid aquamarine;
}
</style>
