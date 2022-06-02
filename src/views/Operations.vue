<template>
  <div id="page">
    <ContentHeader class="content-header" title="Operations">
      <template v-slot:left></template>
      <template v-slot:right>
        <crfd-button flavour="secondary">Edit</crfd-button>
        <crfd-button>Create</crfd-button>
      </template>
      <template v-slot:sub-left>
        <crfd-modifier title="Calender View" :icon="icons.Calendar" />
        <crfd-modifier title="Filter" :icon="icons.Filter" flavour="inactive" />
      </template>
      <template v-slot:sub-right></template>
    </ContentHeader>

    <div class="white-table-header"></div>
    <DataTable class="data-table" :headers="headers" :rows="rows" />
  </div>
</template>

<script>
import { ContentHeader, DataTable } from '../components/'
import { Button, Modifier } from '../components/CRFD'
import { Container } from '../components/Hydrogen'
import * as icons from '../assets/icons'

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
      icons,
      headers: ['#', 'Space', 'Classification', 'Time', 'Date', 'Task']
    }
  },
  computed: {
    rows() {
      return [
        ['1', 'CRFD Toilet', 'Hazardous', '10:00', '12/12/2022', 'Clean'],
        ...Array(50).fill([
          '2',
          'CRFD Paper Castle',
          'Normal',
          '12:00',
          '12/12/2022',
          'Build'
        ])
      ]
    }
  },
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
</style>
