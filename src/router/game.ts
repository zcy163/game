import { RouteRecordRaw } from 'vue-router';


/**
 * 定义路由模块
 */
export const gameRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'GameHome',
    component: () => import('@/views/game/home.vue'),
    meta: {
      title: '游戏首页'
    }
  },
  {
    path: '/login',
    name: 'GameLogin',
    component: () => import('@/views/game/login.vue'),
    meta: {
      title: '游戏登录'
    }
  },
  {
    path: '/game',
    name: 'GameIndex',
    component: () => import('@/views/game/game.vue'),
    meta: {
      title: '游戏页面'
    }
  },
  {
    path: '/recharge',
    name: 'Recharge',
    component: () => import('@/views/game/recharge.vue'),
  },
  {
    path: '/changepass',
    name: 'Changepass',
    component: () => import('@/views/game/changepass.vue'),
  },
  {
    path: '/withdrawal',
    name: 'Withdrawal',
    component: () => import('@/views/game/withdrawal.vue'),
  },
  {
    path: '/withdrawallist',
    name: 'Withdrawallist',
    component: () => import('@/views/game/withdrawallist.vue'),
  }
]
