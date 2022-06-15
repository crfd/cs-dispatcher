<template>
  <div id="page">
    <SubHeader class="content-header" title="Contractors">
      <template v-slot:left></template>
      <template v-slot:right>
        <CRFDButton disabled flavour="secondary">Edit</CRFDButton>
        <CRFDButton disabled @click="push('contactors-new')">Create</CRFDButton>
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
    </SubHeader>

    <div class="white-table-header"></div>
    <Container center>
      <DataTable
        class="data-table"
        :headers="headers"
        :rows="rows"
        @select="rowSelectionHandler"
      />
    </Container>
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
      headers: ['#', 'Name']
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