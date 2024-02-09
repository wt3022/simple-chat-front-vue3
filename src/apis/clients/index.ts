import axios from 'axios'
import { useAuthStore } from '@/stores/auth.ts'

const BaseURL = import.meta.env.VITE_APP_API_BASE_URL

const axiosInstance = axios.create({
  baseURL: BaseURL,
})

axiosInstance.interceptors.request.use((config) => {
  if (!useAuthStore.accessToken) return config
  if (!useAuthStore.refreshToken) return config

  config.headers['Authorization'] = `jwt ${useAuthStore.accessToken}`
  return config
})

export const axiosClient = axiosInstance
