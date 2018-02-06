//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  onLaunch: function () {
    qcloud.setLoginUrl(config.service.loginUrl)
  },
  onShow: function (options) {
    console.log(JSON.stringify(options))
  },
  onHide: function () {
  },
  onError: function (msg) {
    console.log(msg)
  }
})