"use strict";
App({
    globalData: {
        mine:{
            points:1200,
            pointCommodity:[
                {
                    commodityUrl:"https://p6-bk.byteimg.com/tos-cn-i-mlhdmxsy5m/6e2e536eacc246eb8fc15eb10bc0d469~tplv-mlhdmxsy5m-q75:0:0.image",
                    commodityName:"黄鹤楼香烟",
                    commodityPoint:"20",
                },  {
                    commodityUrl:"https://img.alicdn.com/imgextra/i4/725677994/O1CN01Lng8zD28vIq17Wvgj_!!725677994-0-sm.jpg_60x60q90.jpg",
                    commodityName:"拉菲AOC干红葡萄酒",
                    commodityPoint:"199",
                },  {
                    commodityUrl:"https://gd4.alicdn.com/imgextra/i2/10509225/O1CN01m1F1bD2I16IScvXH7_!!10509225.jpg_400x400.jpg",
                    commodityName:"纪念明信片",
                    commodityPoint:"30",
                },  {
                    commodityUrl:"https://img0.baidu.com/it/u=2693181789,3140146792&fm=26&fmt=auto&gp=0.jpg",
                    commodityName:"可口可乐",
                    commodityPoint:"7",
                },  {
                    commodityUrl:"https://img.alicdn.com/imgextra/i3/2201195463848/O1CN01LMSWEH1eIQfXfWB4u_!!2201195463848.jpg_60x60q90.jpg",
                    commodityName:"充电器",
                    commodityPoint:"70",
                },  {
                    commodityUrl:"https://img0.baidu.com/it/u=454326814,2168871539&fm=26&fmt=auto&gp=0.jpg",
                    commodityName:"外国歌舞剧门票",
                    commodityPoint:"398",
                },  {
                    commodityUrl:"https://www.ji9.org/uploads/allimg/201007/3xfrHBZX9x1E9oLA.jpeg?wx_fmt=jpeg",
                    commodityName:"船票优惠券￥500",
                    commodityPoint:"500",
                }
            ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVE7UUFFTixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRy9CLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRXZCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBnbG9iYWxEYXRhOiB7fSxcbiAgb25MYXVuY2goKSB7XG4gICAgLy8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG4gICAgY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG5cbiAgICAvLyDnmbvlvZVcbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSlcbiAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcbiAgICAgIH0sXG4gICAgfSlcbiAgfSxcbn0pIl19