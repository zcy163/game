import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { STORE_CONFIG } from './constant/checkKey'
import { Layout } from '@/stores/interface'

export const useConfig = defineStore(
  'config',
  () => {
    const layout: Layout = reactive({
      /* 全局 */
      showDrawer: false,
      // 是否收缩布局(小屏设备)
      shrink: false,
      // 后台布局方式，可选值<Default|Classic|Streamline>
      layoutMode: 'Default',
      // 后台主页面切换动画，可选值<slide-right|slide-left|el-fade-in-linear|el-fade-in|el-zoom-in-center|el-zoom-in-top|el-zoom-in-bottom>
      mainAnimation: 'slide-right',
      // 是否暗黑模式
      isDark: false,
    })
    const lang = reactive({
      // 默认语言，可选值<zh-cn|en>
      defaultLang: 'en',
      // 当在默认语言包找不到翻译时，继续在 fallbackLang 语言包内查找翻译
      fallbackLang: 'en',
      // 支持的语言列表
      langArray: [
        { name: 'zh-cn', value: '中文简体' },
        { name: 'en', value: 'English' },
      ],
    })
    function setLang(value: string) {
      lang.defaultLang = value
    }
    return { layout, lang, setLang }
  },
  {
    persist: {
      key: STORE_CONFIG,
    },
  }
)
