<template>
  <div id="page">
    <ContentHeader class="content-header" title="Operations">
      <template v-slot:left></template>
      <template v-slot:right>
        <CRFDButton flavour="secondary">Edit</CRFDButton>
        <CRFDButton @click="push('operation-new')">Create</CRFDButton>
      </template>
      <template v-slot:sub-left>
        <CRFDModifier title="Calender View" :icon="icons.Calendar" />
        <CRFDModifier title="Filter" :icon="icons.Filter" flavour="inactive" />
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
import { Filter, Calendar } from '@icons'

export default {
  name: 'operations',
  props: {},
  data() {
    return {
      icons: {
        Filter,
        Calendar
      },
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
  methods: {
    push(name) {
      this.$router.push({ name })
    },
    rowSelectionHandler(i) {
      const row = this.rows[i]

      this.$router.push({
        name: 'operation-detail',
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
  flex: 1;
}

.content-header {
  padding-bottom: 0 !important;
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
