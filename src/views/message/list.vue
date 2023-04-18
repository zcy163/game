<template>
  <div>
    <!-- 表格顶部菜单 -->
    <TableHeader :buttons="buttons" @action="baTable.onTableHeaderAction" />
    <!-- 表格 -->
    <!-- 要使用`el-table`组件原有的属性，直接加在Table标签上即可 -->
    <Table @action="baTable.onTableAction" />
    <!-- 表单 -->
    <PopupForm />
  </div>
</template>

<script setup lang="ts">

import Table from '@/layouts/tables/index.vue'
import TableHeader from '@/layouts/tables/header.vue'
import PopupForm from '@/layouts/tables/messagePopup.vue'
import { gamesMessage } from '@/api/controllerUrls';
import { tableApi } from '@/api/common';
import baTableClass from '@/utils/baTable'
import { provide, reactive } from 'vue';

const buttons = reactive<HeaderOptButton[]>([
  'refresh',
  'add',
  // 'edit',
  // 'delete',
])

const baTable = new baTableClass(new tableApi(gamesMessage), {
  filter: {},
  column: [
    {
      label: 'id',
      prop: 'id'
    },
    {
      label: '用户',
      prop: 'name'
    },
    {
      label: '文本',
      prop: 'text_message'
    },
    {
      label: 'operator',
      width: '180px'
    },
  ]
})

baTable.mount()
baTable.getIndex()

provide('baTable', baTable)

</script>