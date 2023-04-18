<template>
  <div class="admin-login">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Username" prop="username">
        <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Login  
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { postLogin } from '@/api/common';
import { useAdminInfo } from '@/stores/adminInfo';

const emits = defineEmits(['pageRefresh'])
const adminInfo = useAdminInfo();
const ruleFormRef = ref<FormInstance>()

const validateUser = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the username'))
  } else {
    callback()
  }
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}

const ruleForm = reactive<UserFormData>({
  username: '',
  password: '',
  code: ''
})

const rules = reactive({
  username: [{ validator: validateUser, require: true }],
  password: [{ validator: validatePass, require: true }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      if (ruleForm.username !== 'admin') return
      // console.log('submit!')
      // 登录接口
      postLogin(ruleForm)
      .then((res) => {
        adminInfo.dataFill(res.data.userinfo)
      })
      .catch((err) => {})
      .finally(() => {
        emits('pageRefresh');
      });
    } else {
      // console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="scss">
.admin-login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo-ruleForm {
  width: 400px;
}
</style>
