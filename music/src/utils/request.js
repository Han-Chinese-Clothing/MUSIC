import Vue from 'vue'
import axios from 'axios'
import { VueAxios } from './axios'

const config = require("./config");
const baseURL = config[process.env.NODE_ENV].baseUrl;

const service = axios.create({
  baseURL: baseURL,
  timeout: 9000,
})
const err = (error) => {
  if (error.response) {
    let data = error.response.data
    console.log('------异常响应------', error.response.status)
    switch (error.response.status) {
      case 403:
        Vue.prototype.$message({ type: 'error', message: '拒绝访问!', showClose: true })
        break
      case 500:
        Vue.prototype.$message({ type: 'error', message: '程序异常!', showClose: true })
        break
      case 404:
        Vue.prototype.$message({ type: 'error', message: '很抱歉，资源未找到!', showClose: true })
        break
      case 504:
        Vue.prototype.$message({ type: 'error', message: '网络超时!', showClose: true })
        break
      case 401:
        Vue.prototype.$message({ type: 'error', message: '很抱歉，登录已过期，请重新登录!', showClose: true })
        break
      default:
        Vue.prototype.$message({ type: 'error', message: data ? data.message : '请求异常！', showClose: true })
        break
    }
  } else if (error.message) {
    if (error.message.includes('timeout')) {
      Vue.prototype.$message({ type: 'error', message: '网络超时!', showClose: true })
    } else if (!error.message.includes('cancelToken')) {
      Vue.prototype.$message({ type: 'error', message: error.message, showClose: true })
    }
  }
  return Promise.reject(error)
}
service.interceptors.request.use((config) => {
  config.cancelToken = new axios.CancelToken((cancelToken) => {
    window.axiosCancel.push({ cancelToken })
  })
  return config

}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
  return response.data
}, err)
function cancel() {
  let cancelArr = window.axiosCancel || [];
  cancelArr.forEach((ele, index) => {
    ele.cancelToken("cancelToken")
  })
  window.axiosCancel.splice(0, cancelArr.length)
}
const installer = {
  vm: {},
  install(Vue, router = {}) {
    Vue.use(VueAxios, router, service)
  }
}
export {
  installer as VueAxios,
  service as axios,
  cancel as cancel
}
