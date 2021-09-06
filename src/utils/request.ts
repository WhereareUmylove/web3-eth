import { getStorage, removeStorage } from '@/utils/storage'
import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store/index'
import qs from "qs"

const url = process.env.VUE_APP_BASE_URL
const service = axios.create({
  baseURL: url || '/api',
  timeout: 180000
})

service.interceptors.request.use(
  config => {
    if (getStorage()) {
      config.headers['Authorization'] = 'Bearer ' + getStorage()
    }
    if (config.url === "/phone/sign/export") {
      config.paramsSerializer = function (params) {
        return qs.stringify(params, { arrayFormat: "repeat" })
      }
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    store.state.loading = false
    if (response.data.code !== 0) {
      if (response.data.code === 401) {
        removeStorage()
        store.commit('SET_TOKEN', '')
      } else if (response.data.code === 403) {
        removeStorage()
        store.commit('SET_TOKEN', '')
      } else {
        Message.error(response.data.message)
      }
    }
    return response.data
  },
  error => {
    store.state.loading = false
    if (error.code) {
      Message.error('请求超时，服务端不可用')
    }
    Promise.reject(error)
  }
)
service['$post'] = function (url, params, h) {
  return service.post(url, params, {
    headers: {
      'Content-Type': 'application/json',
      ...h
    }
  })
}
export default service
