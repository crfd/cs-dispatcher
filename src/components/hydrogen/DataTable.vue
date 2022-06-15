<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue'
import { ChevronDownIcon } from '@zhuowenli/vue-feather-icons'

import { DataTableRow } from '@/models/ui'

// =====
// PROPS
// =====

const props = defineProps({
  headers: {
    type: Array<string>,
    default: []
  },
  rows: {
    type: Array<DataTableRow>,
    default: []
  },
  search: {
    type: String,
    default: ''
  },
})

const { headers, rows, search } = toRefs(props)

// ====
// DATA
// ====

/**
 * The index of the column that is selected to be sorted by.
 */
const sortKey = ref(0)

/**
 * Wether to sort the selected coloumn in ascending or descending order.
 *
 * @example ascending = 1 -> 100 - descending = 100 -> 1
 */
const ascending = ref(true)

// ========
// COMPUTED
// ========

/**
 * When a search value has been set all rows will be filtered out if the value
 * is not included in any of the rows cells
 */
const filteredRows = computed(() => {
  if (search.value.length === 0) {
    return rows.value
  } else {
    return rows.value.filter(row => {
      return row.cells.some(cell => {
        return cell.toLowerCase().includes(search.value.toLowerCase())
      })
    })
  }
})

/** Sorts the rows by the selected sortingKey */
const sortedRows = computed(() => {
  return filteredRows.value.sort((a, b) => {
    const aValue = a.cells[sortKey.value]
    const bValue = b.cells[sortKey.value]

    if (aValue < bValue) {
      return ascending.value ? -1 : 1
    } else if (aValue > bValue) {
      return ascending.value ? 1 : -1
    } else {
      return 0
    }
  })
})

/** Additional manipulation to the rows (if necessary) */
const computedRows = computed(() => {
  return sortedRows.value
})

/** Returns wether or not the table has data to show */
const hasData = computed(() => {
  return computedRows.value.length > 0
})

// ====
// EMIT
// ====

const emit = defineEmits(['select'])

// =======
// METHODS
// =======

/**
 * Changes the sort key or reverses the sort order.
 * @param index The header index by which to sort.
 */
function changeSortKey(index: number) {
  if (sortKey.value === index) {
    ascending.value = !ascending.value
  } else {
    sortKey.value = index
    ascending.value = true
  }
}

/**
 * Handles the selection of a row and emits the selection to any parent components.
 * @param row The row object which was clicked.
 */
function selectionHandler(row: DataTableRow) {
  const index = rows.value.indexOf(row)
  emit('select', index)
}
</script>

<template>
  <div class="my-table no-scrollbar" ref="table">
    <table>
      <thead>
        <tr>
          <th
            v-for="(h, i) in headers"
            :key="h"
            @click="changeSortKey(i)"
            :class="{ 'sort-key': i === sortKey }"
          >
            <span>{{ h }}</span>
            <ChevronDownIcon
              v-if="sortKey === i"
              size="0.8x"
              class="sort-icon"
              :class="{ up: !ascending }"
            />
            <div class="icon-placeholder" v-if="sortKey !== i" />
          </th>
        </tr>
      </thead>
      <tbody v-if="hasData">
        <tr v-for="r in sortedRows" :key="r.id" @click="selectionHandler(r)">
          <td v-for="(h, i) in headers" :key="h">{{ r.cells[i] }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="!hasData" class="no-data">No Data</p>
  </div>
</template>

<style lang="scss" scoped>
.my-table {
  overflow: scroll;
  width: 100%;
  margin: 0 auto; // center horizontally
  overscroll-behavior-y: none; // no bounce
}

/* https://stackoverflow.com/a/51312747/4179020 */
table tr td:last-of-type {
  width: 100%;
}

table tr th:last-of-type {
  width: 100%;
}

table {
  display: table;
  position: relative;
  border-collapse: collapse;
  overflow: hidden;

  /* Text */
  text-align: left;
  font-size: 14px;
}

thead {
  position: sticky;
  top: 0;
  z-index: 200;
  color: rgba(255, 255, 255, 0.9);
  @apply border-b border-b-white/2 bg-white/primary transition-all ease-in-out;
}

tbody {
  color: #000;
  scrollbar-width: 0;
  overflow-y: scroll;
  -ms-overflow-style: none;
}

/* Remove bottom border from last table row */
tr:last-child td {
  border: none;
}

/* Highlight table row */
tr {
  @apply transition-all ease-in-out;
}

tbody tr:hover {
  @apply bg-white/2;
}

th,
td {
  padding: 10px 14px;
  white-space: nowrap;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
  user-select: none;
  transition: all ease-in-out 160ms;
  font-weight: 500;
  @apply text-black/1;
}

th.sort-key {
  display: flex;
  gap: 0.3rem;
  align-items: center;
  font-weight: 600;
  @apply text-black/primary;
}

td {
  cursor: pointer;
  border-bottom: 1px solid;
  @apply border-b-white/2;
}

/* Padding to the left of the table */
th:first-child,
td:first-child {
  padding-left: 20px;
}

/* Padding to the right of the table */
th:last-child,
td:last-child {
  padding-right: 20px;
}

.sort-icon {
  width: 12px;
  height: 12px;
  transition: all ease-in-out 300ms;
  transform: rotate(360deg);
}

.icon-placeholder {
  display: inline-block;
  width: 12px;
  height: 12px;
}

.up {
  transform: rotate(180deg);
}

.no-scrollbar {
  overflow: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
}

.no-data {
  padding: 14px;
  text-align: left;
  font-weight: 500;
  @apply text-black/2;
}
</style>
