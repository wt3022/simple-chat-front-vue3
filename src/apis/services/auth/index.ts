import { axiosClient } from '@/apis/clients'
import { useAuthStore } from '@/stores/auth.ts'
import { AxiosError } from 'axios'

interface User {
  pk: string
  username: string
  email: string
  first_name: string
  last_name: string
}

interface LoginResponse {
  access: string
  refresh: string
  user: User
}

interface RefreshResponse {
  access: string
  refresh: string
}

class AuthService {
  async login() {
    await axiosClient
      .post('/auth/login/', {email: "admin@example.com", password: "hogehoge"})
      .then((res) => {
        const resBody = res.data as LoginResponse
        useAuthStore.accessToken = resBody.access
        useAuthStore.refreshToken = resBody.refresh
        console.log('login done')
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })
  }

  async refresh() {
    if (!useAuthStore.refreshToken) {
      console.log('ログインしてください。')
      return
    }

    await axiosClient
      .post('/auth/token/refresh/', { refresh: useAuthStore.refreshToken })
      .then((res) => {
        const resBody = res.data as RefreshResponse
        useAuthStore.accessToken = resBody.access
        useAuthStore.refreshToken = resBody.refresh
        console.log('refresh done')
      })
  }

  info() {
    console.log(`token: ${useAuthStore.accessToken}`)
    console.log(`refresh: ${useAuthStore.refreshToken}`)
  }
}

export const authService = new AuthService()
