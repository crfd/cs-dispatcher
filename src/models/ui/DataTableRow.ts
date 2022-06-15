import { v4 as uuid } from 'uuid'

class DataTableRow {
  id = uuid()
  cells: string[]

  constructor(cells: string[]) {
    this.cells = cells
  }
}

export default DataTableRow
