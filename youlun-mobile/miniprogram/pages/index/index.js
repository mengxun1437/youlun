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
    youlunList: new Array(52).fill(0).map((_, index) => ({
      name: `豪华邮轮${index + 1}`,
      src: "../../static/images/home.png",
      link:`./youlun-detail/youlun-detail?youlunId=${index}`,
    })),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
});
