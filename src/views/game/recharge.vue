<template>
  <div class="recharge-box">
    <van-sticky>
      <div class="header">
        <van-icon name="arrow-left" color="#ccc" size="20px" @click="goBack" />
      </div>
    </van-sticky>
    <div class="recharge-main">
      <div style="display: flex;">
        <div class="recharge-type" :class="{'active': rechargeType === 0}" @click="(rechargeType=0)">
          USDT transfer TRC20
        </div>
        <div style="width: 10px;"></div>
        <div class="recharge-type" :class="{'active': rechargeType === 1}" @click="(rechargeType=1)">
          USDT transfer ERC20
        </div>
      </div>
      <div class="pub-flex">
        <img v-if="(rechargeType === 0)" style="height: 160px;" src="@/assets/images/game/t.png" />
        <img v-if="(rechargeType === 1)" style="height: 160px;" src="@/assets/images/game/e.png" />
      </div>
      <div style="margin-top: 20px; font-weight: 500;">
        <div style="color: #ccc;">USDT recharge address</div>
        <div style="display: flex;align-items: center;margin-top: 10px;">
          <div v-if="(rechargeType === 0)">{{ rechargeTexts[0] }}</div>
          <div v-if="(rechargeType === 1)">{{ rechargeTexts[1] }}</div>
          <van-icon
            name="sign"
            size="14px"
            style="margin-left: 10px;"
            @click="copyText"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useClipboard from 'vue-clipboard3';
import { Toast } from 'vant';
import { useRouter } from 'vue-router';

const clipboard = useClipboard();
const router = useRouter();
const rechargeType = ref(0);
const rechargeTexts = ref(['TN8WLkB7dEJEATRm1nNGxETLB7sywK7Fhb', '0x15bb87f16ce22fb13c6fd770e9f14840d18037a6'])

// 返回
const goBack = () => {
  router.push({
    name: "GameHome"
  })
}

// 文本复制
const copyText = async (text: string) => {
  await clipboard.toClipboard(rechargeTexts.value[rechargeType.value]).then(() => {
    Toast('success');
  }).catch(() => {
    Toast('error');
  });
};

</script>

<style scoped lang="scss">
.recharge-box {
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
  .recharge-main {
    width: 100%;
    padding: 10px;
    .recharge-type {
      padding: 5px 10px;
      border-radius: 5px;
      background-color: #e6e6e6;
      color: #000;
    }
    .active {
      background-color: #16ac86;
      color: #fff;
    }
    .pub-flex {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>