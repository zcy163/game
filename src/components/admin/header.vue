<template>
  <el-header class="header" style="--bg-color: #fff">
    <div class="header-icons">
      <img style="height: 80%" src="@/assets/logo.png" alt="" />
      <span style="margin-left: 2px">后台管理</span>
    </div>
    <!-- <el-button type="primary" @click="logoutHandle">退出</el-button> -->
  </el-header>
</template>

<script setup lang="ts">
import router from '@/router/index'
import { useAdminInfo } from '@/stores/adminInfo'
const adminInfo = useAdminInfo()
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: var(--bg-color);
  color: #000;
  .header-icons {
    height: 60%;
    display: flex;
    align-items: center;
    font-size: 18px;
    padding-left: 5px;
    > span {
      margin-left: 5px;
    }
  }
}
</style>
