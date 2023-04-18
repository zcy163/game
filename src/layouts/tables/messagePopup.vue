<template>
  <!-- 对话框表单 -->
  <el-dialog
    :close-on-click-modal="false"
    :model-value="baTable.form.operate ? true : false"
    @close="baTable.toggleForm"
  >
    <template #header>
      <div class="title">
        {{ baTable.form.operate || '.' }}
      </div>
    </template>
    <el-scrollbar
      v-loading="baTable.form.loading"
      class="ba-table-form-scrollbar"
    >
      <div
        class="ba-operate-form"
        :class="'ba-' + baTable.form.operate + '-form'"
        :style="'width: calc(100% - ' + baTable.form.labelWidth! / 2 + 'px)'"
      >
        <el-form
          v-if="!baTable.form.loading"
          ref="formRef"
          :model="baTable.form.items"
          label-position="right"
          :label-width="baTable.form.labelWidth + 'px'"
          :rules="rules"
          @keyup.enter="baTable.onSubmit(formRef)"
        >
          <el-form-item prop="user" label="用户名">
            <el-select v-model="baTable.form.items!.user" placeholder="请选择用户">
              <template :key="index" v-for="user, index in userList">
                <el-option :label="user.username" :value="user.id" />
              </template>
            </el-select>
          </el-form-item>
          <el-form-item prop="text_message" label="消息文本">
            <el-input
              v-model="baTable.form.items!.text_message"
              type="textarea"
              :rows="10"
              placeholder="请输入消息文本"
            />
          </el-form-item>
        </el-form>
      </div>
    </el-scrollbar>
    <template #footer>
      <div
        :style="'width: calc(100% - ' + baTable.form.labelWidth! / 1.8 + 'px)'"
      >
        <el-button @click="baTable.toggleForm('')">取消</el-button>
        <el-button
          :loading="baTable.form.submitLoading"
          type="primary"
          @click="baTable.onSubmit(formRef)"
        >
          保存
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, reactive, inject, ref, onMounted, nextTick } from 'vue'
import type baTableClass from '@/utils/baTable'
import type { ElForm, FormItemRule } from 'element-plus';
import { useAdminInfo } from '@/stores/adminInfo';
import { tableApi } from '@/api/common';
import { userUser } from '@/api/controllerUrls';

const adminInfo = useAdminInfo();
const baTable = inject('baTable') as baTableClass;

const formRef = ref<InstanceType<typeof ElForm>>()
const rules: Partial<Record<string, FormItemRule[]>> = reactive({
  // user: [{ required: true }],
  text_message: [{ required: true }],
})

const userList = ref<any>([]);

onMounted(() => {
  new tableApi(userUser, true).index().then((res) => {
    userList.value = res.data.list;
    baTable.form.items!.user = userList.value[0].id;
  }).catch(() => {})
})


</script>

<style scoped lang="scss">
.title {
  color: #000;
}
</style>
