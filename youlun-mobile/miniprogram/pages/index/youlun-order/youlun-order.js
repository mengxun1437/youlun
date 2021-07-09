import {
  addNewOrder,
  getAllCuriseInfo,
  getRoomDetailId,
} from "../../service"
import {
  RoomType,
  showErrorTip
} from "../../utils"

const globalData = getApp().globalData
// {{page}}.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    showConfirmModal: false,
    youlun: {
      name: '',
      way: '',
      duration: "",
      start: "",
    },
    room: {
      type: '',
      name: '',
      area: 0,
      peopleNum: 0,
      price: 0
    },
    roomPeopleInfo: [],
    user: {
      userName: '',
      userNumber: '',
      userPhone: ''
    }
  },


  renderData() {
    // const youlun = getWayInfo(options.wayId)
    // const rooms = youlun.rooms.find(room =>room.list.findIndex(item=>item.roomId ==  options.roomId) !== -1)
    // const room = rooms.list.find(room=>room.roomId == options.roomId)

    let _this = this
    showErrorTip("等待数据加载中...")
    getAllCuriseInfo(_this.options.wayId).then(res => {
      if (res.data.code === 0) {
        const youlun = res.data.data
        _this.setData({
          youlun: {
            name: youlun.name,
            way: youlun.lane,
            duration: youlun.duration,
            start: youlun.start,
          }
        })
      } else {
        showErrorTip("获取航线信息失败")
      }
    }, err => {
      showErrorTip("获取航线信息失败")
    })

    getRoomDetailId(_this.data.options.wayId, this.data.options.roomId).then(res => {
      if (res.data.code === 0) {
        const room = res.data.data
        _this.setData({
          room: {
            type: RoomType[room.roomType],
            name: room.roomName,
            area: room.area,
            peopleNum: room.peopleNum,
            price: room.price
          }
        })
      } else {
        showErrorTip("获取房间信息失败")
      }
    }, err => {
      showErrorTip("获取房间信息失败")
    })
  },

  onShow() {
    this.renderData()
  },

  onLoad: function (options) {
    this.setData({
      options
    })
  },


  onMdodalConfirm: function () {

    addNewOrder(globalData.openId, this.data.options.wayId, this.data.options.roomId, this.data.roomPeopleInfo.map(people => people.userName).join('-')).then(res => {
      if (res.data.code === 0) {
        wx.showToast({
          title: '预定成功',
          success: () => {
            wx.switchTab({
              url: '../../order/order',
            })
          }
        })
      } else {
        showErrorTip("预定失败哦")
      }
    }, err => showErrorTip("预定失败哦"))
  },

  onShowConfirmModal: function () {
    if (!globalData.openId) {
      showErrorTip("请先登录...");
      setTimeout(() => {
        wx.switchTab({
          url: '../../mine/mine',
        })
      }, 1000)
      return
    }

    this.setData({
      showConfirmModal: true
    })
  },

  onHideConfirmModal: function () {
    this.setData({
      showConfirmModal: false
    })
  },

  onDelete: function (e) {
    const index = e.currentTarget.dataset.index;
    this.data.roomPeopleInfo.splice(index, 1);
    this.setData({
      roomPeopleInfo: this.data.roomPeopleInfo
    })
  },


  onChange: function (e) {
    const label = e.currentTarget.dataset.label;
    const value = e.detail
    if (!label || !value) return
    switch (label) {
      case 'name':
        this.data.user.userName = value;
        break;
      case 'number':
        this.data.user.userNumber = value;
        break;
      case 'phone':
        this.data.user.userPhone = value;
        break;
    }
    this.setData({
      user: this.data.user
    })
  },


  addUserInfo: function () {
    const name = this.data.user.userName;
    const number = this.data.user.userNumber;
    const phone = this.data.user.userPhone;
    if (!name || !number || !phone) return
    this.data.roomPeopleInfo.push(this.data.user);
    this.setData({
      roomPeopleInfo: this.data.roomPeopleInfo,
      user: {
        userName: '',
        userNumber: '',
        userPhone: ''
      }
    })
    this.hideModal()
  },


  showModal: function () {
    this.setData({
      showModal: true
    })
  },


  hideModal: function () {
    this.setData({
      showModal: false
    })
  }

})