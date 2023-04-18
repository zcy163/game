<template>
  <div class="changepass-box">
    <van-sticky>
      <div class="header">
        <van-icon name="arrow-left" color="#ccc" size="20px" @click="goBack" />
      </div>
    </van-sticky>
    <div class="changepass-main">
      <van-cell-group inset>
        <template v-for="(withdrawal, index) in withdrawalList" :key="index">
          <van-cell :title="`no: ${withdrawal.order_sn}`" :value="withdrawal.pay_status" value-class="value-class">
            <template #label>
              <div>username: {{ withdrawal.name }}</div>
              <div>create_time: {{ withdrawal.create_time }}</div>
              <div>address: {{ withdrawal.address }}</div>
              <div>mount: {{ withdrawal.order_mount }}</div>
            </template>
          </van-cell>
        </template>
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import router from '@/router';
import { useUserInfo } from '@/stores/userInfo';
import { tableApi } from '@/api/common';
import { gameWithdrawal } from '@/api/controllerUrls';

const userInfo = useUserInfo()
const withdrawalList = ref<any>();

const onSubmit = () => {
  new tableApi(gameWithdrawal).index({
    user_id: userInfo.getId()
  }).then(res => {
    // console.log(res);
    withdrawalList.value = res.data.list;
  })
}

// 返回
const goBack = () => {
  router.push({
    name: "GameHome"
  })
}

onMounted(() => {
  onSubmit()
})

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
    overflow-y: scroll;
  }
}
</style>
<style>
.value-class {
  flex: unset;
}
</style>