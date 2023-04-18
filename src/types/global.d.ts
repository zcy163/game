interface Window {
  existLoading: boolean
  lazy: NodeJS.Timer
  unique: number
  tokenRefreshing: boolean
  requests: Function[]
  eventSource: EventSource
  calcFontSize: Function
}

interface Toast {
  text: string
  show: boolean
}

interface anyObj {
  [key: string]: any
}

interface TableDefaultData<T = any> {
  list: T
  remark: string
  total: number
}

type ApiPromise<T = any> = Promise<ApiResponse<T>>

