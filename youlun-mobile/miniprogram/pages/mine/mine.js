import Toast from '@vant/weapp/toast/toast'
import { showErrorTip } from '../utils';
import {getUserOpenId} from '../service'
const app = getApp()
Page({
    data: {
        openId:'',
        isLogin:0,
        points:1000
    },

    onShow(){
        this.onLoad()
    },

    onLoad: function () {

        let point = getApp().globalData.mine.points
        let _this = this
        wx.login({
            success(res){
                console.log(res)
                getUserOpenId(res.code).then(res=>{
                    console.log(res)
                    if(res.data.code === 0){
                        _this.setData({
                            openId:res.data.data.openId
                        })
                    }else{
                        showErrorTip("获取用户openId失败")
                    }
                })
            }
        }),

        
        this.setData({
            points:point
        })
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
        app.globalData.openId = this.data.openId
        wx.switchTab({
         url: '/pages/mine/mine',
        })
       }
    },

    points_manage:function(e){
        wx.navigateTo({
          url: '/pages/mine/points-manage/points-manage',
        })
    },

    loginPlease:function(){
        Toast.fail('请先登录再使用功能')
    },

    waitPlease:function(){
        wx.navigateTo({
          url: '/pages/mine/wait-please/wait-please',
        })
    },
    shoppingCard:function(){
        wx.navigateTo({
          url: '/pages/mine/my-commodities/my-commodities',
        })
    }

});
