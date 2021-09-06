import request from '@/utils/request'

/* ** ** ** ** ** ** ** ** ** *
* ** ** *Version:  1.o* ** ** *
* ** ** ** ** ** ** *** ** ** */

/**
 * 企业信息查询接口
 */
export function getFollowList(params) {
  return request({
    url: '/merchantInfo/list',
    method: 'get',
    params: {
      ...params
    }
  })
}
/**
 * 用户点击查询
 */
export function getUserList(params) {
  return request({
    url: '/userClick/list',
    method: 'get',
    params: {
      ...params
    }
  })
}
/**
 * 短信信息查询
 */
export function getMesList(params) {
  return request({
    url: '/sms/list',
    method: 'get',
    params: {
      ...params
    }
  })
}
/**
 * 上传短信表
 */
export function upSms(params, type) {
  return request({
    url: `/sms/upload?type=${type}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    method: 'post',
  })
}
/**
 * 上传商户表
 */
export function upBusiness(data, options) {
  return request({
    url: '/merchantInfo/upload',
    params: {
      ...options
    },
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    method: 'post',
  })
}
/**
 * 上传用户点击表
 */
export function upUser(params) {
  return request({
    url: '/userClick/upload',
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    method: 'post',
  })
}
/**
 * 用户点击列表下载
 */
export function downloadUserFile(params) {
  return request({
    url: '/userClick/export',
    method: 'get',
    params: {
      ...params
    }
  })
}
/**
 * 商户信息列表下载
 */
export function downloadBusinessFile(params) {
  return request({
    url: '/merchantInfo/export',
    method: 'get',
    params: {
      ...params
    }
  })
}
/**
 * 短信信息列表下载
 */
export function downloadMesFile(params) {
  return request({
    url: `/sms/export`,
    method: 'get',
    params: {
      ...params
    }
  })
}
/**
 * 获取所有标签
 */
export function allLables(params) {
  return request({
    url: '/label/list',
    method: 'get',
    params: {
      ...params
    }
  })
}
/**
 * 获取未分配、已分配签名列表
 */
export function getSignList(params) {
  return request({
    url: '/sign/list',
    method: 'get',
    params: {
      ...params
    }
  })
}
/**
 * 添加标签
 */
export function addLabel(params) {
  return request({
    url: '/label/add',
    method: 'post',
    params: {
      ...params
    }
  })
}
// 修改行业标签
export function modifyIndustryLabel(params) {
  return request({
    url: '/label/industry/update',
    method: 'post',
    data: {
      ...params
    }
  })
}
/**
 * 根据标签查询手机号
 */
export function filterLabels(params) {
  return request({
    url: '/label/phone/list',
    method: 'post',
    data: {
      ...params
    }
  })
}
/**
 * 添加标签
 */
export function exportPhones(params) {
  return request({
    url: '/label/phone/export',
    method: 'post',
    data: {
      ...params
    }
  })
}

/* ** ** ** ** ** ** ** ** ** *
* ** ** *Version:  2.o* ** ** *
* ** ** ** ** ** ** *** ** ** */

/* 
签名管理
*/

//  为签名打标签（全量标签）
export function postLabel(params) {
  return request({
    url: '/label/add',
    method: 'post',
    data: {
      ...params
    }
  })
}

export function getProvince() {
  return request({
    url: `/provinces`,
    method: 'get'
  })
}
export function getProvinceCities(province: string) {
  return request({
    url: `/${province}/cities`,
    method: 'get'
  })
}
// 新增行业
export function postNewCondition(params: any) {
  return request({
    url: '/label/industry/add',
    method: 'post',
    data: {
      ...params
    }
  })
}
export function getPhoneList(params: any, page: any) {
  return request({
    url: '/phone/list',
    method: 'post',
    params: {
      ...page
    },
    data: {
      ...params
    }
  })
}
export function postPhoneExport(params: any) {
  return request({
    url: '/phone/export',
    method: 'post',
    data: {
      ...params
    }
  })
}

export function getIndustry() {
  return request({
    url: '/label/industry',
    method: 'get'
  })
}

/* 
2021.4.13
批量删除签名
*/
export function delSigns(options) {
  return request({
    url: '/sign/del',
    method: 'post',
    params: {
      ...options
    }
  })
}

/* 
2021.4.15
查询/导出活跃库手机号
*/
export function getActiveList(options) {
  return request({
    url: '/phone/active/list',
    method: 'post',
    params: {
      ...options
    }
  })
}
export function exportActiveList(options) {
  return request({
    url: '/phone/active/export',
    method: 'post',
    params: {
      ...options
    }
  })
}
export function uploadActiveList(data,options) {
  return request({
    url: '/phone/active/upload',
    data: data,
    method: 'post',
    params: {
      ...options
    }
  })
}

export function downloadFileByName(name) {
  return request({
    url: '/download',
    method: 'get',
    params: {
      fileName: name
    }
  })
}

export function delLabelBySign(options) {
  return request({
    url: '/sign/label/del',
    method: 'post',
    data: {
      ...options
    }
  })
}
// 修改指定签名的行业标签
export function updateLabelBySign(options) {
  return request({
    url: '/sign/label/update',
    method: 'post',
    data: {
      ...options
    }
  })
}

/* 
2021.5.6
导出签名
*/
export function exportSign(options) {
  return request({
    url: '/phone/sign/export',
    method: 'get',
    params: {
      ...options
    }
  })
}