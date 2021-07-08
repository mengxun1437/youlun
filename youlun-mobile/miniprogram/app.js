"use strict";
App({
  globalData: {
    indexSwippers: [
      "../../static/images/home.png",
      "../../static/images/home-dark.png",
      "../../static/images/order.png"
    ],
    youlun: [{
        wayId: 1,
        hot: true,
        name: `上海-冲绳-八重山诸岛-上海`,
        youlun: `海洋光谱号`,
        src: "https://resource.rcclchina.com.cn/000neo/1026/%E5%86%B2%E7%BB%B3-%E7%8E%BB%E7%92%83%E5%BA%95%E8%88%B9.jpg",
        duration: "6天5晚",
        start: "2022/02/07(周一)",
        price: 5096,
        tags: ['第二人4折', '寒假', '每舱再减'],
        rooms: [{
            type: "内舱房",
            list: [{
                roomId: '1',
                name: '101',
                area: 18.4,
                hasFloor: true,
                price: 5618,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 3
              },
              {
                roomId: '2',
                name: '102',
                area: 17.2,
                hasFloor: true,
                price: 5991,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 1
              },
              {
                roomId: '3',
                name: '103',
                area: 19.5,
                hasFloor: false,
                price: 6038,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 2
              }
            ]
          },
          {
            type: "海景房",
            list: [{
                roomId: '4',
                name: '201',
                area: 18.4,
                hasFloor: true,
                price: 5618,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 2
              },
              {
                roomId: '5',
                name: '202',
                area: 17.2,
                hasFloor: true,
                price: 5991,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 4
              }
            ]
          },
          {
            type: "阳台房",
            list: [{
                roomId: '6',
                name: '301',
                area: 18.4,
                hasFloor: true,
                price: 5618,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 6
              },
              {
                roomId: '7',
                name: '302',
                area: 17.2,
                hasFloor: true,
                price: 5991,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 2
              },
              {
                roomId: '8',
                name: '303',
                area: 19.5,
                hasFloor: true,
                price: 6038,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 5
              },
              {
                roomId: '9',
                name: '303',
                area: 19.5,
                hasFloor: true,
                price: 6038,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 1
              }
            ]
          },
          {
            type: "套房",
            list: [{
              roomId: '10',
              name: '401',
              area: 18.4,
              hasFloor: true,
              price: 5618,
              src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
              peopleNum: 2
            }]
          }
        ]
      },
      {
        wayId: 2,
        hot: false,
        name: `上海-福冈-熊本-上海`,
        youlun: `海洋奇迹号`,
        src: "https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg",
        duration: "9天8晚",
        start: "2022/03/26(周六)",
        price: 6025,
        tags: ['赏花季', '第1第2人立减', '盛大首航'],
        rooms: [{
            type: "内舱房",
            list: [{
                roomId: '1',
                name: '101',
                area: 18.4,
                hasFloor: true,
                price: 5618,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 3
              },
              {
                roomId: '2',
                name: '102',
                area: 17.2,
                hasFloor: true,
                price: 5991,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 1
              },
              {
                roomId: '3',
                name: '103',
                area: 19.5,
                hasFloor: false,
                price: 6038,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 2
              }
            ]
          },
          {
            type: "海景房",
            list: [{
                roomId: '4',
                name: '201',
                area: 18.4,
                hasFloor: true,
                price: 5618,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 2
              },
              {
                roomId: '5',
                name: '202',
                area: 17.2,
                hasFloor: true,
                price: 5991,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 4
              }
            ]
          },
          {
            type: "阳台房",
            list: [{
                roomId: '6',
                name: '301',
                area: 18.4,
                hasFloor: true,
                price: 5618,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 6
              },
              {
                roomId: '7',
                name: '302',
                area: 17.2,
                hasFloor: true,
                price: 5991,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 2
              },
              {
                roomId: '8',
                name: '303',
                area: 19.5,
                hasFloor: true,
                price: 6038,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 5
              },
              {
                roomId: '9',
                name: '303',
                area: 19.5,
                hasFloor: true,
                price: 6038,
                src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
                peopleNum: 1
              }
            ]
          },
          {
            type: "套房",
            list: [{
              roomId: '10',
              name: '401',
              area: 18.4,
              hasFloor: true,
              price: 5618,
              src: 'https://resource.rcclchina.com.cn/000neo/Port/Okinaw/Okinaw-pc-2.jpg',
              peopleNum: 2
            }]
          }
        ]
      }
    ]

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