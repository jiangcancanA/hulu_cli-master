/**
 * @desc: 订单接口
 * @author: cxx
 */

import request from '../utils/request'

const api = {
  // 论坛
  appRegister: "/app/info/add",
  forumList: "/mes-forum-info/page",
  collectOrLike: "/mes/collectOrLike",
  follow: "/mes/follow", // 关注
  upload: "/file-info/upload",
  addUpload: "/mes-forum-info/add",
  addMessage: "/mes-forum-comment/add", // 添加评论
  myDetailData: "/mes-forum-info/my",
  comment: '/mes-forum-comment/list/comment',

  // 登录
  getUserqr: "/auth/user/pc/qr",
  // 获取微信扫码登录状态
  getLoginStatus: "/auth/user/pc/loginStatus",

  // 首页
  currentData: "/home/index/current_data",
  todayInfo: "/home/index/today",
  noticeList: "/mes-warn-info/list",
  onlineLineData: "/online-info/day",
  goodsTableList: "/home/index/goods_index", // 热门饰品
  marketData: '/home/index/current_market_data',

  // 饰品
  goodsTyleList: "/goods-type/page", // 分页查询饰品类型,
  goodsList: "/goods-info/page",
  goodsDetailChart: '/goods-info/chart',
  goodsDetailInfo: '/goods-info/goods_detail',
  unpackData: '/goods-info/container',
  searchGoods: '/goods-info/search',
  rankData: '/home/rank/online_sell',
  forumComment: 'mes-forum-comment/list/comment',
  addForumComment: '/mes-forum-comment/add',

  // 收藏
  storeList: '/goods-folder/list',
  addstoreInfo: '/goods-folder/addInfo',
  addCollect: '/goods-folder/add',
  goodsListByCollect: '/goods-folder/goods/list',
  searchGoodsByName: '/goods-folder/goods/byName',
  banding: '/goods-folder/banding/stream',
  relieve: '/goods-folder/relieve/stream'
};

export function appRegisterApi(parameter) {
  return request({
    url: api.appRegister,
    method: "POST",
    data: parameter
  })
}

export function getForumListApi(parameter) {
  return request({
    url: api.forumList,
    method: "POST",
    data: parameter,
  });
}

export function collectOrLikeApi(parameter) {
  return request({
    url: api.collectOrLike,
    method: "POST",
    data: parameter,
  });
}

export function followApi(parameter) {
  return request({
    url: api.follow,
    method: "POST",
    data: parameter,
  });
}

export function uploadApi(parameter) {
  return request({
    url: api.upload,
    method: "POST",
    data: parameter,
  });
}

export function addUploadApi(parameter) {
  return request({
    url: api.addUpload,
    method: "POST",
    data: parameter,
  });
}

export function addMessageApi(parameter) {
  return request({
    url: api.addMessage,
    method: "POST",
    data: parameter,
  });
}

export function myDetailDataApi(parameter) {
  return request({
    url: api.myDetailData,
    method: "get",
    data: parameter,
  })
}
export function getUserqrApi() {
  return request({
    url: api.getUserqr,
    method: "get",
  });
}

export function getLoginStatusApi(parameter) {
  return request({
    url: api.getLoginStatus,
    method: "get",
    data: parameter,
    type: "params"
  });
}

export function currentDataApi(parameter) {
  return request({
    url: api.currentData + "?type=" + parameter.type,
    method: "POST",
  });
}

export function todayInfoApi() {
  return request({
    url: api.todayInfo,
    method: "POST",
  });
}

export function noticeListApi(params) {
  return request({
    url: api.noticeList,
    method: "get",
    data: params,
    type: 'params'
  });
}

export function onlineLineDataApi(params) {
  return request({
    url: api.onlineLineData,
    method: "get",
    data: params,
    type: 'params'
  });
}

export function goodsTableListApi(params) {
  return request({
    url: api.goodsTableList,
    method: "POST",
    data:params,
  });
}

export function marketDataApi(params) {
  return request({
    url: api.marketData,
    method: "POST",
    data: params,
  })
}


export function goodsTyleListApi(params) {
  return request({
    url: api.goodsTyleList,
    method: "POST",
    data: params,
  });
}

export function goodsListApi(params) {
  return request({
    url: api.goodsList,
    method: "POST",
    data: params,
  });
}

export function goodsDetailChartApi(params) {
  return request({
    url: api.goodsDetailChart,
    method: "POST",
    data: params,
  });
}

export function goodsDetailInfoApi(params) {
  console.log('params', params)
  return request({
    url: api.goodsDetailInfo,
    method: "get",
    data: params,
    type: ''
  });
}

export function unpackDataApi(params) {
  return request({
    url: api.unpackData,
    method: "POST",
    data: params,
    type: 'params'
  })
}

export function searchGoodsApi(params) {
  return request({
    url: api.searchGoods,
    method: "POST",
    data: params,
    type: 'params'
  })
}

export function rankDataApi(params) {
  return request({
    url: api.rankData,
    method: "POST",
    data: params,
  })
}

export function forumCommentApi(params) {
  return request({
    url: api.forumComment,
    method: "get",
    data: params,
    type: 'params'
  })
}

export function addForumCommentApi(params) {
  return request({
    url: api.addForumComment,
    method: "POST",
    data: params,
  })
}


export function storeListApi() {
  return request({
    url: api.storeList,
    method: "get"
  })
}

export function commentApi(params) {
  return request({
    url: api.comment,
    method: "get",
    data: params,
    type: 'params'
  })
}

export function addstoreInfoApi(params) {
  return request({
    url: api.addstoreInfo,
    method: "POST",
    data: params
  })
}

// 添加收藏夹
export function addCollectApi(params) {
  return request({
    url: api.addCollect,
    method: "POST",
    data: params
  })
}

export function goodsListByCollectApi(params) {
  return request({
    url: api.goodsListByCollect,
    method: "get",
    data: params,
    type: 'params'
  })
}

export function searchGoodsByNameApi(params) {
  return request({
    url: api.searchGoodsByName,
    method: "get",
    data: params,
    type: 'params'
  })
}

export function bandingApi(params) {
  return request({
    url: api.banding,
    method: "get",
    data: params,
    type: 'params'
  })
}
export function relieveApi() {
  return request({
    url: api.relieve,
    method: "get",
  })
}
