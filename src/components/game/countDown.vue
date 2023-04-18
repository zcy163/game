<template>
  <div class="count-down-box">
    <div class="count-down" :class="`count-down-${count1}`"></div>
    <div class="count-down" :class="`count-down-${count2}`"></div>
    <div class="count-down" :class="`count-down-${count3}`"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})

const count1 = computed(() => {
  const count = props.count.toString().split("")
  if (count.length === 3) return count[0]
  return 0
})

const count2 = computed(() => {
  const count = props.count.toString().split("")
  if (count.length === 2) return count[0]
  if (count.length === 3) return count[1]
  return 0
})
const count3 = computed(() => {
  const count = props.count.toString().split("")
  if (count.length === 1) return count[0]
  if (count.length === 2) return count[1]
  if (count.length === 3) return count[2]
  return 0
})

</script>

<style scoped lang="scss">
.count-down-box {
  width: 28vmin;
  height: 15vmin;
  display: flex;
  background-image: url('@/assets/images/game/bcbm_effect_ybp_tex_2f3cd804e5973c1997d52a9f1df2cbd2.png');
  background-size: 126%;
  background-position: 0 3px;
}
.count-down {
  width: 16px;
  height: 23px;
  background-image: url('@/assets/images/game/bcbm_rank_font.png');
  background-size: 95px 46px;
}
.count-down-0 {
  background-position: 77px 0;
}
.count-down-1 {
  background-position: 53px 23px;
}
.count-down-2 {
  background-position: 31px 0;
}
.count-down-3 {
  background-position: -14px 23px;
}
.count-down-4 {
  background-position: 0 0;
}
.count-down-5 {
  background-position: -28px 23px;
}
.count-down-6 {
  background-position: 62px 0;
}
.count-down-7 {
  background-position: 17px 0;
}
.count-down-8 {
  background-position: 46px 0;
}
.count-down-9 {
  background-position: 1px 23px;
}
</style>