<template>
  <el-main class="layout-main">
    <router-view v-slot="{ Component }">
      <transition :name="config.layout.mainAnimation" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </el-main>
</template>

<script setup lang="ts">
import { useConfig } from '@/stores/config'
const config = useConfig()
</script>

<style scoped lang="scss">
.layout-main {
  background-color: #f5f5f5;
}
</style>
