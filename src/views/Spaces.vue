<template>
  <div id="page">
    <ContentHeader class="content-header" title="Spaces">
      <template v-slot:left></template>
      <template v-slot:right>
        <crfd-button flavour="secondary">Edit</crfd-button>
        <crfd-button @click="push('space-new')">Create</crfd-button>
      </template>
      <template v-slot:sub-left>
        <crfd-modifier title="Filter" :icon="icons.Filter" flavour="inactive" />
      </template>
      <template v-slot:sub-right></template>
    </ContentHeader>

    <div class="white-table-header"></div>
    <DataTable
      class="data-table"
      :headers="headers"
      :rows="rows"
      @select="rowSelectionHandler"
    />
  </div>
</template>

<script>
import { ContentHeader, DataTable } from '@components/'
import { Button, Modifier } from '@crfd'
import { Container } from '@hydrogen'
import { Filter } from '@icons'

export default {
  name: 'operations',
  components: {
    ContentHeader,
    Container,
    DataTable,
    'crfd-button': Button,
    'crfd-modifier': Modifier
  },
  props: {},
  data() {
    return {
      icons: {
        Filter
      },
      headers: ['#', 'Name', 'Location', 'Description']
    }
  },
  computed: {
    rows() {
      return [
        [
          '1',
          'CRFD Toilet',
          'Campbell River City Center',
          'The main restroom in the fire station'
        ]
      ]
    }
  },
  methods: {
    push(name) {
      this.$router.push({ name })
    },
    rowSelectionHandler(i) {
      const row = this.rows[i]

      this.$router.push({
        name: 'space-detail',
        params: {
          id: i
        }
      })
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
}

.content-header {
  padding-bottom: 0;
}

.white-table-header {
  position: absolute;
  top: 98px;
  height: 49px;
  width: 100%;
  border-bottom: 2px solid;
  @apply border-b-white/2 bg-white/primary;
}

.spacer {
  flex-grow: 1;
}
</style>
