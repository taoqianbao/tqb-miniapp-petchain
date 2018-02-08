// pages/slave/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isYours: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * onBuy
   */
  onBuy: function () {

    let that = this

    wx.showModal({
      title: '提示',
      content: '您确定购买？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')

          that.setData({
            isYours: true
          })

          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
          
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * onWork
   */
  onWork: function(){
    wx.showToast({
      title: '他开始挖煤啦',
      icon: 'success',
      duration: 2000
    })
  }

})