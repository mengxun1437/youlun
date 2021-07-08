import { getWayInfo } from "../../utils";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    options: {},
    swiperImageList: [],
    rooms:[]
  },

  onLoad: function (options) {
    const wayInfo = getWayInfo(options.wayId)
    this.setData({
      options,
      swiperImageList:[wayInfo.youlunSrc],
      rooms:wayInfo.rooms
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
