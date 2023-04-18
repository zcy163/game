<template>
  <el-container style="height: 100%">
    <Aside />
    <el-container direction="vertical">
      <Header />
      <Main />
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Aside from '@/components/admin/aside.vue'
import Header from '@/components/admin/header.vue'
import Main from '@/components/admin/main.vue'
import 'element-plus/theme-chalk/display.css'
</script>
