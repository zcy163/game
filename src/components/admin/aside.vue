<template>
  <div class="aside">
    <div
      class="menu-operate"
      @click="isCollapse = !isCollapse"
    >
      <!-- <div>百里明月</div> -->
      <Icon
        :name="`el-icon-${isCollapse ? 'Fold' : 'Expand'}`"
        color="#409eff"
        size="20px"
      />
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="nowPath"
      :collapse="isCollapse"
    >
      <el-sub-menu v-for="item in menu" :key="item.title" :index="item.title">
        <template #title>
          <Icon v-if="item.icon" :name="`el-icon-${item.icon}`" />
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="(itemc, index) in item.children"
          :key="index"
          :index="itemc.path"
          @click="pathItem(itemc.path)"
        >
          <Icon v-if="itemc.icon" :name="`el-icon-${itemc.icon}`" />
          {{ itemc.title }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import router from '@/router/index'
import { useRoute } from 'vue-router'

const route = useRoute()

const menu = reactive([
  {
    title: '控制台',
    icon: 'Menu',
    children: [
      { path: '/admin/dashboard/overview', title: '概览', icon: 'House' },
    ],
  },
  {
    title: '会员管理',
    icon: 'Avatar',
    children: [
      { path: '/admin/user/list', title: '会员管理', icon: 'House' },
      // { path: '/admin/user/a', title: '会员分组管理', icon: 'House' },
      // { path: '/admin/user/b', title: '会员规则管理', icon: 'House' },
    ],
  },
  {
    title: '数据管理',
    icon: 'Management',
    children: [
      { path: '/admin/data/history', title: '历史记录', icon: 'House' },
      { path: '/admin/data/future', title: '未来记录', icon: 'House' },
    ],
  },
  {
    title: '消息管理',
    icon: 'BellFilled',
    children: [
      { path: '/admin/message/list', title: '消息列表', icon: 'House' },
    ],
  },
  {
    title: '提现管理',
    icon: 'List',
    children: [
      { path: '/admin/withdrawal/list', title: '提现列表', icon: 'House' },
    ],
  },
  {
    title: '激活码管理',
    icon: 'QuestionFilled',
    children: [
      { path: '/admin/code/list', title: '激活码列表', icon: 'House' },
    ],
  },
  {
    title: '其他',
    icon: 'List',
    children: [],
  },
])
const isCollapse = ref(false)
const nowPath = ref(menu[0]?.children[0]?.path)
const nowPathList = ref<string[]>([])

const pathItem = (path: string) => {
  if (!nowPathList.value.includes(path)) nowPathList.value.push(path)
  if (nowPath.value !== path) router.push({ path: path })
  nowPath.value = path
}

onMounted(() => {
  nowPath.value = route.path
})
</script>

<style lang="scss" scoped>
.aside {
  max-width: 260px;
  background-color: #fff;
}
:deep(.el-menu) {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  // height: 100%;
}
.menu-operate {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
}
</style>
