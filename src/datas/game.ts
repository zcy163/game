
// 下注表盘图片
import bettingIcon1 from '@/assets/images/game/bcbm_room_car1_v_1b062cc5eed0e04a37f10229932f5cea.png';
import bettingIcon2 from '@/assets/images/game/bcbm_room_car2_v_37bd50707806688da46f77d154f55a3a.png';
import bettingIcon3 from '@/assets/images/game/bcbm_room_car3_v_4305bee3a7b7753a43032b42a4718e71.png';
import bettingIcon4 from '@/assets/images/game/bcbm_room_car4_v_b46f5b7ea50f333dc9327558110df016.png';
import bettingIcon5 from '@/assets/images/game/bcbm_room_car6_v_41b2dbe82bdfa2716c9d863adea74a55.png';
import bettingIcon6 from '@/assets/images/game/bcbm_room_car8_v_eea54e50bb4325aa3a3181a8aeb757a0.png';
import bettingIcon7 from '@/assets/images/game/bcbm_room_car5_v_bed57ff66eb20b34ae7edd2bf8d989ab.png';
import bettingIcon8 from '@/assets/images/game/bcbm_room_car7_v_aedd0952d38b1f57c3990f161f715f00.png';

import bettingTranslateIcon5 from '@/assets/images/game/bcbm_room_beilv_5_v_252dac776ca70f7cdf35999658df101b.png';
import bettingTranslateIcon10 from '@/assets/images/game/bcbm_room_beilv_10_v_7dec9d5ca3b310590f61e015e38086c4.png';
import bettingTranslateIcon15 from '@/assets/images/game/bcbm_room_beilv_20_v_db733018525368a135726fa3bd6c3ac4.png';
import bettingTranslateIcon25 from '@/assets/images/game/bcbm_room_beilv_30_v_73c6f07f0443e85a4b8ca8f26d3a7b18.png';
import bettingTranslateIcon40 from '@/assets/images/game/bcbm_room_beilv_40_v_4d958e489a0c82b4c697fee716a19656.png';


// 可下注类型图片
import translateIcon1 from '@/assets/images/game/bcbm_room_chorme1_18fa29c738358b1ac6b63146eb39dba1.png';
import translateIcon2 from '@/assets/images/game/bcbm_room_chorme2_3c4483494c0f352cdf5d2e186b022d88.png';
import translateIcon3 from '@/assets/images/game/bcbm_room_chorme3_34fea6ea4ce5c91e4e13148d2ee24c3f.png';
import translateIcon4 from '@/assets/images/game/bcbm_room_chorme4_28d2d3961742b1da6dd429a7503d16bd.png';
import translateIcon5 from '@/assets/images/game/bcbm_room_chorme5_2a930659dce953125c07865eb29a8c9c.png';

// 下注表盘枚举
export const bettingsList: BettingsList[] = [
  {
    id: 1,
    name: '雷克萨斯',
    translate: 5,
    src: bettingIcon1,
    translateSrc: bettingTranslateIcon5,
    bets: 0
  },
  {
    id: 2,
    name: '大众',
    translate: 5,
    src: bettingIcon2,
    translateSrc: bettingTranslateIcon5,
    bets: 0
  },
  {
    id: 3,
    name: '奔驰',
    translate: 5,
    src: bettingIcon3,
    translateSrc: bettingTranslateIcon5,
    bets: 0
  },
  {
    id: 4,
    name: '宝马',
    translate: 5,
    src: bettingIcon4,
    translateSrc: bettingTranslateIcon5,
    bets: 0
  },
  {
    id: 5,
    name: '保时捷',
    translate: 10,
    src: bettingIcon5,
    translateSrc: bettingTranslateIcon10,
    bets: 0
  },
  {
    id: 6,
    name: '玛莎拉蒂',
    translate: 15,
    src: bettingIcon6,
    translateSrc: bettingTranslateIcon15,
    bets: 0
  },
  {
    id: 7,
    name: '兰博基尼',
    translate: 25,
    src: bettingIcon7,
    translateSrc: bettingTranslateIcon25,
    bets: 0
  },
  {
    id: 8,
    name: '法拉利',
    translate: 40,
    src: bettingIcon8,
    translateSrc: bettingTranslateIcon40,
    bets: 0
  },
];

// 可下注类型
export const translateList: TranslateList[] = [
  {
    id: 1,
    index: 2,
    src: translateIcon1,
  },
  {
    id: 2,
    index: 10,
    src: translateIcon2,
  },
  {
    id: 3,
    index: 50,
    src: translateIcon3,
  },
  {
    id: 4,
    index: 150,
    src: translateIcon4,
  },
  {
    id: 5,
    index: 300,
    src: translateIcon5,
  },
];

// 用户下单数据
export const userBettingDataList: UserBettingData[] = [
  {
    id: 1,
    translate: 5,
    bets: 0,
    betList: []
  },
  {
    id: 2,
    translate: 5,
    bets: 0,
    betList: []
  },
  {
    id: 3,
    translate: 5,
    bets: 0,
    betList: []
  },
  {
    id: 4,
    translate: 5,
    bets: 0,
    betList: []
  },
  {
    id: 5,
    translate: 10,
    bets: 0,
    betList: []
  },
  {
    id: 6,
    translate: 15,
    bets: 0,
    betList: []
  },
  {
    id: 7,
    translate: 25,
    bets: 0,
    betList: []
  },
  {
    id: 8,
    translate: 40,
    bets: 0,
    betList: []
  },
]

// 用户下单数据
export const fictitiousBettingDataList: UserBettingData[] = [
  {
    id: 1,
    translate: 5,
    bets: 0,
    betList: []
  },
  {
    id: 2,
    translate: 5,
    bets: 0,
    betList: []
  },
  {
    id: 3,
    translate: 5,
    bets: 0,
    betList: []
  },
  {
    id: 4,
    translate: 5,
    bets: 0,
    betList: []
  },
  {
    id: 5,
    translate: 10,
    bets: 0,
    betList: []
  },
  {
    id: 6,
    translate: 15,
    bets: 0,
    betList: []
  },
  {
    id: 7,
    translate: 25,
    bets: 0,
    betList: []
  },
  {
    id: 8,
    translate: 40,
    bets: 0,
    betList: []
  },
]

// 开奖表盘
export const prizesList = [1,2,3,4,1,7,2,3,4,1,2,5,3,4,1,2,3,8,4,1,2,3,4,6];

// 历史记录
export const historyList = [3,2,5,6,3,2,5,4,2,4,6,3];

// 根据奖品id获取图片
export const getImgById = (prizeId: number) => {
  const img = bettingsList.filter((v) => v.id === prizeId);
  return img && img.length !== 0 ? img[0].src : '';
}

// 根据奖品id获取倍数图片
export const getTranslateImgById = (prizeId: number) => {
  const img = bettingsList.filter((v) => v.id === prizeId);
  return img && img.length !== 0 ? img[0].translateSrc : '';
}

// 根据奖品index获取图片
export const getImgByIndex = (prizeindex: number) => {
  const prizeId = prizesList[prizeindex];
  const img = bettingsList.filter((v) => v.id === prizeId);
  return img && img.length !== 0 ? img[0].src : '';
}

// 根据奖品index获取倍数图片
export const getTranslateImgByIndex = (prizeindex: number) => {
  const prizeId = prizesList[prizeindex];
  const img = bettingsList.filter((v) => v.id === prizeId);
  return img && img.length !== 0 ? img[0].translateSrc : '';
}
