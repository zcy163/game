<template>
  <el-config-provider :locale="lang" :size="size" :z-index="zIndex">
    <router-view></router-view>
  </el-config-provider>
</template>


<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router'
import { setTitleFromRoute } from '@/utils/common'
import { ElConfigProvider } from 'element-plus'
import { useConfig } from '@/stores/config';
import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';
// Element
// import lang from 'element-plus/dist/locale/en.mjs'
import lang from 'element-plus/dist/locale/zh-cn.mjs'

const route = useRoute()
const config = useConfig();

const zIndex = ref<number>(3000)
const size = ref<string>('small')

// 默认使用英文模式
config.setLang('en');
// Vant
Locale.use('en-US', enUS);

// 计算 font-size 
window.calcFontSize = () => {
  document.documentElement.style.fontSize =
    Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    ) / 10 + "px";
};
window.calcFontSize();

// 监听路由变化时更新浏览器标题
watch(
  () => route.path,
  () => {
    setTitleFromRoute()
  }
)

</script>

<style scoped lang="scss"></style>
