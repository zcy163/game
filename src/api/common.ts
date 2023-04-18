import createAxios from '@/utils/axios'
import { userUser } from '@/api/controllerUrls'

export function index(controllerUrl: string) {
  return createAxios({
    url: controllerUrl + 'index',
    method: 'get',
  })
}

export const postLogin = (data: UserFormData) => {
  return createAxios(
    {
      url: userUser + 'login',
      method: 'post',
      data: data,
    },
    {
      showSuccessMessage: true,
    }
  ) as ApiPromise
}

export const postRegister = (data: UserFormData) => {
  return createAxios(
    {
      url: userUser + 'add',
      method: 'post',
      data: data,
    },
    {
      showSuccessMessage: true,
    }
  ) as ApiPromise
}

export const postLogout = (data: anyObj) => {
  return createAxios(
    {
      url: userUser + 'logout',
      method: 'post',
      data: data,
    },
    {
      showSuccessMessage: true,
    }
  ) as ApiPromise
}

/**
 * 生成一个控制器的：增、删、改、查、排序的操作url
 */
export class tableApi {
  private controllerUrl
  public actionUrl
  public hideLoading

  constructor(controllerUrl: string, hideLoading: boolean = false) {
    this.controllerUrl = controllerUrl
    this.hideLoading = hideLoading
    this.actionUrl = new Map([
      ['add', `${controllerUrl}add`],
      ['del', `${controllerUrl}del`],
      ['index', `${controllerUrl}index`],
      ['edit', `${controllerUrl}edit`],
    ])
  }

  index(filter: anyObj = {}): ApiPromise<TableDefaultData> {
    return createAxios(
      {
        url: this.actionUrl.get('index'),
        method: 'get',
        params: filter,
      },
      {
        loading: !this.hideLoading
      }
    ) as ApiPromise
  }

  edit(params: anyObj) {
    return createAxios(
      {
        url: this.actionUrl.get('edit'),
        method: 'get',
        params: params,
      },
      {
        loading: !this.hideLoading
      }
    ) as ApiPromise
  }

  del(ids: string[]): ApiPromise<TableDefaultData> {
    return createAxios(
      {
        url: this.actionUrl.get('del'),
        method: 'post',
        data: {
          id: ids,
        },
      },
      {
        showSuccessMessage: true,
        loading: !this.hideLoading
      }
    ) as ApiPromise
  }

  postData(action: string, data: anyObj) {
    if (!this.actionUrl.has(action)) {
      throw new Error('action 不存在！')
    }
    return createAxios(
      {
        url: this.actionUrl.get(action),
        method: 'post',
        params: { id: data.id },
        data: data,
      },
      {
        showSuccessMessage: true,
        loading: !this.hideLoading
      }
    ) as ApiPromise
  }

}
