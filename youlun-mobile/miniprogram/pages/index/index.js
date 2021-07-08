// miniprogram/pages/index/index.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
      swiperImageList:[],
      youlunList: [],
      showLoading:true
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      const globalData = app.globalData
      this.setData({
        swiperImageList:globalData.indexSwippers
      })
      
     setTimeout(()=>{
      this.setData({
        youlunList:globalData.youlun,
        showLoading:false
      })
     },2000)
    },
  
    onClick:function(e){
      const wayId = e.currentTarget.dataset.wayid
      if(!wayId) return
  
      wx.navigateTo({
        url:`./youlun-detail/youlun-detail?wayId=${wayId}`,
      })
    }
  });
  