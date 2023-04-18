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
          <el-form-item prop="id" label="用户ID">
            <el-input
              v-model="baTable.form.items!.id"
              type="string"
              placeholder="自动生成"
              disabled
            />
          </el-form-item>
          <el-form-item prop="username" label="用户名">
            <el-input
              v-model="baTable.form.items!.username"
              type="string"
              placeholder="请输入用户名"
              :disabled="baTable.form.operate === 'edit'"
            />
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input
              v-model="baTable.form.items!.password"
              type="password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item prop="integral_number" label="积分">
            <el-input
              v-model="baTable.form.items!.integral_number"
              type="number"
              placeholder="积分"
            />
          </el-form-item>
          <el-form-item prop="call_number" label="手机号">
            <el-input
              v-model="baTable.form.items!.call_number"
              type="string"
              placeholder="手机号"
            />
          </el-form-item>
          <el-form-item prop="email_address" label="邮箱">
            <el-input
              v-model="baTable.form.items!.email_address"
              type="string"
              placeholder="邮箱"
            />
          </el-form-item>
          <el-form-item prop="name" label="姓名">
            <el-input
              v-model="baTable.form.items!.name"
              type="string"
              placeholder="姓名"
            />
          </el-form-item>
          <el-form-item prop="id_card_number" label="身份证号">
            <el-input
              v-model="baTable.form.items!.id_card_number"
              type="string"
              placeholder="身份证号"
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
import { computed, reactive, inject, ref } from 'vue'
import type baTableClass from '@/utils/baTable'
import type { ElForm, FormItemRule } from 'element-plus';


const baTable = inject('baTable') as baTableClass

const formRef = ref<InstanceType<typeof ElForm>>()
const rules: Partial<Record<string, FormItemRule[]>> = reactive({
  username: [{ required: true }],
  password: [{ required: true }],
  integral_number: [{ required: true }],
})


</script>

<style scoped lang="scss">
.title {
  color: #000;
}
</style>
