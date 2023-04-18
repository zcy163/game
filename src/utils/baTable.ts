import type { tableApi } from "@/api/common";
import type { ElForm } from "element-plus";
import { reactive, onUnmounted, onActivated, onDeactivated } from 'vue'
import useCurrentInstance from "./useCurrentInstance";


export default class baTable {
  public api

  public activate

  /* 表格状态-s */
  public table: Table = reactive({
    // 主键字段
    pk: 'id',
    // 列数据
    column: [],
    // 数据总量
    total: 0,
    // 字段搜索,快速搜索,分页等数据
    filter: {},
    // 表格加载状态
    loading: false,
    // 选中项
    selection: [],
  })
  /* 表格状态-e */

  /* 表单状态-s */
  public form: TableForm = reactive({
    // 表单ref，new时无需传递
    ref: undefined,
    // 当前操作:add=添加,edit=编辑
    operate: '',
    // 被操作数据ID,支持批量编辑:add=[0],edit=[1,2,n]
    operateIds: [],
    // 表单数据
    items: {},
    // 默认表单数据(添加)
    defaultItems: {},
    // 表格加载状态
    loading: false,
    // 提交按钮状态
    submitLoading: false,
    // 表单label宽度
    labelWidth: 160,
  })
  /* 表格状态-e */

  // BaTable前置处理函数列表(前置埋点)
  public before
  // BaTable后置处理函数列表(后置埋点)
  public after

  constructor(
    api: tableApi,
    table: Table,
    form: TableForm = {},
    before: TableBefore = {},
    after: TableAfter = {}
  ) {
    this.api = api
    this.table = Object.assign(this.table, table)
    this.form = Object.assign(this.form, form)
    this.before = before
    this.after = after
    this.activate = true
  }

  runBefore(funName: string, args: any = {}) {
    if (
      this.before &&
      this.before[funName] &&
      typeof this.before[funName] === 'function'
    ) {
      return this.before[funName]!({ ...args }) === false ? false : true
    }
    return true
  }

  runAfter(funName: string, args: any = {}) {
    if (
      this.after &&
      this.after[funName] &&
      typeof this.after[funName] == 'function'
    ) {
      return this.after[funName]!({ ...args }) === false ? false : true
    }
    return true
  }

  /* API请求方法-s */
  // 查看
  getIndex = () => {
    if (this.runBefore('getIndex') === false) return
    this.table.loading = true
    return this.api
    .index(this.table.filter)
    .then((res: any) => {
      // console.log(res)
      this.table.total = res.data.total
      this.table.data = res.data.list
      this.table.loading = false
      this.runAfter('getIndex', { res })
    })
    .catch(() => {
      this.table.loading = false
    })
  }

  // 删除
  postDel = (ids: string[]) => {
    if (this.runBefore('postDel', { ids }) === false) return
    this.api.del(ids).then((res: any) => {
      this.onTableHeaderAction('refresh', {})
      this.runAfter('postDel', { res })
    })
  }

  // 编辑
  requestEdit = (id: string) => {
    if (this.runBefore('requestEdit', { id }) === false) return
    this.form.loading = true
    this.form.items = {}
    return this.api
      .edit({
        [this.table.pk!]: id,
      })
      .then((res: any) => {
        this.form.loading = false
        this.form.items = res.data.row
        this.runAfter('requestEdit', { res })
      })
  }
  /* API请求方法-e */

  /**
   * 表格顶栏按钮事件响应
   * @param event 事件:refresh=刷新,edit=编辑,delete=删除,quick-search=快速查询
   * @param data 携带数据
   */
  onTableHeaderAction = (event: string, data: anyObj) => {
    if (this.runBefore('onTableHeaderAction', { event, data }) === false) return
    const actionFun = new Map([
      [
        'refresh',
        () => {
          this.table.data = []
          this.getIndex()
        },
      ],
      [
        'add',
        () => {
          this.toggleForm('add')
        },
      ],
    ])
    const action = actionFun.get(event) || actionFun.get('default')
    action!.call(this)
    return this.runAfter('onTableHeaderAction', { event, data })
  }

  /**
   * 表格内的事件响应
   * @param event 事件:selection-change=选中项改变,page-size-change=每页数量改变,current-page-change=翻页,sort-change=排序
   * @param data 携带数据
   */
  onTableAction = (event: string, data: anyObj) => {
    if (this.runBefore('onTableAction', { event, data }) === false) return
    const actionFun = new Map([
      [
        'selection-change',
        () => {
          this.table.selection = data as TableRow[]
        },
      ],
      [
        'page-size-change',
        () => {
          this.table.filter!.limit = data.size
          this.getIndex()
        },
      ],
      [
        'current-page-change',
        () => {
          this.table.filter!.page = data.page
          this.getIndex()
        },
      ],
      [
        'sort-change',
        () => {
          let newOrder = ''
          if (!data.prop) {
            newOrder = ''
          } else if (data.prop) {
            newOrder = data.prop + ',' + data.order
          }
          if (newOrder != this.table.filter!.order) {
            this.table.filter!.order = newOrder
            this.getIndex()
          }
        },
      ],
      [
        'default',
        () => {
          console.warn('未定义操作')
        },
      ],
    ])

    const action = actionFun.get(event) || actionFun.get('default')
    action!.call(this)
    return this.runAfter('onTableAction', { event, data })
  }

  /**
   * 打开表单
   * @param operate 操作:add=添加,edit=编辑
   * @param operateIds 被操作项的数组:add=[],edit=[1,2,...]
   */
   toggleForm = (operate = '', operateIds: string[] = []) => {
    if (this.runBefore('toggleForm', { operate, operateIds }) === false) return
    if (this.form.ref) {
      this.form.ref.resetFields()
    }
    if (operate == 'edit') {
      if (!operateIds.length) {
        return false
      }
      this.requestEdit(operateIds[0])
    } else if (operate == 'add') {
      this.form.items = Object.assign({}, this.form.defaultItems)
    }
    this.form.operate = operate
    this.form.operateIds = operateIds
    this.runAfter('toggleForm', { operate, operateIds })
  }

  onSubmit = (formEl: InstanceType<typeof ElForm> | undefined = undefined) => {
    if (
      this.runBefore('onSubmit', {
        formEl: formEl,
        operate: this.form.operate!,
        items: this.form.items!,
      }) === false
    )
      return

    Object.keys(this.form.items!).forEach((item) => {
      if (this.form.items![item] === null) {
        delete this.form.items![item]
      }
    })

    // 表单验证通过后执行的api请求操作
    const submitCallback = () => {
      this.form.submitLoading = true
      this.api
        .postData(this.form.operate!, this.form.items!)
        .then((res: any) => {
          this.onTableHeaderAction('refresh', {})
          this.form.submitLoading = false
          this.form.operateIds?.shift()
          if (this.form.operateIds!.length > 0) {
            this.toggleForm('edit', this.form.operateIds)
          } else {
            this.toggleForm()
          }
          this.runAfter('onSubmit', { res })
        })
        .catch(() => {
          this.form.submitLoading = false
        })
    }

    if (formEl) {
      this.form.ref = formEl
      formEl.validate((valid) => {
        if (valid) {
          submitCallback()
        }
      })
    } else {
      submitCallback()
    }
  }

  mount = () => {
    if (this.runBefore('mount') === false) return
    this.activate = true
    const { proxy } = useCurrentInstance()
    /**
     * 表格内的按钮响应
     * @param name 按钮name
     * @param row 被操作行数据
     */
    proxy.eventBus.on(
      'onTableButtonClick',
      (data: { name: string; row: TableRow }) => {
        if (!this.activate) return
        if (data.name == 'edit') {
          this.toggleForm('edit', [data.row[this.table.pk!]])
        } else if (data.name == 'delete') {
          this.postDel([data.row[this.table.pk!]])
        }
      }
    )
    
    onUnmounted(() => {
      // 考虑到 keepalive 在 onMounted、onActivated 时注册事件；onUnmounted、onDeactivated 时注销事件，但并不是最方便的方案，且注销后在全局事件管理中本来就有留存
      // 干脆，不off掉事件，改用 this.activate 来决定事件是否执行
      this.activate = false
      this.runAfter('mount')
    })

    onActivated(() => {
      this.activate = true
    })

    onDeactivated(() => {
      this.activate = false
    })
  }
}