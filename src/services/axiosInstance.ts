import axios from 'axios'
import type { AxiosInstance } from 'axios'

const baseURL: string = import.meta.env.VITE_API_TODO_URL as string

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access - maybe redirect to login')
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
