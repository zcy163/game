<template>
  <!-- <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
  </a>
  <a href="https://vuejs.org/" target="_blank">
    <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
  </a> -->
  <div class="game-container">
    <div class="message">
      <div class="mes-l">
        <!-- <img class="mes-l-icon" src="@/assets/images/game/bcbm_hall_logo_name_97eb7690f037085927f93cbabece4abe.png" /> -->
        <span>
          50-2323232234-12312324234-1
        </span>
      </div>
      <div class="mes-r">
        <img class="mes-r-icon" src="@/assets/images/game/bcbm_hall_horn_f4ff56add19ffa4b72eff72c6c2af1c9.png" />
        <van-notice-bar style="flex: 1" scrollable background="none" color="#ccc" speed="20">
          <div v-html="messageStr"></div>
        </van-notice-bar>
      </div>
    </div>
    <div class="views">
      <view-bg />
      <!-- 第一排，5个 -->
      <div class="row1">
        <template :key="index" v-for="(prize, index) in prizes">
          <div
            class="prize"
            :class="{active: currentPrizeShadow.indexOf(index) !== -1, 'prize-big': index === 5}"
            v-if="index >= 0 &&index < 11"
          >
            <img
              class="border"
              v-show="currentPrizeShadow.indexOf(index) !== -1"
              src="@/assets/images/game/bcbm_icon_guang2_ffd118169b1c92a1004d5a4d32d78b73.png"
            />
            <div class="bg"></div>
            <img :src="getImgById(prize)" class="logo" />
          </div>
        </template>
      </div>
      <!-- 第二排，2个 -->
      <div class="row2">
        <div class="prize prize-big" :class="{active: currentPrizeShadow.indexOf(23) !== -1}">
          <img
            class="border"
            v-show="currentPrizeShadow.indexOf(23) !== -1"
            src="@/assets/images/game/bcbm_icon_guang2_ffd118169b1c92a1004d5a4d32d78b73.png"
          />
          <div class="bg"></div>
          <img :src="getImgById(prizes[23])" class="logo" />
        </div>
        <div class="betting-status">
          <div style="display: flex;align-items: center;height: 100%;">
            <img class="prize-img" :src="getImgByIndex(currentPrize)" />
            <img class="prize-translate" :src="getTranslateImgByIndex(currentPrize)" />
          </div>
        </div>
        <div class="row2-center">
          <transition :name="`${ShowCountDown ? 'van-slide-left' : 'van-slide-right'}`">
            <div v-if="ShowCountDown" class="show-result"></div>
          </transition>
          <countDownVue class="show-count" v-if="!ShowCountDown" :count="countDown" />
        </div>
        <div class="betting-status">
          <div v-if="ShowCountDown" class="betting-start"></div>
          <div v-else class="betting-stop"></div>
        </div>
        <div class="prize prize-big" :class="{active: currentPrizeShadow.indexOf(11) !== -1}">
          <img
            class="border"
            v-show="currentPrizeShadow.indexOf(11) !== -1"
            src="@/assets/images/game/bcbm_icon_guang2_ffd118169b1c92a1004d5a4d32d78b73.png"
          />
          <div class="bg"></div>
          <img :src="getImgById(prizes[11])" class="logo" />
        </div>
      </div>
      <!-- 第三排，5个 -->
      <div class="row3">
        <template :key="index" v-for="(prize, index) in prizes">
          <div
            class="prize"
            :class="{active: currentPrizeShadow.indexOf(index) !== -1, 'prize-big': index === 17}"
            v-if="index >= 12 && index < 23"
          >
            <img
              class="border"
              v-show="currentPrizeShadow.indexOf(index) !== -1"
              src="@/assets/images/game/bcbm_icon_guang2_ffd118169b1c92a1004d5a4d32d78b73.png"
            />
            <div class="bg"></div>
            <img :src="getImgById(prize)" class="logo" />
          </div>
        </template>
      </div>
    </div>
    <div class="betting">
      <img class="bg" src="@/assets/images/game/bcbm_room_table_has_name_30d87179ebe90277a0c1ad08e55eb9b8.png" />
      <div class="inner">
        <template :key="betting" v-for="(betting, index) in bettings">
          <div
            class="betting-item"
            :class="{'active': index === currentBetting}"
          >
            <div class="betting-item-txt">
              <span>{{ userBettingData[index].bets }}</span>
              <span style="margin: 0 2px;">/</span>
              <span>{{ fictitiousBettingData[index].bets }}</span>
            </div>
            <img class="betting-item-img" :style="{height: index <= 3 ? '50%' : '36%'}" :src="betting.src" />
            <template :key="inode" v-for="inode  in userBettingData[index].betList">
              <img
                :src="inode.src"
                class="betting-inode"
                :style="{left: inode.left, top: inode.top}"
              />
            </template>
            <template :key="inode" v-for="inode  in fictitiousBettingData[index].betList">
              <img
                :src="inode.src"
                class="betting-inode"
                :style="{left: inode.left, top: inode.top}"
              />
            </template>
          </div>
        </template>
      </div>
      <div class="inner inner-mask">
        <template :key="index" v-for="(betting, index) in bettingsList">
          <div
            class="betting-item"
            @click.stop="debounce(bettingSelect, 20)(index)"
          ></div>
        </template>
      </div>
    </div>
    <div class="users">
      <div class="user">
        <div class="icon" @click.stop="(userInfoShow=true)"></div>
        <div class="name">{{ userInfo.getUsername() }}</div>
        <div class="balance">
          <img class="balance-icon" src="@/assets/images/game/bcbm_hall_coin_b40ec5b97cd2f719dca99985bc8e1844.png" />
          <div>{{ format_with_mod(userIntegral) }}</div>
        </div>
      </div>
      <div class="translates">
        <template :key="index" v-for="(translate, index) in translates">
          <div
            :class="{'active': index === currentTranslate}"
            @click="translateSelect(index)"
          >
            <img class="translate-border" v-show="index === currentTranslate" src="@/assets/images/game/bcbm_room_chorme_guang_0bb21fd774501ef8c7c197414027d9f0.png" />
            <img class="translate-bg" :src="translate.src" />
            <div class="translate-index">{{ translate.index }}</div>
          </div>
        </template>
      </div>
      <div class="put" @click="goRecharge">
        <!-- <img src="@/assets/images/game/bcbm_room_btn_2_dis_v_e1a5e9d89bfebe397d7a43ca95318544.png" /> -->
        Recharge
      </div>
    </div>
    <div class="login-out">
      <!-- <img
        class="login-out-in"
        src="@/assets/images/game/bcbm_game_exit_6f462c9dbaaed61548f62fb80473ac7a.png"
        @click="loginOut"
      /> -->
      <div
        class="login-out-in"
        @click.stop="(showRule=true)"        
      >rule</div>
    </div>
    <div class="more" @click.stop="(showRule=true)">
      <!-- <img class="more-in" src="@/assets/images/game/hotGame_typeface_img_b43bcebf29ff543fd53a006627c882f6.png" /> -->
      <transition name="van-slide-left">
        <div class="more-rule" v-show="showRule" @click.stop="(showRule=false)">
          <img
            style="height: 100%;"
            src="@/assets/images/game/bcbm_help_bssm_a08c7bd23f90fc0c75cb4340402029fd.png"
          />
        </div>
      </transition>
    </div>
    <div class="history">
      <template :key="index" v-for="(history, index) in historyList">
        <div class="history-item">
          <img :src="getImgById(Number(history?.index))" class="logo" />
          <img v-if="index === 0" src="@/assets/images/game/bcbm_room_history_new_acc6181dd0a68e7cfe5ddb9afc2d053c.png" class="new" />
        </div>
      </template>
    </div>
    <userInfoVue v-show="userInfoShow" @cholseUserInfo="cholseUserInfo" />
  </div>
</template>

<script setup lang="ts">


// 模板
import ViewBg from '@/components/game/viewbg.vue';
import countDownVue from '@/components/game/countDown.vue';
import userInfoVue from '@/components/game/userInfo.vue';

import { onMounted, ref, provide } from 'vue';
import {
  bettingsList,
  translateList,
  userBettingDataList,
  fictitiousBettingDataList,
  prizesList,
  getImgById,
  getImgByIndex,
  getTranslateImgByIndex,
} from '@/datas/game';
import { computed } from '@vue/reactivity';
import { getPrize, getSeconds } from '@/api/game/commoin';
import { tableApi, postLogout } from '@/api/common';
import { gamesHistory, gamesMessage } from '@/api/controllerUrls';
import { useUserInfo } from '@/stores/userInfo';
import { debounce, format_with_mod, goRecharge } from '@/utils/common';
import Toast from '@/utils/toast';


const showRule = ref(false);
const userInfoShow = ref(false);

const emits = defineEmits(['pageRefresh']);

const userInfo = useUserInfo();

const prizes = ref<number[]>(prizesList);
const currentPrize = ref<number>(0);
const currentPrizeId = ref<number>(0);

const bettings = ref(bettingsList);
const currentBetting = ref(-1);

const translates = ref(translateList);
const currentTranslate = ref(0);

// 消息
const messageList = ref([]);
const messageStr = ref('');

// 用户下单数据
const userBettingData = ref<UserBettingData[]>(userBettingDataList);
const fictitiousBettingData = ref<UserBettingData[]>(fictitiousBettingDataList);

// 用户积分
const userIntegral = ref<number>(0);
// 获取当前时间
const currentSeconds = ref<number>(0);
// 赢得积分
const gainIntegral = ref<number>(0);

// 历史数据
const historyList = ref<any[]>([]);

// 停止位置
const setup = ref<number>(0);
// 循环圈数
const numberOfTurns = ref<number>(5);
// 总步数
const numberOfSetup = ref<number>(0);
// 每多少秒开奖
const bonusInterval = ref<number>(120);
// 显示倒计时
const ShowCountDown = computed(() => {
  if (countDown.value === bonusInterval.value - 9) {
    // 更新当前积分
    userIntegral.value += gainIntegral.value;
    // 清空积分
    userBettingData.value.map(v => {
      v.bets = 0;
      v.betList = [];
    });
    fictitiousBettingData.value.map(v => {
      v.bets = 0;
      v.betList = [];
    });
  }
  return countDown.value > bonusInterval.value - 10 || countDown.value === 0;
});
// 倒计时
const countDown = computed(() => {
  // const resetSeconds = currentSeconds.value > 30 ? currentSeconds.value - 30 : currentSeconds.value;
  // return Math.abs(30 - resetSeconds);
  return bonusInterval.value - currentSeconds.value;
});

// 初始化
const init = async (func: Function, interval: number) => {
  const leadSteps = prizes.value.length * numberOfTurns.value;
  // 发送的用户数据
  const userData = {
    data: userBettingData.value,
    userId: userInfo.getId(),
    integral: userIntegral.value
  }
  await getPrize(userData).then((res) => {
    // 中奖ID
    currentPrizeId.value = Number(res.data.award ? res.data.award : 0);
    // 得分
    gainIntegral.value = res.data.integral ? res.data.integral : 0;
    // 开奖周期时间
    bonusInterval.value = Number(res.data.opening_time);
    // 计算走步
    const startPosition = currentPrize.value + 1;
    setup.value = prizesList.slice(startPosition).indexOf(currentPrizeId.value as number)
    if (setup.value !== -1) {
      numberOfSetup.value = startPosition + setup.value + leadSteps
    } else {
      setup.value = prizesList.slice(0, startPosition).indexOf(currentPrizeId.value as number)
      numberOfSetup.value = setup.value + leadSteps
    }
    func(20, interval)
  })
};

// 每60秒开始
const gameStart = () => {
  setInterval(() => {
    getSeconds().then((res) => {
      currentSeconds.value = Number(res.data.seconds)
      // 开奖周期时间
      bonusInterval.value = Number(res.data.opening_time);
      // 判断是否可以下注，进行虚拟下注
      if (currentSeconds.value > 10) fictitiousBettingHandle(res.data.fictitious);
    }).catch(() => {
      currentSeconds.value++;
      if (currentSeconds.value >= bonusInterval.value) currentSeconds.value = 0;
    }).finally(() => {
      if (currentSeconds.value === 0) {
        // 获取时间
        getSeconds().then((res) => currentSeconds.value = Number(res.data))
        // 执行
        init(gameGo, 20);
      }
    })
  }, 1000);
};

/**
 * 执行
 * @param speed 计数器速度
 */
const gameGo = (speed: number) => {
  // 显示残影
  showPrizeShadow.value = true;
  // 转圈计时器
  const timer = setInterval(() => {
    currentPrize.value = currentPrize.value + 1;
    if (currentPrize.value >= prizes.value.length) {
      currentPrize.value = 0;
      numberOfSetup.value -= prizes.value.length;
    }
    // 剩余步数
    const remain = numberOfSetup.value - currentPrize.value;
    if (remain <= 30) {
      clearInterval(timer);
      // 不显示残影
      showPrizeShadow.value = false;
      // 继续执行剩余步数
      if (remain > 0) gameGo(600/remain);
      // 动画结束
      if (remain === 0) settlementHandle();
    }
  }, speed);
};

// 残影
const showPrizeShadow = ref<boolean>(false);
const currentPrizeShadow = computed(() => {
  if (showPrizeShadow.value) {
    return [currentPrize.value, currentPrize.value - 1, currentPrize.value - 2, currentPrize.value - 3];
  }
  return [currentPrize.value]
});

// 动画结束后结算
const settlementHandle = () => {
  // 更新赢得积分
  // userIntegral.value += gainIntegral.value;
  // 调到中奖位置
  currentBetting.value = currentPrizeId.value - 1;
  // 更新历史记录
  // historyList.value.pop();
  // historyList.value.unshift(currentPrizeId);
  getPrizeHistory();
  // 清空积分
  userBettingData.value.map(v => {
    if (v.id !== currentPrizeId.value) {
      v.bets = 0;
      v.betList = [];
    }
  });
  fictitiousBettingData.value.map(v => {
    if (v.id !== currentPrizeId.value) {
      v.bets = 0;
      v.betList = [];
    }
  });
}

// 选择下注
const bettingSelect = (index: number) => {

  // 当前选中分数
  const translate = translateList[currentTranslate.value];
  const newTranslate = JSON.parse(JSON.stringify(translate))

  // 判断是否可以下注
  if (ShowCountDown.value) {
    return Toast('Awarding');
  }
  if (userIntegral.value < translate.index) {
    return Toast('Insufficient points');
  }

  // 当前需要下注的类型
  currentBetting.value = index;
  newTranslate.left = Math.floor(Math.random()*60+10) + '%';
  newTranslate.top = Math.floor(Math.random()*50+20) + '%';
  userBettingData.value[index].betList.push(newTranslate)
  // 统计下注分数
  userBettingData.value[index].bets += translate.index;
  // 从积分中扣除
  userIntegral.value -= translate.index;
};

// 选择下注分数
const translateSelect = (index: number) => {
  currentTranslate.value = index;
};

/** 
 * 获取历史记录
 * first: 是否首次加载，首次加载同步当前位置
 **/
const getPrizeHistory = (first: boolean = false) => {
  new tableApi(gamesHistory, true).index().then((res: anyObj) => {
    historyList.value = res.data.list!.slice(0, 6);
    if (first) {
      currentPrizeId.value = Number(historyList.value[0].index);
      currentPrize.value = prizesList.indexOf(currentPrizeId.value);
    }
  })
}

// 用户信息
const cholseUserInfo = () => {
  userInfoShow.value = false;
}

// 退出登录
const loginOut = () => {
  postLogout({}).then(() => {
    userInfo.$reset();
    emits('pageRefresh');
  }).catch((err) => {})
}

// 获取消息列表
const getMessageList = () => {
  new tableApi(gamesMessage, true).index().then((res) => {
    messageList.value = res.data.list || [];
    messageList.value.forEach((message: any, index) => {
      messageStr.value += `
        <span class="active">${message.name}</span>
        <span>,</span>
        <span>${message.text_message}</span>
      `
    })
  })
}

// 虚拟下注
const fictitiousBettingHandle = (fictitious: string) => {
  // console.log(fictitious);
  fictitious && JSON.parse(fictitious).forEach((element: number[]) => {
    // console.log(element);
    const translate = translateList[element[1]];
    const newTranslate = JSON.parse(JSON.stringify(translate))
    newTranslate.left = Math.floor(Math.random()*60+10) + '%';
    newTranslate.top = Math.floor(Math.random()*50+20) + '%';
    fictitiousBettingData.value[element[0]].betList.push(newTranslate);
    fictitiousBettingData.value[element[0]].bets += translate.index;
  });
}

onMounted(() => {
  // 配置用户信息
  userIntegral.value = Number(userInfo.getIntegral())
  // 获取时间
  // getSeconds().then((res) => currentSeconds.value = Number(res.data))
  // 获取历史记录
  getPrizeHistory(true);
  getMessageList();
  // 开始游戏
  gameStart();
});

</script>

<style scoped lang="scss">
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('@/assets/images/game/bcbm_room_bg_b7f2da239d6e98aba8fc4dedda370ce9.webp');
  background-size: 100% 100%;
  background-position:50%;
  background-repeat: no-repeat;
  .message {
    width: 100vmax;
    height: 6vmin;
    // background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    .mes-l {
      height: 100%;
      color: #ccc;
      display: flex;
      padding-left: 2vmax;
      .mes-l-icon {
        height: 140%;
        position: relative;
        top: -8px;
        margin-right: 10px;
      }
    }
    .mes-r {
      width: 34vmax;
      height: 100%;
      margin-right: 6vmax;
      background-image: url('@/assets/images/game/bcbm_room_bk_chips2_v_18f933ab487aab368fe3da315cd3d9b5.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      overflow: hidden;
      .mes-r-icon {
        height: 90%;
      }
      .active {
        color: yellow;
      }
      :deep(.van-notice-bar) {
        padding: 0 2px;
        font-size: 12px;
      }
    }
  }
  .views {
    width: 70vmax;
    height: 40vmin;
    // background-color: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url('@/assets/images/game/bcbm_room_paodao_bg_b1abac20dee19b043912a4f38227dec6.webp');
    background-size: 100% 100%;
    background-position:50%;
    background-repeat: no-repeat;
    position: relative;
    font-size: 20px;
    font-weight: 500;
    .row1 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      > div {
        margin-right: 1.6vmax;
      }
      > div:last-child {
        margin-right: 0;
      }
    }
    .row2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .row2-center {
        height: 15vmin;
        overflow: hidden;
      }
      .show-result {
        width: 28vmin;
        height: 15vmin;
        background-image: url('@/assets/images/game/bcbm_effect_room1_tex_aed44b1fc6baa756ffb4765bd75b027b.webp');
        background-position: 18% 80%;
        background-size: 161%;
      }
      .show-count {
        width: 28vmin;
        height: 15vmin;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .betting-status {
        width: 20vmin;
        height: 15vmin;
        display: flex;
        align-items: center;
        justify-content: center;
        .betting-stop {
          width: 20vmin;
          height: 8vmin;
          background-image: url('@/assets/images/game/bcbm_game_xzz_d13bdb091b40f404dfa8683040c8ba82.png');
          background-size: 100%;
          background-repeat: no-repeat;
        }
        .betting-start {
          width: 20vmin;
          height: 8vmin;
          background-image: url('@/assets/images/game/bcbm_game_pjz_1bbc4c4007a52244a86ccc497b9ffd7f.png');
          background-size: 100%;
          background-repeat: no-repeat;
        }
        .prize-img {
          height: 80%;
          background-image: url('@/assets/images/game/bcbm_icon_guang3_9ed8336a108d2b7e72f1812a1660b802.png');
          background-size: 110%;
          background-position: -3px -4px;
        }
        .prize-translate {
          height: 40%;
        }
      }
    }
    .row3 {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: row-reverse;
      align-items: center;
      > div {
        margin-left: 1.6vmax;
      }
      > div:last-child {
        margin-left: 0;
      }
    }
    .prize {
      width: 8vmin;
      height: 8vmin;
      display: flex;
      align-items: center;
      justify-content: center;
      will-change: filter;
      border-radius: 50%;
      .logo {
        height: 8vmin;
        width: 8vmin;
        will-change: filter;
      }
      .bg {
        position: absolute;
        z-index: -1;
        width: 9.6vmin;
        height: 9.6vmin;
        background-image: url('@/assets/images/game/bcbm_icon_1_445b2d3dad9660ff7ed9c4e9ceaf635a.png');
        background-size: 100% 100%;
      }
      .border {
        position: absolute;
        width: 10.4vmin;
        height: 10.4vmin;
      }
    }
    .prize-big {
      width: 13vmin;
      height: 13vmin;
      .bg {
        width: 15.6vmin;
        height: 15.6vmin;
        background-image: url('@/assets/images/game/bcbm_icon_2_d7c3f28ce40e917492cacfc4fdcee23e.png');
      }
      .border {
        width: 16.4vmin;
        height: 16.4vmin;
      }
    }
    .active {
      filter: drop-shadow(0 0 1em yellow);
      box-shadow: 0 0 3pt 2pt yellow;
      // background-image: url('@/assets/images/game/bcbm_icon_guang2_ffd118169b1c92a1004d5a4d32d78b73.png');
      // background-size: 150% 150%;
      // background-position:50%;
      // background-repeat: no-repeat;
    }
  }
  .betting {
    width: 80vmax;
    height: 44vmin;
    position: relative;
    .bg {
      width: 100%;
      height: 100%;
    }
    .inner {
      width: 100%;
      height: 97%;
      padding: 3vmin 2vmax;
      position: absolute;
      z-index: 1;
      top: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-content: flex-start;
    }
    .inner-mask {
      z-index: 2;
      cursor: pointer;
    }
    .betting-item {
      width: 25%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .betting-item-txt {
        position: absolute;
        top: 5px;
        right: 10px;
        color: #fff;
        font-weight: 500;
        z-index: 10;
      }
      .betting-item-img {
        position: relative;
        top: 1px;
        left: 1px;
        z-index: 10;
      }
      .betting-inode {
        position: absolute;
        width: 14%;
        top: 10%;
        left: 10%;
      }
    }
    .active {
      background-image: url('@/assets/images/game/bcbm_room_table_guang2_072fceead72cb64a0fca7981782bc28c.png');
      background-size: 100% 100%;
      background-position:50%;
      background-repeat: no-repeat;
    }
  }
  .users {
    width: 100vmax;
    height: 10vmin;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: url('@/assets/images/game/bcbm_room_dbbg_20b774fd04eecd4beda31aa381dcbc60.png');
    background-position: 100% auto;
    background-position:50%;
    background-repeat: no-repeat;
    font-size: 14px;
    .user {
      height: 100%;
      display: flex;
      align-items: center;
      margin: 0 10vmin;
      div {
        margin-right: 5vmin;
      }
      div:last-child {
        margin-right: 0;
      }
      .icon {
        width: 10vmin;
        height: 10vmin;
        border-radius: 50%;
        background-color: #ccc;
        position: relative;
        top: -2vmin;
        background-image: url('@/assets/images/game/women7_337004744134781c7bf8419aa6637efb.webp');
        background-size: 100% 100%;
      }
      .balance {
        height: 60%;
        display: flex;
        align-items: center;
        padding: 0 2vmax 0 1vmax;
        background-image: url('@/assets/images/game/bcbm_hall_coin_bg_69f7f2ce92775ae332cdbf353d65367e.png');
        background-size: 100% 100%;
        .balance-icon {
          height: 80%;
          margin-right: 1vmax;
        }
      }
    }
    .translates {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      background-image: url('@/assets/images/game/bcbm_room_dbbg1_897cd9c552dd7417120076ac58620872.png');
      background-size: 100% auto;
      background-position:50%;
      background-repeat: no-repeat;
      padding: 0 3vmax;
      > div { 
        width: 10vmin;
        height: 10vmin;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: 2vmin;
        margin: 0 1vmax;
      }
      > div.active {
        width: 12vmin;
        height: 12vmin;
        // background-image: url('@/assets/images/game/bcbm_room_chorme_guang_0bb21fd774501ef8c7c197414027d9f0.png');
        // background-size: 120% 120%;
      }
      .translate-border {
        position: absolute;
        width: 110%;
        height: 110%;
      }
      .translate-bg {
        width: 90%;
        height: 90%;
        position: absolute;
        top: 1vmin;
      }
      .translate-index {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 8px;
        font-weight: 500;
        color: #000;
      }
    }
    .put {
      height: 100%;
      margin: 0 10vmin;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      background-image: url('@/assets/images/game/bcbm_room_paodao_bk_507a78505df5cbb24e191ed7e3dfb393.webp');
      background-repeat: no-repeat;
      background-size: 100% 77%;
      background-position: 50%;
      > img {
        height: 80%;
      }
    }
  }
  .login-out {
    width: 12vmin;
    height: 5vmin;
    position: absolute;
    left: 8vmax;
    top: 8vmin;
    background-image: url('@/assets/images/game/bcbm_room_paodao_bk_507a78505df5cbb24e191ed7e3dfb393.webp');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 50%;
    cursor: pointer;
    color: #fff;
    .login-out-in {
      width: 100%;
      height: 5vmin;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .more {
    width: 5vmax;
    height: 40vmin;
    position: absolute;
    left: 0;
    top: 30vmin;
    // background-image: url('@/assets/images/game/hotGame_openOrClose_c7127f359da1dc50df71a31740acc927.png');
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    .more-in {
      height: 40%;
      margin-left: 1vmax;
    }
    .more-rule {
      height: 50vmin;
      position: absolute;
      left: 0;
      background-color: #000;
      z-index: 99;
    }
  }
  .history {
    width: 5vmax;
    height: 70vmin;
    position: absolute;
    left: 1vmax;
    top: 10vmin;
    background-image: url('@/assets/images/game/bcbm_room_history_bg_241e799b1378fae67dd0a0ebf715b6c3.png');
    background-size: 100% 100%;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding-top: 1vmax;
    overflow-y: hidden;
    .history-item {
      width: 5vmax;
      display: flex;
      justify-content: center;
      margin-bottom: 1vmax;
      position: relative;
      .logo {
        width: 4vmax;
        height: 4vmax;
      }
      .new {
        position: absolute;
        width: 4vmax;
        bottom: -5px;
        z-index: 1;
      }
    }
  }
}
</style>