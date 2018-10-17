import http from '../public/http'

export const testAPI = (data) => {
  return http({
    url: '/channel/extension',
    method: 'post',
    data: data
  })
}

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