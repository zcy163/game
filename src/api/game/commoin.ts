import createAxios from '@/utils/axios'
import { gamesPrize, gamesInit } from '@/api/controllerUrls'

export const getPrize = (data: anyObj) => {
  return createAxios(
    {
      url: gamesPrize + 'index',
      method: 'post',
      data: data,
    },
    {
      loading: false
    }
  ) as ApiPromise
}

export const getSeconds = () => {
  return createAxios(
    {
      url: gamesInit + 'index',
      method: 'post',
    },
    {
      loading: false
    }
  ) as ApiPromise
}

// 修改奖品id
export const changePrize = (prizeId: number, prizeIndex: number) => {
  return createAxios(
    {
      url: gamesPrize + 'change',
      method: 'post',
      data: { prizeId, prizeIndex }
    },
    {
      loading: false
    }
  ) as ApiPromise
}
