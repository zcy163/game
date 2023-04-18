<template>
  <div style="color: #000">
    <iframe ref="iframe" width="100%" height="100%" src="/"></iframe>
    <div style="color: green; margin-top: var(--el-main-padding)">
      <van-field v-model="currentSeconds" center clearable label="服务器时间" />
    </div>
    <div style="color: green; margin-top: var(--el-main-padding)">
      <van-field v-model="openingTime" center clearable label="修改开奖时间" placeholder="请输入开奖时间">
        <template #button>
          <van-button size="small" type="primary" @click="setOpeningTime">提交</van-button>
        </template>
      </van-field>
    </div>
    <div style="display: flex; margin-top: var(--el-main-padding)">
      <div>未来10次奖品ID:</div>
      <van-row style="flex: 1; margin-left: var(--el-main-padding)">
        <template :key="index" v-for="(prize, index) in futurePrizeList">
          <van-col
            class="prize"
            :class="{active: index === currentPrizeIndex}"
            span="2"
            @click.stop="(currentPrizeIndex=index)"
          >
            {{ getPrizeName(prize.index) }}
          </van-col>
        </template>
      </van-row>
    </div>
    <div style="display: flex; margin-top: var(--el-main-padding)">
      <div>将选中的奖品修改为:</div>
      <van-row style="flex: 1; margin-left: var(--el-main-padding)">
        <template :key="index" v-for="index in 8">
          <van-col
            class="prize"
            :class="{active: index === selectPrizeId}"
            span="2"
            @click.stop="(selectPrizeId=index)"
          >
            {{ getPrizeName(index) }}
          </van-col>
        </template>
        <van-col
          class="prize"
          style="margin-left: var(--el-main-padding)"
          @click.stop="submit"
        >
          <van-button type="primary" size="small">提交</van-button>
        </van-col>
      </van-row>
    </div>
    <div style="color: red; margin-top: var(--el-main-padding)">
      <div>* 每{{openingTime}}秒开奖</div>
      <div>* 每次开奖前五秒无法在修改奖品</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { Toast } from 'vant';
import { getPrize, getSeconds } from '@/api/game/commoin';
import { tableApi } from '@/api/common';
import { gamesFuture, openingTimeUrl } from '@/api/controllerUrls';
import { changePrize } from '@/api/game/commoin';
import { useWindowSize } from '@vant/use';
import { bettingsList } from '@/datas/game';

const { width, height } = useWindowSize();

const iframe = ref<HTMLElement>()

const iframeHeight = computed(() => {
  const iframeWidth = iframe.value!.clientWidth
  return (iframeWidth / 2.16) + 'px';
})

const currentSeconds = ref<number>(0)
const futurePrizeList = ref<anyObj[]>([]);
const currentPrizeIndex = ref<number>(0);
const selectPrizeId = ref<number>(0);
const donts = ref<number[]>([55, 56, 57, 58, 59, 60]);
const openingTime = ref<number>(0);
const currentOpeningTime = ref<number>(0);


// 提交修改未来奖品
const submit = () => {
  
  if (selectPrizeId.value === 0) return Toast('请选择需要变更为哪个奖品ID')
  if (donts.value.indexOf(currentSeconds.value) !== -1) return Toast('数据更新时间不能操作')

  const prizeId = futurePrizeList.value[currentPrizeIndex.value];

  changePrize(prizeId.id as number, selectPrizeId.value).then((res) => {
    getfuture(true)
  })
}

// 获取奖品对应名称
const getPrizeName = (prizeId: number) => {
  const currentPrize = bettingsList.filter(v => v.id === Number(prizeId));
  return currentPrize[0].name
}

const getfuture = (fixed: boolean = false) => {
  new tableApi(gamesFuture).index().then((res: anyObj) => {
    futurePrizeList.value = res.data.list;
    if (!fixed && currentPrizeIndex.value > 0) currentPrizeIndex.value--;
  })
}

const setOpeningTime = () => {
  new tableApi(openingTimeUrl).postData('index', {'opening_time': openingTime.value}).then((res) => {
    currentOpeningTime.value = openingTime.value;
  })
}

watch(width, () => {
  const iframeWidth = iframe.value!.clientWidth
  iframe.value!.style.height = (iframeWidth / 2.16) + 'px';
});

onMounted(() => {
  // 获取未来10次中奖id
  getfuture()
  // 获取时间
  getSeconds().then((res) => {
    currentOpeningTime.value = Number(res.data.opening_time);
    openingTime.value = Number(res.data.opening_time);
    currentSeconds.value = Number(res.data.seconds);
    setInterval(() => {
      currentSeconds.value++;
      if (currentSeconds.value >= currentOpeningTime.value) {
        getfuture();
        currentSeconds.value = 0;
      }
    }, 1000);
  })
  nextTick(() => {
    iframe.value!.style.height = iframeHeight.value
  })
})

</script>

<style scoped lang="scss">
.prize {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active {
  background-image: url('@/assets/images/game/bcbm_room_table_guang2_072fceead72cb64a0fca7981782bc28c.png');
  background-size: 100% 100%;
}
</style>
