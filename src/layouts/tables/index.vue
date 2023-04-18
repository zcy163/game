<template>
  <div>
    <el-table
      class="ba-data-table w100"
      header-cell-class-name="table-header-cell"
      row-class-name="table-row"
      :data="filterTableData"
      v-loading="baTable.table.loading"
      :border="true"
      stripe
    >
      <template v-for="(item, key) in baTable.table.column" :key="key">
        <el-table-column v-if="item.label === 'operator'" align="right" :width="item.width">
          <template #header>
            <el-input v-model="search" size="small" placeholder="根据用户名搜索" />
          </template>
          <template #default="scope">
            <el-button
              class="table-operate table-row-edit"
              type="primary"
              @click="onButtonClick('edit', scope.row)"
            >
              编辑
            </el-button>
            <el-button
              class="table-operate table-row-edit"
              type="danger"
              @click="onButtonClick('delete', scope.row)"
              :disabled="scope.row?.username === 'admin'"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
        <el-table-column v-else :label="item.label" :prop="item.prop" />
      </template>
    </el-table>
    <div v-if="props.pagination && baTable.table.total" class="table-pagination">
      <el-pagination
        v-model:currentPage="state.currentPage"
        v-model:page-size="state.pageSize"
        :page-sizes="[10, 20, 50, 100]"
        background
        layout="sizes,total, ->, prev, pager, next, jumper"
        :total="baTable.table.total"
        @size-change="onTableSizeChange"
        @current-change="onTableCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import { computed, ref, inject, reactive } from 'vue'
import baTableClass from '@/utils/baTable'
import useCurrentInstance from '@/utils/useCurrentInstance';

const { proxy } = useCurrentInstance()

const props = defineProps({
  pagination: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['action'])
const baTable = inject('baTable') as baTableClass

const search = ref('')
const state = reactive({
  currentPage: 1,
  pageSize: 10,
})

const onButtonClick = (name: string, row: TableRow) => {
  proxy.eventBus.emit('onTableButtonClick', {
    name: name,
    row: row,
  })
}

const filterTableData = computed(() =>
  baTable.table.data?.filter(
    (data: TableRow) =>
      !search.value ||
      data.username.toLowerCase().includes(search.value.toLowerCase())
  )
)

const onTableSizeChange = (val: number) => {
  state.pageSize = val
  emits('action', 'page-size-change', {
    size: val,
  })
}

const onTableCurrentChange = (val: number) => {
  state.currentPage = val
  emits('action', 'current-page-change', {
    page: val,
  })
}

</script>

<style scoped lang="scss">
.ba-data-table :deep(.el-button + .el-button) {
  margin-left: 6px;
}
.ba-data-table :deep(.table-header-cell) .cell {
  height: 40px;
  color: var(--el-text-color-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
}
.ba-data-table :deep(.table-row) {
  height: 40px;
}
.table-pagination {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  background-color: var(--ba-bg-color-overlay);
  padding: 20px 10px;
  :deep(.el-pagination__rightwrapper) {
    display: flex;
    justify-content: center;
  }
}
</style>