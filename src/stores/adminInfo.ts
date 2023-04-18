import { defineStore } from "pinia";
import { ADMIN_INFO } from "./constant/checkKey";
import { AdminInfo } from "./interface";


export const useAdminInfo = defineStore('adminInfo', {
  state: (): AdminInfo => {
    return {
      id: 0,
      name: '',
      token: '',
      refreshToken: '',
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
    dataFill(state: AdminInfo) {
      this.$state = state
    },
    setToken(token: string, type: 'token' | 'refreshToken') {
      this[type] = token
    },
    getToken(type: 'auth' | 'refresh' = 'auth') {
      return type === 'auth' ? this.token : this.refreshToken
    },
    getUserName() {
      return this.username;
    },
    getId() {
      return this.id;
    }
  },
  persist: {
    key: ADMIN_INFO,
  },
});