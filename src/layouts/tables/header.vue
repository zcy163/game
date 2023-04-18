<template>
  <!-- 操作按钮组 -->
  <div class="table-header-index">
    <el-button
      v-if="props.buttons.includes('refresh')"
      class="table-header-operate"
      type="success"
      @click="onAction('refresh', { loading: true })"
    >
      <span>刷新</span>
    </el-button>
    <el-button
      v-if="props.buttons.includes('add')"
      class="table-header-operate"
      type="warning"
      @click="onAction('add')"
    >
      <span>新增</span>
    </el-button>
  </div>
</template>

<script setup lang="ts">

import { computed, reactive, inject } from 'vue'
import type baTableClass from '@/utils/baTable'

const baTable = inject('baTable') as baTableClass

const emits = defineEmits<{
  (e: 'action', event: string, data: anyObj): void
}>()

interface Props {
  buttons: HeaderOptButton[]
  quickSearchPlaceholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  buttons: () => {
    return ['refresh', 'add', 'edit', 'delete']
  },
  quickSearchPlaceholder: '',
})

const onAction = (event: string, data: anyObj = {}) => {
  emits('action', event, data)
}

</script>

<style scoped lang="scss">
.table-header-index {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  background-color: var(--ba-bg-color-overlay);
  border: 1px solid var(--ba-border-color);
  border-bottom: none;
  font-size: 14px;
  padding: 10px;
  .table-header-operate-text {
    margin-left: 6px;
  }
  .table-header-operate .icon {
    font-size: 14px !important;
  }
  .el-button.is-disabled {
    .icon {
      color: var(--el-button-disabled-text-color) !important;
    }
  }
}
.mlr-12 {
  margin-left: 12px;
}
.mlr-12 + .el-button {
  margin-left: 12px;
}
.table-search {
  display: flex;
  margin-left: auto;
  .quick-search {
    width: auto;
  }
}
.table-search-button-group {
  display: flex;
  margin-left: 12px;
  border: 1px solid var(--el-border-color);
  border-radius: var(--el-border-radius-base);
  overflow: hidden;
  button:focus,
  button:active {
    background-color: var(--ba-bg-color-overlay);
  }
  button:hover {
    background-color: var(--el-color-info-light-7);
  }
  .table-search-button-item {
    border: none;
    border-radius: 0;
  }
  .el-button + .el-button {
    margin: 0;
  }
  .right-border {
    border-right: 1px solid var(--el-border-color);
  }
}

html.dark {
  .table-search-button-group {
    button:focus,
    button:active {
      background-color: var(--el-color-info-dark-2);
    }
    button:hover {
      background-color: var(--el-color-info-light-7);
    }
    button {
      background-color: #898a8d;
      el-icon {
        color: white !important;
      }
    }
  }
}
</style>
