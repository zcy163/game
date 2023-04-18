import { nextTick, provide, ref } from 'vue'
import type { App } from 'vue'
import router from '@/router/index'
import { useUserInfo } from "@/stores/userInfo"
import { useAdminInfo } from '@/stores/adminInfo'
import Icon from '@/components/icon/index.vue'
import * as elIcons from '@element-plus/icons-vue'


export function registerIcons(app: App) {
  /*
   * 全局注册 Icon
   * 使用方式: <Icon name="name" size="size" color="color" />
   * 详见<待完善>
   */
  app.component('Icon', Icon)

  /*
   * 全局注册element Plus的icon
   */
  const icons = elIcons as any
  for (const i in icons) {
    app.component(`el-icon-${icons[i].name}`, icons[i])
  }
}

// 验证用户是否登录
export const checkUserStatus = (): boolean => {
  const userInfo = useUserInfo();
  return userInfo.getToken() ? true : false;
}

// 验证管理员是否登录
export const checkAdminStatus = (): boolean => {
  const adminInfo = useAdminInfo();
  return adminInfo.getToken() ? true : false;
}

/**
 * 设置浏览器标题
 */
 export function setTitleFromRoute() {
  if (typeof router.currentRoute.value.meta.title != 'string') {
    return
  }
  nextTick(() => {
    document.title = `${router.currentRoute.value.meta.title}`
  })
}

/**
 * 是否是外部链接
 * @param path
 */
 export function isExternal(path: string): boolean {
  return /^(https?|ftp|mailto|tel):/.test(path)
}

/**
 * 防抖
 * @param fn 执行函数
 * @param ms 间隔毫秒数
 */
 export const debounce = (fn: Function, ms: number) => {
  return (...args: any[]) => {
    if (window.lazy) {
      clearTimeout(window.lazy)
    }
    window.lazy = setTimeout(() => {
      fn(...args)
    }, ms)
  }
}

export const format_with_mod = (number: number) => {
  let n = number;
  let r = '';
  let temp;
  let mod;
  do {
    // 求模的值， 用于获取高三位，这里可能有小数
    mod = n % 1000;
    // 值是不是大于1，是继续的条件
    n = n / 1000;
    // 高三位
    temp = ~~mod;
    // 1.填充: n > 1 循环未结束， 就要填充为比如 1 => 001
    // 不然temp = ~~mod的时候, 1 001， 就会变成 "11"
    // 2.拼接“,”
    r = (n >= 1 ? `${temp}`.padStart(3, '0') : temp) + (!!r ? ',' + r : '');
  } while (n >= 1);
  const strNumber = number + '';
  let index = strNumber.indexOf('.');
  // 拼接小数部分
  if (index >= 0) {
    r += strNumber.substring(index);
  }
  return r;
}

// 充值
export const goRecharge = () => {
  router.push({
    name: 'Recharge'
  })
}

// 修改密码
export const goChangepass = () => {
  router.push({
    name: 'Changepass'
  })
}

// 提现
export const goWithdrawal = () => {
  router.push({
    name: 'Withdrawal'
  })
}

// 提现列表
export const goWithdrawallist = () => {
  router.push({
    name: 'Withdrawallist'
  })
}
