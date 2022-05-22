import Request from "./index"
import type { RequestConfig } from './types'
interface SCBRequestConfig<T> extends RequestConfig {
    data?: T
}
interface SCBResponse<T> {
    code: number
    message: string
    data: T
}

const request = new Request({
    baseURL: "/api",
    timeout: 1000 * 60 * 5, //5分钟超时时间
    interceptors: {
        // 请求拦截器
        requestInterceptors: config => {
            console.log('实例请求拦截器')

            return config
        },
        // 响应拦截器
        responseInterceptors: result => {
            console.log('实例响应拦截器')
            return result
        },
    },
})

/**
 * @description: 函数的描述
 * @interface D 请求参数的interface
 * @interface T 响应结构的intercept
 * @param {SCBRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const scbRequest = <D, T = any>(config: SCBRequestConfig<D>) => {
    const { method = 'GET' } = config
    if (method === 'get' || method === 'GET') {
        config.params = config.data
    }
    return request.request<SCBResponse<T>>(config)
}

export default scbRequest
