var app=getApp()
var globalPoints=app.globalData.mine.points
Page({
    data: {
        isLogin:0,
        points:1000
    },
    onLoad: function () {

        let point = getApp().globalData.mine.points
        wx.login({
            success:res=>{
                console.log(res)
            }
        }),

        
        this.setData({
            points:point
        })
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    },
    //通过绑定手机号登录
　　getPhoneNumber: function (e) {
    console.log(e)
    if (e.detail.errMsg == 'getPhoneNumber:fail user deny') { //用户点击拒绝
        this.setData({
            isLogin:0
        })
         wx.switchTab({
            url: '/pages/mine/mine',
      })
       } else { //允许授权执行跳转
        this.setData({
            isLogin:1
        })
        wx.switchTab({
         url: '/pages/mine/mine',
        })
       }
    },

    points_manage:function(e){
        wx.navigateTo({
          url: '/pages/mine/points-manage/points-manage',
        })
    }


});
