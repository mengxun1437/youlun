// miniprogram/pages/index/youlun-detail/youlun-detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    options: {},
    swiperImageList: [
      "../../static/images/home.png"
    ],
    wayInfo:{
      hot:true,
      name: `上海-冲绳-八重山诸岛-上海-上海`,
      youlun:`海洋光谱号`,
      src: "https://resource.rcclchina.com.cn/000neo/1026/%E5%86%B2%E7%BB%B3-%E7%8E%BB%E7%92%83%E5%BA%95%E8%88%B9.jpg",
      duration:"6天5晚",
      start:"2022/02/07(周一)",
      price:5096,
      tags:['第二人4折','寒假','每舱再减'],
      link:`./youlun-detail/youlun-detail?youlunId=0`,
    },
  },

  onLoad: function (options) {
    this.setData({
      options,
    });
  },

  onOrder:function(){
    wx.navigateTo({
      url: `../room-list/room-list?wayId=${this.data.options.wayId}`,
    })
  }
});
