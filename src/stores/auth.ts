import { defineStore } from 'pinia'
import { piniaStore } from '@/stores/index.ts'

interface AuthStore {
  accessToken: string | null
  refreshToken: string | null
  user: null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthStore => ({
    accessToken: null,
    refreshToken: null,
    user: null,
  }),
  getters: {},
  actions: {},
})(piniaStore)
