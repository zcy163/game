<template>
  <div class="bg1">
    <div class="bg1-l"></div>
    <div class="bg1-c"></div>
    <div class="bg1-c"></div>
    <div class="bg1-c"></div>
    <div class="bg1-r"></div>
  </div>
</template>

<style scoped lang="scss">
.bg1 {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  .bg1-l {
    width: 20vmax;
    height: 100%;
    background-image: url('@/assets/images/game/bcbm_room_paodao_bk_507a78505df5cbb24e191ed7e3dfb393.webp');
    background-size: auto 90%;
    background-position: 0%;
    background-repeat: no-repeat;
  }
  .bg1-c {
    width: 20vmax;
    height: 100%;
    background-image: url('@/assets/images/game/bcbm_room_paodao_bk_507a78505df5cbb24e191ed7e3dfb393.webp');
    background-size: auto 90%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
  .bg1-r {
    width: 20vmax;
    height: 100%;
    background-image: url('@/assets/images/game/bcbm_room_paodao_bk_507a78505df5cbb24e191ed7e3dfb393.webp');
    background-size: auto 90%;
    background-position: 100%;
    background-repeat: no-repeat;
  }
}
</style>