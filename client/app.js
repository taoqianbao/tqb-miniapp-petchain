//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

const helper = require('./utils/helpers')

App({
  onLaunch: function () {
    qcloud.setLoginUrl(config.service.loginUrl)
  },
  onShow: function (options) {

    console.log(helper.formatTime('ddd'))
    console.log(new helper().formatDate('time'))

    console.log(JSON.stringify(options))
  },
  onHide: function () {
  },
  onError: function (msg) {
    console.log(msg)
  }
})