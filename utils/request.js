/**
 * @description 请求接口封装
 * @author 
 * */

let hasInvalid = false // token失效，不同地方多次调用此变量也可以被访问
// 添加白名单
const whiteList = ['/system/auth/login']

/**
 * @description 请求方法封装
 * @desc 错误统一拦截
 * @desc token过期统一处理
 * @desc then里会返回所有的业务状态码，所以不是200的要返回提示
 * @desc catch里只拦截接口请求错误，如404、401、500和fail里的错误
 * 把这些错误统一成一种格式返回提示
 * @param {String} [config.url] - 请求地址
 * @param {String} [config.method] - 请求方法
 * @param {Object} [config.data] - 请求参数 {}
 * @param {String} [config.loadMask] - 加载动画
 * @param {Object} [config.header] - 自定义请求头
 * @param {Object} [config.timeout] - 超时时间
 * @example request({})
 * */
// const baseUrl = 'http://109.123.242.89/api'
const baseUrl = 'http://122.51.235.203:9202/api'
function request(config) {
  return new Promise((resolve, reject) => {
    if (config.loadMask) {
      uni.showLoading({
        title: '加载中,请稍后...'
      })
    }

    const header = {
      ...config.header
    }
    // 设置请求头，进行鉴权
    if (uni.getStorageSync('token')) {
      const token = uni.getStorageSync('token')
      header['Authorization'] = token
    }
    let params = config.data
    let url = `${baseUrl}${config.url}`
    if (config.type === 'params') {
      url = url + '/?'
      console.log(config.data, url)
      for (let i in config.data) {
        url += i + '=' + config.data[i] + "&"
      }
      if (url) url = url.substr(0, url.length-1)
      console.log(config.data, url)
      params= ''
    }
    uni.request({
      url: url,
      method: config.method,
      data: params,
      header,
      timeout: config.timeout || 30000, // 30s的超时时间
      success(response) {

        // 返回的响应根据具体项目而定
        const data = response.data
        if (data.code === 200 || data.code === 0) {
          resolve(data)
        } else if (data.code == 600) {
          if (hasInvalid) return // 已经有失效跳转到登录
          hasInvalid = true
          uni.clearStorageSync()
          if (whiteList.includes(config.url)) {
            hasInvalid = false
            uni.showToast({
              title: data.msg,
              icon: 'none',
              duration: 2000
            })
            reject(data)
          } else {
            // 跳转到登录页
            uni.showToast({
              title: '登录过期',
              icon: 'none',
              duration: 1500,
              complete: function() {
                hasInvalid = false
                uni.reLaunch({
                  url: '/pages/login/index'
                })
              }
            })
          }
        } else {
          uni.showToast({
            title: data.msg,
            icon: 'none',
            duration: 2000
          })
          reject(data)
        }
      },
      fail(err) {
        reject(err)
      },
      complete() {
        if (config.loadMask) {
          uni.hideLoading()
        }
      }
    })
  })
}

export default request