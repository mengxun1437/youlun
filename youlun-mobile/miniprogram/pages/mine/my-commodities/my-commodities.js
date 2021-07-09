
var app = getApp()
var pointCommodity=app.globalData.mine.pointCommodity
var myCommodities=app.globalData.mine.myCommodities
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
   
    let commodityLength=Object.keys(myCommodities).length
    this.setData({
      commodityLength:commodityLength
    })
    let shoppingCards=[]
    for(let x in myCommodities){
      
      let card={
        num:myCommodities[x],
        url:pointCommodity[x].commodityUrl,
        name:pointCommodity[x].commodityName
      }
      shoppingCards.push(card)
    }
    this.setData({
      shoppingCards:shoppingCards
    })
  },


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

  }
})