// miniprogram/pages/index/youlun-detail/youlun-detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    options: {},
    swiperImageList: [
      "../../static/images/home.png",
      "../../static/images/home-dark.png",
      "../../static/images/order.png",
    ],
    introduction:"\t这里是测试文本\thello\n换行".repeat(100)
  },

  onLoad: function (options) {
    this.setData({
      options,
    });
  },

  onOrder:function(){
    wx.navigateTo({
      url: `../room-list/room-list?youlunId=${this.data.options.youlunId}`,
    })
  }
});
