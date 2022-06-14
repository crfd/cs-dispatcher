<template>
  <div
    class="my-table no-scrollbar"
    ref="table"
    :style="{ maxWidth: maxWidth }"
  >
    <table>
      <thead :class="{ shadow: scrolled && hasShadow }">
        <tr>
          <th
            v-for="(h, i) in headers"
            :key="h"
            @click="changeOrder(i)"
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
        <tr v-for="(r, iR) in sortedRows" :key="iR" @click="clickHandler(iR)">
          <td v-for="(h, i) in headers" :key="h">{{ r[i] }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="!hasData" class="no-data">No Data</p>
  </div>
</template>

<script>
// TODO: Generate UUIDs
import { ChevronDownIcon } from '@zhuowenli/vue-feather-icons'

export default {
  name: 'data-table',
  components: { ChevronDownIcon },
  props: {
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    search: {
      type: String,
      default: ''
    },
    maxWidth: {
      type: String,
      default: '840px'
    },
    hasShadow: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      scrollY: 0,
      sortKey: 0,
      ascending: true // ascending = 1 -> 100 - descending = 100 -> 1
    }
  },
  emits: ['select'],
  methods: {
    changeOrder(index) {
      if (this.sortKey == index) {
        this.ascending = !this.ascending
      } else {
        this.sortKey = index
        this.ascending = true
      }
    },
    clickHandler(index) {
      this.$emit('select', index)
    }
  },
  computed: {
    scrolled() {
      return this.scrollY !== 0
    },
    filteredRows() {
      if (this.search === '') {
        return this.rows
      } else {
        return this.rows.filter(row => {
          return row.some(cell =>
            cell.toLowerCase().includes(this.search.toLowerCase())
          )
        })
      }
    },
    sortedRows() {
      const i = this.sortKey

      return [...this.filteredRows].sort((a, b) => {
        return this.ascending ? a[i] > b[i] : a[i] < b[i]
      })
    },
    hasData() {
      return this.rows.length > 0
    }
  },
  mounted() {
    const $table = this.$refs.table

    $table.addEventListener('scroll', () => {
      this.scrollY = $table.scrollTop
    })
  }
}
</script>

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

thead.shadow {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
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
