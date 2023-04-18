
interface Table {
  pk?: string
  ref?: typeof Table
  filter?: anyObj
  column: TableColumn[]
  total?: number
  loading?: boolean
  data?: TableRow[]
  selection?: TableRow[]
}

/* baTableForm */
interface TableForm {
  ref?: InstanceType<typeof ElForm> | undefined
  operate?: string
  operateIds?: string[]
  items?: anyObj
  defaultItems?: anyObj
  loading?: boolean
  submitLoading?: boolean
  labelWidth?: number
}

interface TableColumn {
  label?: string
  prop?: string
  width?: string | number
}

interface TableBefore {
  [key: string]: Function | undefined
}

interface TableAfter {
  [key: string]: Function | undefined
}

/* 表格行 */
interface TableRow extends anyObj {
  children?: TableRow[]
}

/* 表头支持的按钮 */
type HeaderOptButton =
| 'refresh'
| 'add'
| 'edit'
| 'delete'
| 'unfold'
| 'recycle bin'
| 'comSearch'
| 'quickSearch'
| 'columnDisplay'

