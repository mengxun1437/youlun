import { addOrder, getWayInfo } from "../../utils"

// {{page}}.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    showConfirmModal:false,
    youlun:{
      name:'',
      way:'',
      duration:"",
      start:"",
    },
    room:{
      type:'',
      name:'',
      area:0,
      peopleNum:0,
      price:0
    },
    roomPeopleInfo: [],
    user: {
      userName: '',
      userNumber: '',
      userPhone: ''
    }
  },

  onLoad:function(options){
    this.setData({
      options
    })
    const youlun = getWayInfo(options.wayId)
    const rooms = youlun.rooms.find(room =>room.list.findIndex(item=>item.roomId ==  options.roomId) !== -1)
    const room = rooms.list.find(room=>room.roomId == options.roomId)

    this.setData({
      youlun:{
        name:youlun.youlun,
        way:youlun.name,
        duration:youlun.duration,
        start:youlun.start,
      },
      room:{
        type:rooms.type,
        name:room.name,
        area:room.area,
        peopleNum:room.peopleNum,
        price:room.price
      }
    })
  },


  onMdodalConfirm:function(){
      wx.showToast({
      title: '预定成功',
      success:()=>{
        addOrder(this.data.options.wayId,this.data.options.roomId,this.data.roomPeopleInfo)
        setTimeout(()=>{
          wx.switchTab({
            url: '../../order/order',
          })
        },2000)
      }
    })
  },

  onShowConfirmModal:function(){
    this.setData({
      showConfirmModal:true
    })
  },

  onHideConfirmModal:function(){
    this.setData({
      showConfirmModal:false
    })
  },

  onDelete:function(e){
    const index = e.currentTarget.dataset.index;
    this.data.roomPeopleInfo.splice(index,1);
    this.setData({
      roomPeopleInfo:this.data.roomPeopleInfo
    })
  },


  onChange:function(e){
    const label = e.currentTarget.dataset.label;
    const value = e.detail
    if(!label || !value) return 
    switch(label){
      case 'name':this.data.user.userName = value;break;
      case 'number':this.data.user.userNumber = value;break;
      case 'phone':this.data.user.userPhone = value;break;
    }
    this.setData({
      user:this.data.user
    })
  },


  addUserInfo:function(){
    const name = this.data.user.userName;
    const number = this.data.user.userNumber;
    const phone = this.data.user.userPhone;
    if(!name || !number || !phone) return
    this.data.roomPeopleInfo.push(this.data.user);
    this.setData({
      roomPeopleInfo:this.data.roomPeopleInfo,
      user:{
        userName:'',
        userNumber:'',
        userPhone:''
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