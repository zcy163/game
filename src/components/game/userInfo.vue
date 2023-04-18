<template>
  <div class="user-info">
    <div class="user-info-box">
      <div class="header" @click.stop="emits('cholseUserInfo')">x</div>
      <div class="main">
        <div class="main-l">
          <div>Name:</div>
          <div>Integral:</div>
          <div>Pass:</div>
          <div>Recharge:</div>
          <div>Withdraw:</div>
          <div>Customer:</div>
        </div>
        <div class="main-c">
          <div>{{ userInfo.getUsername() }}</div>
          <div>{{ format_with_mod(Number(userInfo.getIntegral())) }}</div>
          <div>
            <van-button plain type="primary" native-type="submit" @click="goChangepass">
              changepass
            </van-button>
          </div>
          <div>
            <van-button plain type="primary" native-type="submit" @click="goRecharge">
              recharge
            </van-button>
          </div>
          <div>
            <van-button plain type="primary" native-type="submit" @click="goWithdrawal">
              withdraw
            </van-button>
          </div>
          <div>
              <img style="height: 70%; margin: 0 2px;" src="@/assets/images/game/WechatIMG1619.png" />
              <span style="font-size: 12px;">+44 7501 999080</span>
          </div>
        </div>
        <div class="main-r">
          <img class="icon-1" src="@/assets/images/game/gamehall_headSelected_txt_c367bb53357d8a8f20cd6b3ddb7db3c8.png" />
          <img class="icon-2" src="@/assets/images/game/women7_337004744134781c7bf8419aa6637efb.webp" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useUserInfo } from '@/stores/userInfo';
import { format_with_mod, goRecharge, goChangepass, goWithdrawal } from '@/utils/common';

const emits = defineEmits(['cholseUserInfo']);
const userInfo = useUserInfo();

</script>

<style scoped lang="scss">
.user-info {
  width: 100vmax;
  height: 100vmin;
  position: absolute;
  z-index: 99990;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .user-info-box {
    width: 40vmax;
    //height: 70vmin;
    background-image: url('@/assets/images/game/gamehall_headBigbg_5a7801ef4b98f5d64d300128e660d448.webp');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    .header {
      width: 100%;
      height: 12%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 18px;
      color: #fff;
      cursor: pointer;
    }
    .main {
      width: 100%;
      flex: 1;
      //background-color: #000;
      display: flex;
    }
    .main-l {
      width: 22%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2% 0 10%;
      > div {
        height: 24px;
        margin-top: 8px;
      }
    }
    .main-c {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 2% 3% 10%;
      > div {
        height: 26px;
        margin-top: 6px;
        display: flex;
        align-items: center;
      }
      :deep(.van-cell) {
        height: 23px;
        padding: 0 2px;
        font-size: 12px;
      }
      :deep(.van-button) {
        height: 23px;
        padding: 0 2px;
        color: #fff;
        background-color: #1989fa;
        margin-left: 5px;
      }
    }
    .main-r {
      width: 28%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon-1 {
        width: 60%;
        margin-top: 35%;
      }
      .icon-2 {
        width: 60%;
        border-radius: 50%;
        margin-top: 30%;
      }
    }
  }
}
</style>