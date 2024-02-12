import { useAuthStore } from '@/stores/auth.ts'
import { Api } from '@/schema/_generated/API'

const BaseURL = import.meta.env.VITE_APP_API_BASE_URL

// 参考
// https://zenn.dev/taksnr/articles/2167a25cb31295
const api = new Api({
  baseURL: BaseURL,
})

api.instance.interceptors.request.use((config) => {
  if (!useAuthStore.accessToken) return config
  if (!useAuthStore.refreshToken) return config

  config.headers['Authorization'] = `jwt ${useAuthStore.accessToken}`
  return config
})

api.instance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong',
    ),
)

export const axiosClient = api
