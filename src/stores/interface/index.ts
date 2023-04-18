import { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'

export interface UserInfo {
  id: number
  name: string
  token: string
  refreshToken: string
  username: string
  password: string
  create_time: string
  integral_number: string
}

export interface AdminInfo {
  id: number
  name: string
  token: string
  refreshToken: string
  username: string
  password: string
  create_time: string
  integral_number: string
}

export interface Layout {
  showDrawer: boolean
  shrink: boolean
  layoutMode: string
  mainAnimation: string
  isDark: boolean
}

export interface MemberCenter {
  open: boolean
  layoutMode: string
  activeRoute: RouteRecordRaw | RouteLocationNormalized | null
  viewRoutes: RouteRecordRaw[]
  showHeadline: boolean
  authNode: Map<string, string[]>
  shrink: boolean
  menuExpand: boolean
}
