
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NProgress from '@/utils/nporgress'
import { loading } from '@/utils/loading'
import { gameRoutes } from './game'
import { AdminRoutes } from './admin'

/**
 * 定义路由模块
 */
const routes: Array<RouteRecordRaw> = [
  ...gameRoutes,
  ...AdminRoutes,

]

/**
 * 定义返回模块
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (!window.existLoading) {
    loading.show()
    window.existLoading = true
  }
  next()
})

// 路由加载后
router.afterEach(() => {
  if (window.existLoading) {
    loading.hide()
  }
  NProgress.done()
})

export default router