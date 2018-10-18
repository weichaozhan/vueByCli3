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
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * 获取验证码接口
 */
export const getCaptchaAPI = () => {
  return http({
    url: '/captcha',
    method: 'get',
    headers: {
      'Content-Type': 'image/png'
    }
  }) 
}