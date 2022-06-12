<template>
  <div id="page">
    <ContentHeader class="content-header" title="Spaces">
      <template v-slot:left></template>
      <template v-slot:right>
        <CRFDButton disabled flavour="secondary">Edit</CRFDButton>
        <CRFDButton @click="push('space-new')">Create</CRFDButton>
      </template>
      <template v-slot:sub-left>
        <CRFDModifier
          disabled
          title="Filter"
          :icon="icons.Filter"
          flavour="inactive"
        />
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
import { Filter } from '@icons'

export default {
  name: 'operations',
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
      return []
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
