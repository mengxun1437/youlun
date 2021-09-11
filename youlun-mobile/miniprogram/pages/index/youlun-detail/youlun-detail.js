import {
  getAllCuriseInfo,
  getRoomInfoByCuriseId
} from "../../service";
import {
  groupArray,
  RoomType,
  showErrorTip
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

  onShow() {
    this.renderData()
  },

  renderData() {
    getAllCuriseInfo(this.data.options.wayId).then(res => {
      if (res.data.code === 0) {
        this.setData({
          swiperImageList: [res.data.data.imageUrl],
        })
      } else {
        showErrorTip("图片加载失败")
      }
    }, error => {
      showErrorTip("图片加载失败")
    })

    getRoomInfoByCuriseId(this.data.options.wayId).then(res => {
      const rooms = res.data.data.map(room => ({
        roomId: room.id,
        name: room.roomName,
        area:room.area,
        hasFloor: room.hasFloor,
        price: room.price,
        src: room.roomImage,
        peopleNum: room.peopleNum,
        type:RoomType[room.roomType]
      }))
      this.setData({
        rooms:groupArray(rooms,'type',['type','list']),
        showLoading:false
      })
    }, err => {
      showErrorTip("房间数据加载失败")
    })
  },

  onLoad: function (options) {
    this.setData({
      options
    })
  },


  onClick: function (e) {
    const roomId = e.currentTarget.dataset.roomid;
    if (!roomId) return
    wx.navigateTo({
      url: `../youlun-order/youlun-order?wayId=${this.options.wayId}&roomId=${roomId}`,
    })
  }
});