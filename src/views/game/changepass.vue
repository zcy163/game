<template>
  <div class="changepass-box">
    <van-sticky>
      <div class="header">
        <van-icon name="arrow-left" color="#ccc" size="20px" @click="goBack" />
      </div>
    </van-sticky>
    <div class="changepass-main">
      <van-form ref="userFormRef" @submit="onSubmit" :validate-first="true">
        <van-cell-group inset>
          <!-- <van-field
            v-model="userFormData.id"
            type="hidden"
            name="id"
            label="userId"
            placeholder="id"
            disabled
            :rules="[{ required: true, message: 'Incorrect Password' }]"
          /> -->
          <van-field
            v-model="userFormData.username"
            type="text"
            name="username"
            label="username"
            placeholder="username"
            disabled
            :rules="[{ required: true, message: 'Incorrect Password' }]"
          />
          <van-field
            v-model="userFormData.password"
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            :rules="[{ required: true, message: 'Incorrect Password' }]"
          />
        </van-cell-group>
        <div class="ibutton" @click="onSubmit">
          Submit
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { useUserInfo } from '@/stores/userInfo';
import { tableApi } from '@/api/common';
import { userUser } from '@/api/controllerUrls';

const userInfo = useUserInfo()

interface UserForm {
  id: number
  username: string
  password: string
}

const userFormData = ref<UserForm>({
  id: userInfo.getId(),
  username: userInfo.getUsername(),
  password: ''
});

const onSubmit = () => {
  new tableApi(userUser).postData('edit', userFormData.value).then(res => {
    // console.log(res);
    goBack();
  })
}

// 返回
const goBack = () => {
  router.push({
    name: "GameHome"
  })
}

</script>

<style scoped lang="scss">
.changepass-box {
  width: 100%;
  height: 200vmin;
  background-color: #fff;
  color: #000;
  .header {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .changepass-main {
    width: 100%;
    padding: 10px;
  }
  .ibutton {
    margin: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #07c160;
    border-radius: 10px;
    color: #fff;
    padding: 5px 0;
  }
}
</style>