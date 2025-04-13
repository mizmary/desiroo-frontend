import { errorCatch } from "@api/error"
import axios, { CreateAxiosDefaults } from "axios"
import { getAccessToken, removeFromStorage } from "@/services/auth-token.service"
import { authService } from "@/services/auth.service"

const BaseUrl: string = import.meta.env.VITE_BASEURL || ""

const options: CreateAxiosDefaults = {
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
}

const axiosClassic = axios.create(options)

const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken()

  if (config.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config
    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided") &&
      error.config &&
      !error._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        await authService.getNewTokens()
        return axiosWithAuth.request(originalRequest)
      } catch (error) {
        if (errorCatch(error) === "jwt expired") removeFromStorage()
      }
    }
    throw error
  }
)

export { axiosClassic, axiosWithAuth }
