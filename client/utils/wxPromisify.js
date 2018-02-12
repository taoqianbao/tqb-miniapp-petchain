/******************************************
 * @doc function
 * @name promisify
 * @requires 'es6-promise' module
 *
 * @description
 * 通用工具方法，将特定类型的微信函数Promise化
 ******************************************/
// boc we don't have node-modules , so we add libs directly
// const Promise = require('es6-promise').Promise 
const Promise = require('../libs/js/bluebird.min')

/**
 * 检测参数是否是「函数」类型
 * @param value
 * @return Boolean
 */
const isFunction = value => Object.prototype.toString.call(value) === '[object Function]'

/**
 * 检测参数是否是「Promise」类型
 * @param value
 * @return Boolean
 */
const isPromise = value => Object.prototype.toString.call(value) === '[object Promise]'

/**
 * 将微信提供的回调函数 Promise 化
 * @params request {Function} 小程序原始API，如wx.login
 * @return Function
 */
const promisify = request => (args = {}) => new Promise((resolve, reject) => {
  if (isPromise(request)) {
    return request
  }

  const params = { ...args }

  params.success = res => {
    isFunction(args.success) && args.success(res)
    return resolve(res)
  }
  params.fail = res => {
    isFunction(args.fail) && args.fail(res)
    return reject(res)
  }

  request(params)
})

module.exports = promisify
