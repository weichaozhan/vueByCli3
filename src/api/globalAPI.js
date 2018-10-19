import http from '../public/http'

/**
 * 登录接口
 * @param {Object} data 登录参数
 */
export const loginAPI = (data) => {
    return http({
        url: '/users/login',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}