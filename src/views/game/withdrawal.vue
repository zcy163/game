<template>
  <div class="changepass-box">
    <van-sticky>
      <div class="header">
        <van-icon name="arrow-left" color="#ccc" size="20px" @click="goBack" />
        <van-icon name="orders-o" color="#ccc" size="20px" @click="goWithdrawallist" />
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
            v-model="userFormData.address"
            type="text"
            name="address"
            label="address"
            placeholder="address"
            :rules="[{ required: true, message: 'Incorrect address' }]"
          />
          <van-field
            v-model="userFormData.order_mount"
            type="number"
            name="order_mount"
            label="amount"
            placeholder="amount"
            :rules="[{ required: true, message: 'Incorrect amount' }]"
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
import { gameWithdrawal } from '@/api/controllerUrls';
import { goWithdrawallist } from '@/utils/common';

const userInfo = useUserInfo()

interface UserForm {
  // id: number
  username: string
  user_id: number
  order_mount: number
  integral: number
  address: string
  post_script: string
  pay_status: string
  signer_name: string
  singer_mobile: string
}

const userFormData = ref<UserForm>({
  // id: userInfo.getId(),
  username: userInfo.getUsername(),
  user_id: userInfo.getId(),
  order_mount: 0,
  address: '',
  integral: 0,
  post_script: "",
  pay_status: 'paying',
  signer_name: "",
  singer_mobile: "",
});

const onSubmit = () => {
  if (Number(userFormData.value.order_mount) === 0) return;
  userFormData.value.integral = userFormData.value.order_mount;
  new tableApi(gameWithdrawal).postData('add', userFormData.value).then(res => {
    // console.log(res);
    goWithdrawallist()
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
    justify-content: space-between;
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