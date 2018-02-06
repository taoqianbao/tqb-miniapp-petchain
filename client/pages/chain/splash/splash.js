// pages/chain/splash/splash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    marqueePace: .5,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    marquee_margin: 30,

    //
    isShowPopup: false
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

    // var animation = wx.createAnimation({
    //   duration: 10000,
    //   timingFunction: 'ease-in-out'
    // })

    // this.animation = animation

    // //动画的脚本定义必须每次都重新生成，不能放在循环外
    // animation.translateX(200).step({ duration: 5000 }).translateX(0).step({ duration: 5000 })
    // this.setData({
    //   animationData: animation.export()
    // })

    // setInterval(function () {
    //   //动画的脚本定义必须每次都重新生成，不能放在循环外
    //   animation.translateX(300).step({ duration: 5000 }).translateX(-100).step({ duration: 5000 })

    //   this.setData({
    //     // 导出动画示例
    //     animationData: animation.export()
    //   })

    // }.bind(this), 10000)

    var that = this;

    var length = 542 //图片宽度

    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度

    console.log(length, windowWidth);

    that.setData({
      length: length,
      windowWidth: windowWidth
    });

    that.scrolltxt();// 第一个字消失后立即从右边出现


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

  /*
    isShowPopup
  */
  onShowSuccess: function () {
    this.setData({
      isShowPopup: true
    })
  },
  onHideSuccess: function () {
    this.setData({
      isShowPopup: false
    })
  },


  /**
   * 
   */
  scrolltxt: function () {
    var that = this;
    var length = that.data.length;//滚动元素的宽度
    var windowWidth = that.data.windowWidth;//屏幕宽度

    if (length > windowWidth) {
      var interval = setInterval(function () {
        var maxscrollwidth = length - windowWidth;
        //滚动的最大宽度，文字宽度+间距，如果需要一行文字滚完后再显示第二行可以修改marquee_margin值等于windowWidth即可
        var crentleft = that.data.marqueeDistance;
        if (crentleft < maxscrollwidth) {//判断是否滚动到最大宽度
          that.setData({
            marqueeDistance: crentleft + that.data.marqueePace
          })
        }
        else {
          that.setData({
            marqueeDistance: 0 // 直接重新滚动
          });
          clearInterval(interval);
          that.scrolltxt();
        }
      }, 20);
    }
    else {
      that.setData({ marquee_margin: "30" });//只显示一条不滚动右边间距加大，防止重复显示
    }
  }

})