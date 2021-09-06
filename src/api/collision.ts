import request from '@/utils/request'
/* 
2021.6.3
碰撞库
*/

export function exportCollision(options) {
    return request({
        url: '/phone/collision/export',
        method: 'post',
        params: {
            ...options
        }
    })
}
export function listCollision(options) {
    return request({
        url: '/phone/collision/list',
        method: 'post',
        params: {
            ...options
        }
    })
}
export function signCollision(options) {
    return request({
        url: '/phone/collision/sign/list',
        method: 'post',
        params: {
            ...options
        }
    })
}
export function uploadCollision(data,options) {
    return request({
        url: '/phone/collision/upload',
        method: 'post',
        data,
        params: {
            ...options
        }
    })
}