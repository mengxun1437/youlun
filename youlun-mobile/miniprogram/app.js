"use strict";
App({
  globalData: {
    openId:'',
    indexSwippers: [
      "http://qiniu.mengxun.online/20210708205609.jpeg",
      "http://qiniu.mengxun.online/20210708205638.jpeg",
      "http://qiniu.mengxun.online/20210708205703.jpeg"
    ],
    mine: {
      points: 1200,
      pointCommodity: [{
        commodityUrl: "https://p6-bk.byteimg.com/tos-cn-i-mlhdmxsy5m/6e2e536eacc246eb8fc15eb10bc0d469~tplv-mlhdmxsy5m-q75:0:0.image",
        commodityName: "黄鹤楼香烟",
        commodityPoint: "20",
      }, {
        commodityUrl: "https://img.alicdn.com/imgextra/i4/725677994/O1CN01Lng8zD28vIq17Wvgj_!!725677994-0-sm.jpg_60x60q90.jpg",
        commodityName: "拉菲AOC干红葡萄酒",
        commodityPoint: "199",
      }, {
        commodityUrl: "https://gd4.alicdn.com/imgextra/i2/10509225/O1CN01m1F1bD2I16IScvXH7_!!10509225.jpg_400x400.jpg",
        commodityName: "纪念明信片",
        commodityPoint: "30",
      }, {
        commodityUrl: "https://img0.baidu.com/it/u=2693181789,3140146792&fm=26&fmt=auto&gp=0.jpg",
        commodityName: "可口可乐",
        commodityPoint: "7",
      }, {
        commodityUrl: "https://img.alicdn.com/imgextra/i3/2201195463848/O1CN01LMSWEH1eIQfXfWB4u_!!2201195463848.jpg_60x60q90.jpg",
        commodityName: "充电器",
        commodityPoint: "70",
      }, {
        commodityUrl: "https://img0.baidu.com/it/u=454326814,2168871539&fm=26&fmt=auto&gp=0.jpg",
        commodityName: "外国歌舞剧门票",
        commodityPoint: "398",
      }, {
        commodityUrl: "https://www.ji9.org/uploads/allimg/201007/3xfrHBZX9x1E9oLA.jpeg?wx_fmt=jpeg",
        commodityName: "船票优惠券￥500",
        commodityPoint: "500",
      }],
      myCommodities:{}
    }

  },
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    wx.login({
      success: function (res) {
        console.log(res.code);
      },
    });
  },
});
