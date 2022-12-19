import request from '../util/request'

export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
