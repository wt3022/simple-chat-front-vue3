import { axiosClient } from '@/apis/clients'
import { JWT, TokenRefresh } from '@/schema/_generated/API'
import { useAuthStore } from '@/stores/auth.ts'
import { AxiosError } from 'axios'

class AuthService {
  async login(): Promise<void> {
    await axiosClient.auth
      .authLoginCreate({ email: 'admin@example.com', password: 'hogehoge' })
      .then((res) => {
        const resBody = res.data as JWT
        useAuthStore.accessToken = resBody.access
        useAuthStore.refreshToken = resBody.refresh
        console.log('login done')
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })
  }

  async refresh(): Promise<void> {
    if (!useAuthStore.refreshToken) {
      console.log('ログインしてください。')
      return
    }

    await axiosClient.auth
      .authTokenRefreshCreate({
        refresh: useAuthStore.refreshToken,
      })
      .then((res) => {
        const resBody = res.data as TokenRefresh
        useAuthStore.accessToken = resBody.access
        useAuthStore.refreshToken = resBody.refresh
        console.log('refresh done')
      })
  }
}

export const authService = new AuthService()
