import { defineStore } from "pinia";
import { USER_INFO } from "./constant/checkKey";
import { UserInfo } from "./interface";


export const useUserInfo = defineStore('userInfo', {
  state: (): UserInfo => {
    return {
      id: 0,
      name: '',
      refreshToken: '',
      token: '',
      username: '',
      password: '',
      create_time: '',
      integral_number: '',
    }
  },
  actions: {
    removeToken() {
      this.token = ''
      this.refreshToken = ''
    },
    dataFill(state: UserInfo) {
      this.$state = state
    },
    setToken(token: string, type: 'token' | 'refreshToken') {
      this[type] = token
    },
    getToken(type: 'auth' | 'refresh' = 'auth') {
      return type === 'auth' ? this.token : this.refreshToken
    },
    getUsername() {
      return this.username
    },
    getIntegral() {
      return this.integral_number
    },
    getId() {
      return this.id
    }
  },
  persist: {
    key: USER_INFO,
  },
});