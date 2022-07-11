import { axios } from '@/utils/request'
//post
export function postTimeAction(url, parameter) {
    //时间戳，添加在请求接口 Header
    return axios({
        url: `${url}?timestamp=${new Date().valueOf()}`,
        method: 'post',
        data: parameter,
    })
}
//get
export function getTimeAction(url, parameter) {
    //将时间戳，添加在请求接口 Header
    parameter.timestamp = new Date().valueOf()
    return axios({
        url: `${url}?timestamp=${new Date().valueOf()}`,
        method: 'get',
        params: parameter
    })
}
//post
export function postAction(url, parameter) {
    //无时间戳
    return axios({
        url: url,
        method: 'post',
        data: parameter,
    })
}
//get
export function getAction(url, parameter) {
    //无时间戳
    return axios({
        url: url,
        method: 'get',
        params: parameter,
    })
}