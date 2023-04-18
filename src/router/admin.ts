import { RouteRecordRaw } from 'vue-router';

/**
 * 后台用户路由
 */
const userRouters = [
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: () => import('@/layouts/dashboard.vue'),
    meta: {
      title: '后台管理'
    },
    children: [
      {
        path: '/admin/dashboard/overview',
        name: 'dashboardOverview',
        component: () => import('@/views/dashboard/overview.vue'),
        meta: {
          title: '控制台',
        },
      },
    ]
  },
  {
    path: '/admin/user',
    name: 'AdminUser',
    component: () => import('@/layouts/user.vue'),
    meta: {
      title: '后台管理'
    },
    children: [
      {
        path: '/admin/user/list',
        name: 'userList',
        component: () => import('@/views/user/list.vue'),
        meta: {
          title: '控制台',
        },
      },
    ]
  }
]

/**
 * 数据路由
 */
const dataRouters = [
  {
    path: '/admin/data',
    name: 'AdminData',
    component: () => import('@/layouts/data.vue'),
    meta: {
      title: '数据管理'
    },
    children: [
      {
        path: '/admin/data/history',
        name: 'dataHistory',
        component: () => import('@/views/data/history.vue'),
        meta: {
          title: '历史数据',
        },
      },
      {
        path: '/admin/data/future',
        name: 'dataFuture',
        component: () => import('@/views/data/future.vue'),
        meta: {
          title: '未来数据',
        },
      },
    ]
  }
]

/**
 * 消息路由
 */
 const messageRouters = [
  {
    path: '/admin/message',
    name: 'AdminMessage',
    component: () => import('@/layouts/message.vue'),
    meta: {
      title: '消息管理'
    },
    children: [
      {
        path: '/admin/message/list',
        name: 'messageList',
        component: () => import('@/views/message/list.vue'),
        meta: {
          title: '消息列表',
        },
      },
    ]
  }
]

// 提现路由
const withdrawalRouters = [
  {
    path: '/admin/withdrawal',
    name: 'AdminWithdrawal',
    component: () => import('@/layouts/withdrawal.vue'),
    meta: {
      title: '提现管理'
    },
    children: [
      // {
      //   path: '/admin/withdrawal/detault',
      //   name: 'withdrawalDefault',
      //   component: () => import('@/views/withdrawal/detault.vue'),
      //   meta: {
      //     title: '提现操作',
      //   },
      // },
      {
        path: '/admin/withdrawal/list',
        name: 'withdrawalList',
        component: () => import('@/views/withdrawal/list.vue'),
        meta: {
          title: '提现列表',
        },
      },
    ]
  }
]

// 激活码路由管理
const codeRouters = [
  {
    path: '/admin/code',
    name: 'AdminCode',
    component: () => import('@/layouts/code.vue'),
    meta: {
      title: '激活码管理'
    },
    children: [
      {
        path: '/admin/code/list',
        name: 'codelList',
        component: () => import('@/views/code/list.vue'),
        meta: {
          title: '激活码列表',
        },
      },
    ]
  }
]

/**
 * 定义路由模块
 */
export const AdminRoutes: Array<RouteRecordRaw> = [
  {
    path: '/admin',
    name: 'AdminHome',
    component: () => import('@/views/admin/home.vue'),
    meta: {
      title: '后台首页'
    },
    children: [
      ...userRouters,
      ...dataRouters,
      ...messageRouters,
      ...withdrawalRouters,
      ...codeRouters
    ]
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('@/views/admin/login.vue'),
    meta: {
      title: '后台登录'
    }
  },
  {
    path: '/admin/index',
    name: 'AdminIndex',
    component: () => import('@/views/admin/index.vue'),
    meta: {
      title: '后台管理'
    }
  }
]
