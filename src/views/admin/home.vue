<template>
  <transition name="el-fade-in-linear">
    <div v-show="show" class="transition-box">
      <component :is="currentPage" @pageRefresh="pageRefresh" />
    </div>
  </transition>
</template>

<script setup lang="ts">

import { ref, computed, markRaw, defineAsyncComponent } from 'vue';
import { checkAdminStatus } from '@/utils/common';

const loginStatus = ref<boolean>(checkAdminStatus());
const show = ref<boolean>(true);

const pageRefresh = () => {
  loginStatus.value = checkAdminStatus();
}

const currentPage = computed(() => {
  // 后台管理
  if (loginStatus.value) return markRaw(defineAsyncComponent(() => import("./index.vue")));
  // 登录界面
  return markRaw(defineAsyncComponent(() => import("./login.vue")));
});

</script>

<style scoped lang="scss">
.transition-box {
  width: 100%;
  height: 100%;
}
</style>