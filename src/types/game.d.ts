
interface BettingsList {
  id: number,
  name: string,
  translate: number,
  src: string,
  translateSrc: string
  // 下注数
  bets: number
}

interface TranslateList {
  id: number
  index: number
  src: string
  left?: string
  top?: string
}
interface UserBettingData {
  id: number
  translate: number
  bets: number
  betList: TranslateList[]
}