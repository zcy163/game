<template>
  <div class="login-box">
    <van-form ref="userFormRef" @submit="onSubmit" :validate-first="true">
      <van-cell-group inset>
        <van-field
          v-model="userFormData.username"
          name="username"
          label="Username"
          placeholder="Username"
          :rules="[{ required: true, message: 'Incorrect Username' }]"
        />
        <van-field
          v-model="userFormData.password"
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          :rules="[{ required: true, message: 'Incorrect Password' }]"
        />
        <van-field
          v-model="userFormData.code"
          name="code"
          label="Code          "
          placeholder="Code"
        />
      </van-cell-group>
      <div style="margin: 10px 16px; display: flex">
        <van-button style="flex: 1" native-type="submit">
          Sign in
        </van-button>
        <div style="width: 10px"></div>
        <van-button style="flex: 1" @click.stop="registerHandle">
          Sign up
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserInfo } from '@/stores/userInfo';
import { postLogin, postRegister } from '@/api/common';
import type { FormProps, FormInstance } from 'vant';

const emits = defineEmits(['pageRefresh']);

const userFormRef = ref<FormInstance>();
const userInfo = useUserInfo();

const userFormData = ref<UserFormData>({
  username: '',
  password: '',
  code: ''
});

const onSubmit = (values: UserFormData) => {
  // 登录接口
  postLogin(values)
  .then((res) => {
    userInfo.dataFill(res.data.userinfo)
  })
  .catch((err) => {})
  .finally(() => {
    emits('pageRefresh');
  });
};

// 注册
const registerHandle = () => {
  userFormRef.value?.validate().then(() => {
    userInfo.$reset();
    postRegister(userFormData.value).then((res) => {
      userInfo.dataFill(res.data)
    })
    .catch((err) => {})
    .finally(() => {
      emits('pageRefresh');
    });
  }).catch(()=>{})
}

</script>

<style scoped lang="scss">
.login-box {
  width: 100vmax;
  height: 100vmin;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 竖屏 */
@media screen and (orientation:portrait) {
  .login-box {
    /* 这里写竖屏样式 */
    transform: rotate(-90deg);
  }
}
</style>