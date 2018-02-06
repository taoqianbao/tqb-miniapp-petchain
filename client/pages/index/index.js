//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
  },

  /*
  生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog")
    this.tormentdialog = this.selectComponent('#tormentdialog')
    // this.showTormentDialog()
    // this.showDialog()
  },

  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')

    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 100)
  },

  // dialog
  showDialog() {
    this.dialog.showDialog();
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    // this.dialog.hideDialog();
    this.tormentdialog.hideDialog();
  },

  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    // this.dialog.hideDialog();
    this.tormentdialog.hideDialog();
  },

  //torment
  showTormentDialog: function () {
    this.tormentdialog.showDialog();
  }
})
