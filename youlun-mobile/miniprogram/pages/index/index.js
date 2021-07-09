// miniprogram/pages/index/index.js
import {
  getAllCuriseInfo
} from '../service'
import { showErrorTip } from '../utils';
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperImageList: [],
    youlunList: [],
    showLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    const globalData = app.globalData
    this.setData({
      swiperImageList: globalData.indexSwippers
    })

    getAllCuriseInfo(-1).then(res => {
      if (res.data.code === 0) {
        const data = res.data.data
        _this.setData({
          youlunList: data.map(youlun => ({
            wayId: youlun.id,
            src: youlun.coverImage,
            hot: youlun.hot,
            name: youlun.lane,
            youlun: youlun.name,
            duration:youlun.duration,
            start: youlun.start,
            price:youlun.price,
            tags: youlun.tags.split(',')
          })),
          showLoading:false
        })
      } else {
        showErrorTip()
      }
    }, err => showErrorTip())

  },

  onClick: function (e) {
    const wayId = e.currentTarget.dataset.wayid
    if (!wayId) return

    wx.navigateTo({
      url: `./youlun-detail/youlun-detail?wayId=${wayId}`,
    })
  }
});