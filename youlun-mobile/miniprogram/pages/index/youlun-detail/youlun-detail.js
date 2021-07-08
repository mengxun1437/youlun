// miniprogram/pages/index/youlun-detail/youlun-detail.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    options: {},
    swiperImageList: [
      "../../static/images/home.png"
    ],
    rooms:[]
  },

  onLoad: function (options) {
    const globalData = app.globalData
    console.log(app.globalData)
    console.log(options)
    this.setData({
      options,
      rooms:globalData.youlun.find((item)=>item.wayId==options.wayId).rooms
    });
  },


  onClick:function(e){
    const roomId = e.currentTarget.dataset.roomid;
    if(!roomId) return
    wx.navigateTo({
      url: `../youlun-order/youlun-order?wayId=${this.options.wayId}&roomId=${roomId}`,
    })
  }
});
