import request from '@/utils/request'

/* 
2021.5.7
cmpp-controller
*/
export function addChannelClient(options) {
  return request({
    url: '/cmpp/client/channel/add',
    method: 'post',
    data: {
      ...options
    }
  })
}
export function delChannelClient(options) {
  return request({
    url: '/cmpp/client/channel/del',
    method: 'post',
    data: {
      ...options
    }
  })
}
export function getChannelClient(options) {
  return request({
    url: '/cmpp/client/channel/list',
    method: 'get',
    params: {
      ...options
    }
  })
}
export function updChannelClient(options) {
  return request({
    url: '/cmpp/client/channel/upd',
    method: 'post',
    data: {
      ...options
    }
  })
}

export function addChannelServer(options) {
  return request({
    url: '/cmpp/server/channel/add',
    method: 'post',
    data: {
      ...options
    }
  })
}
export function delChannelServer(options) {
  return request({
    url: '/cmpp/server/channel/del',
    method: 'post',
    data: {
      ...options
    }
  })
}
export function getChannelServer(options) {
  return request({
    url: '/cmpp/server/channel/list',
    method: 'get',
    params: {
      ...options
    }
  })
}
export function updChannelServer(options) {
  return request({
    url: '/cmpp/server/channel/upd',
    method: 'post',
    data: {
      ...options
    }
  })
}