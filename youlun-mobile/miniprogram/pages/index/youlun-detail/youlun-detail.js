import {
  getWayInfo
} from "../../utils";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    options: {},
    showLoading: true,
    swiperImageList: [],
    rooms: []
  },

  onLoad: function (options) {
    const wayInfo = getWayInfo(options.wayId)
    this.setData({
      swiperImageList: [wayInfo.youlunSrc]
    })
    setTimeout(() => {
      this.setData({
        options,
        rooms: wayInfo.rooms,
        showLoading:false
      });
    }, 1000)
  },


  onClick: function (e) {
    const roomId = e.currentTarget.dataset.roomid;
    if (!roomId) return
    wx.navigateTo({
      url: `../youlun-order/youlun-order?wayId=${this.options.wayId}&roomId=${roomId}`,
    })
  }
});