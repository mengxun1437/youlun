// miniprogram/pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperImageList:[
      "../../static/images/home.png",
      "../../static/images/home-dark.png",
      "../../static/images/order.png"
    ],
    youlunList: [{
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
    {
      hot:false,
      name: `上海-福冈-熊本-上海`,
      youlun:  `海洋奇迹号`,
      src: "https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg",
      duration:"9天8晚",
      start:"2022/03/26(周六)",
      price:6025,
      tags:['赏花季','第1第2人立减','盛大首航'],
      link:`./youlun-detail/youlun-detail?youlunId=1`,
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  onClick:function(e){
    const url = e.currentTarget.dataset.link
    if(!url) return

    wx.navigateTo({
      url:url,
    })
  }
});
