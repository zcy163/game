import axios, { AxiosPromise, Method } from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { useAdminInfo } from '@/stores/adminInfo';
import { useUserInfo } from '@/stores/userInfo';
import { useConfig } from '@/stores/config';
import { loading } from '@/utils/loading'
import Toast from '@/utils/toast';

window.requests = []
window.tokenRefreshing = false
const pendingMap = new Map()
const loadingInstance: LoadingInstance = {
  target: loading,
  count: 0,
}

export const getUrl = (): string => {
  const value: string = import.meta.env.VITE_AXIOS_BASE_URL as string
  return value == 'getCurrentDomain'
    ? window.location.protocol + '//' + window.location.host
    : value
}

export const getUrlPort = (): string => {
  const url = getUrl()
  return new URL(url).port
}

const createAxios = (
    axiosConfig: AxiosRequestConfig,
    options: Options = {}
  ): ApiPromise | AxiosPromise => {
    
    const config = useConfig()
    const adminInfo = useAdminInfo()
    const userInfo = useUserInfo()

    const Axios = axios.create({
      baseURL: getUrl(),
      timeout: 1000 * 10,
      headers: {
        'Content-Type': 'application/json',
        'think-lang': config.lang.defaultLang,
        // server: true,
      },
    });

    options = Object.assign(
      {
        CancelDuplicateRequest: true, // 是否开启取消重复请求, 默认为 true
        loading: true, // 是否开启loading层效果, 默认为false
        reductDataFormat: true, // 是否开启简洁的数据结构响应, 默认为true
        showErrorMessage: true, // 是否开启接口错误信息展示,默认为true
        showCodeMessage: true, // 是否开启code不为1时的信息提示, 默认为true
        showSuccessMessage: false, // 是否开启code为1时的信息提示, 默认为false
      },
      options
    );

    // 请求拦截
    Axios.interceptors.request.use(
      (config) => {
        options.loading && loadingInstance.target.show()
        removePending(config)
        options.CancelDuplicateRequest && addPending(config)
        // 创建loading实例
        if (options.loading) loadingInstance.count++
        // 自动携带token
        if (config.headers) {
          const token = userInfo.getToken() || adminInfo.getToken()
          if (token) config.headers['Authorization'] = `Token ${token}`
        }
        return config
      }
    );

    // 响应拦截
    Axios.interceptors.response.use(
      (response) => {
        if (response.status === 401) {
          userInfo.$reset();
          adminInfo.$reset();
          Toast('Token失效，请重新登录。');
          return Promise.reject()
        }
        removePending(response.config)
        options.loading && closeLoading(options) // 关闭loading
        if (
          options.showCodeMessage &&
          response.data &&
          Number(response.data.code) !== 0
        ) {
          // code不等于0, 页面then内的具体逻辑就不执行了
          Toast(response.data.msg);
          return Promise.reject(response.data)
        }
        return options.reductDataFormat ? response.data : response
      },
      (error) => {
        error.config && removePending(error.config)
        options.loading && closeLoading(options) // 关闭loading
        // options.showErrorMessage && httpErrorStatusHandle(error) // 处理错误状态码
        return Promise.reject(error) // 错误继续返回给到具体页面
      }
    )

    return Axios(axiosConfig);

  };

export default createAxios;

/**
 * 关闭Loading层实例
 */
 function closeLoading(options: Options) {
  if (options.loading && loadingInstance.count > 0) loadingInstance.count--
  if (loadingInstance.count === 0) {
    loadingInstance.target.hide()
  }
}

/**
 * 储存每个请求的唯一cancel回调, 以此为标识
 */
 function addPending(config: AxiosRequestConfig) {
  const pendingKey = getPendingKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel)
      }
    })
}

/**
 * 删除重复的请求
 */
 function removePending(config: AxiosRequestConfig) {
  const pendingKey = getPendingKey(config)
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey)
    cancelToken(pendingKey)
    pendingMap.delete(pendingKey)
  }
}

/**
 * 生成每个请求的唯一key
 */
 function getPendingKey(config: AxiosRequestConfig) {
  let { data } = config
  const { url, method, params, headers } = config
  if (typeof data === 'string') data = JSON.parse(data) // response里面返回的config.data是个字符串对象
  return [
    url,
    method,
    headers && headers.batoken ? headers.batoken : '',
    headers && headers['ba-user-token'] ? headers['ba-user-token'] : '',
    JSON.stringify(params),
    JSON.stringify(data),
  ].join('&')
}