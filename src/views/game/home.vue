<template>
  <div class="game-box game-home">
    <div class="progress-box" v-if="loggingStatus">
      <van-progress class="progress" :percentage="percentage" />
    </div>
    <transition name="van-fade">
      <component v-show="!loggingStatus" :is="currentPage" @pageRefresh="pageRefresh" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref, markRaw } from 'vue';
import { computed } from '@vue/reactivity';
import { checkUserStatus } from '@/utils/common';
import { tableApi } from '@/api/common';
import { userUser } from '@/api/controllerUrls';
import { useUserInfo } from '@/stores/userInfo';

const userInfo = useUserInfo()

const loggingStatus = ref<boolean>(true);
const percentage = ref<number>(0);

const loginStatus = ref<boolean>(checkUserStatus());
const syncUserInfo = ref<boolean>(false);

const currentPage = computed(() => {
  // 游戏界面
  if (loginStatus.value) {
    // 更新用户数据
    new tableApi(userUser).edit({id: userInfo.getId()}).then((res) => {
      userInfo.dataFill(res.data.row);
      syncUserInfo.value = true;
    })
    if (syncUserInfo.value) {
      return markRaw(defineAsyncComponent(() => import("./game.vue")));
    }
  }
  // 登录界面
  return markRaw(defineAsyncComponent(() => import("./login.vue")));
});

// 刷新登录状态
const pageRefresh = () => {
  loginStatus.value = checkUserStatus();
};

onMounted(() => {
  const interval = setInterval(() => {
    percentage.value++;
    if (percentage.value >= 100) {
      clearInterval(interval);
      loggingStatus.value = false;
    }
  }, 2);
});

</script>

<style scoped lang="scss">
  @import '@/assets/style/game.scss';
  .game-home {
    background-image: url('@/assets/images/game/gamehall_loadingBg_dark.jpg');
    background-size: 100% 100%;
    background-position: 100%;
    background-repeat: no-repeat;
    .progress-box {
      width: 100vmax;
      height: 100vmin;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      .progress {
        width: 80%;
        margin-bottom: 10vmin;
      }
    }
  }
</style>