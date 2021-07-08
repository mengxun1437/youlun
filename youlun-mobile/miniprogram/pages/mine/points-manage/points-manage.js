// pages/mine/points-manage/points-manage.js
var app=getApp()
var commoditys = app.globalData.mine.pointCommodity
import Dialog from '@vant/weapp/dialog/dialog';
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      commoditys:commoditys
    })
    console.log(this.data.commoditys)
  },

  getUserInfo(event) {
    console.log(event.detail);
  },

  onClose() {
    this.setData({ show: false });
  },


  pointDecrease:function(e){
    console.log(e.target.id)
    let url=commoditys[e.target.id].commodityUrl
    let name=commoditys[e.target.id].commodityName
    let point=commoditys[e.target.id].commodityPoint
    let points=app.globalData.mine.points
    this.setData({
      url:url,
      show:true,
      name:name,
      point:point,
      points:points
    })


    const beforeClose = (action)=>new Promise((resolve) => {
      setTimeout(() => {
        if (action === 'confirm') {
          let lastPoint=this.data.points-this.data.point
          if(lastPoint>=0){
            getApp().globalData.mine.points = lastPoint
            
            wx.switchTab({
              url: '/pages/mine/mine',
              success: function (e) {
               
                var page = getCurrentPages().pop();
                if (page == undefined || page == null) return;
                page.onLoad();
               
              }
            })
          }else{
            Toast.fail('兑换失败，你的积分余额不够');
          }
          resolve(true);
        } else {
          // 拦截取消操作
          resolve(true);
        }
      }, 500);
    });
  

    Dialog.confirm({
      title: '积分兑换',
      confirmButtonText:"确认兑换",
      messageAlign:"left",
      beforeClose
    });
  }
})