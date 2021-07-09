"use strict";
App({
  globalData: {
    indexSwippers: [
      "http://qiniu.mengxun.online/20210708205609.jpeg",
      "http://qiniu.mengxun.online/20210708205638.jpeg",
      "http://qiniu.mengxun.online/20210708205703.jpeg"
    ],
    youlun: [{
      wayId: 3,
      youlunSrc: 'http://qiniu.mengxun.online/20210708205721.jpeg',
      hot: true,
      name: '天津-长崎-福冈-天津',
      youlun: '海洋光谱号',
      src: "http://qiniu.mengxun.online/20210708210611.jpeg",
      duration: "6天5晚",
      start: "2022/03/01(周四)",
      price: 6754,
      tags: ['第二人4折', '踏青小长假', '每舱再减'],
      rooms: [{
          type: "内舱房",
          list: [{
              roomId: '1',
              name: '1101',
              area: 17.4,
              hasFloor: false,
              price: 6754,
              src: 'http://qiniu.mengxun.online/20210708205841.jpeg',
              peopleNum: 3
            },
            {
              roomId: '2',
              name: '1102',
              area: 9.4,
              hasFloor: false,
              price: 8864,
              src: 'http://qiniu.mengxun.online/20210708205918.jpeg',
              peopleNum: 1
            },
            {
              roomId: '3',
              name: '1103',
              area: 17.4,
              hasFloor: false,
              price: 7876,
              src: 'http://qiniu.mengxun.online/20210708205918.jpeg',
              peopleNum: 2
            }
          ]
        },
        {
          type: "海景房",
          list: [{
              roomId: '4',
              name: '2201',
              area: 18.4,
              hasFloor: true,
              price: 9876,
              src: 'http://qiniu.mengxun.online/20210708205954.jpeg',
              peopleNum: 2
            },
            {
              roomId: '5',
              name: '2202',
              area: 17.2,
              hasFloor: false,
              price: 7687,
              src: 'http://qiniu.mengxun.online/20210708210010.jpeg',
              peopleNum: 4
            }
          ]
        },
        {
          type: "阳台房",
          list: [{
              roomId: '6',
              name: '3301',
              area: 18.4,
              hasFloor: true,
              price: 7098,
              src: 'http://qiniu.mengxun.online/20210708210030.jpeg',
              peopleNum: 6
            },
            {
              roomId: '7',
              name: '3302',
              area: 17.2,
              hasFloor: true,
              price: 9087,
              src: 'http://qiniu.mengxun.online/20210708210030.jpeg',
              peopleNum: 2
            },
            {
              roomId: '8',
              name: '3303',
              area: 19.5,
              hasFloor: true,
              price: 7098,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1C2C4C2D4D6D8D4B%20%20%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 5
            },
            {
              roomId: '9',
              name: '3303',
              area: 18.5,
              hasFloor: true,
              price: 9999,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/%E8%B6%85%E5%80%BC%E9%98%B3%E5%8F%B0%E6%88%BFDO-1.jpg',
              peopleNum: 1
            }
          ]
        },
        {
          type: "套房",
          list: [{
            roomId: '10',
            name: '4201',
            area: 18.4,
            hasFloor: true,
            price: 12098,
            src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/J1%E5%A4%B4%E5%9B%BE.jpg',
            peopleNum: 2
          }]
        }
      ]
    }, {
      wayId: 4,
      youlunSrc: 'https://resource.rcclchina.com.cn/000Sandy/WN/WN-1900-500.jpg',
      hot: true,
      name: '上海-神户-神户-大阪-富士山(清水)-东京(横滨)-上海',
      youlun: '海洋奇迹号',
      src: "https://resource.rcclchina.com.cn/000neo/%E6%B8%AF%E5%8F%A3%E7%AE%A1%E7%90%86/OSA.jpg",
      duration: "9天8晚",
      start: "2022/04/09(周六)",
      price: 7607,
      tags: ['第1第2人立减'],
      rooms: [{
          type: "内舱房",
          list: [{
              roomId: '1',
              name: '1101',
              area: 17.4,
              hasFloor: false,
              price: 7607,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-hm-sy-t-7605.jpg',
              peopleNum: 4
            },
            {
              roomId: '2',
              name: '1102',
              area: 9.4,
              hasFloor: false,
              price: 9876,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-hm-sy-u-10450.jpg',
              peopleNum: 1
            },
            {
              roomId: '3',
              name: '1103',
              area: 17.4,
              hasFloor: false,
              price: 8645,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1U-4U%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.jpg',
              peopleNum: 2
            }
          ]
        },
        {
          type: "海景房",
          list: [{
              roomId: '4',
              name: '2201',
              area: 18.4,
              hasFloor: true,
              price: 9468,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-hm-sy-n-7118.jpg',
              peopleNum: 3
            },
            {
              roomId: '5',
              name: '2202',
              area: 17.2,
              hasFloor: false,
              price: 8765,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-hm-sy-k-11128.jpg',
              peopleNum: 4
            }
          ]
        },
        {
          type: "阳台房",
          list: [{
              roomId: '6',
              name: '3301',
              area: 18.4,
              hasFloor: true,
              price: 9752,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-hm-sy-i-12693.jpg',
              peopleNum: 6
            },
            {
              roomId: '7',
              name: '3302',
              area: 17.2,
              hasFloor: true,
              price: 10511,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1C2C4C2D4D6D8D4B%20%20%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 2
            },
            {
              roomId: '8',
              name: '3303',
              area: 19.5,
              hasFloor: true,
              price: 9999,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1C2C4C2D4D6D8D4B%20%20%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 5
            },
            {
              roomId: '9',
              name: '3303',
              area: 18.5,
              hasFloor: true,
              price: 12476,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/%E8%B6%85%E5%80%BC%E9%98%B3%E5%8F%B0%E6%88%BFDO-1.jpg',
              peopleNum: 1
            }
          ]
        },
        {
          type: "套房",
          list: [{
            roomId: '10',
            name: '4201',
            area: 18.4,
            hasFloor: true,
            price: 19549,
            src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-sy-gs-10654.jpg',
            peopleNum: 2
          }]
        }
      ]
    }, {
      wayId: 5,
      youlunSrc: 'https://resource.rcclchina.com.cn/000Sandy/WN/WN-1900-500.jpg',
      hot: true,
      name: '上海-福冈-熊本-上海',
      youlun: '海洋奇迹号',
      src: "https://resource.rcclchina.com.cn/000neo/%E6%B8%AF%E5%8F%A3%E7%AE%A1%E7%90%86/FUK.jpg",
      duration: "6天5晚",
      start: "2022/08/11(周四)",
      price: 6431,
      tags: ['第1第2人立减'],
      rooms: [{
          type: "内舱房",
          list: [{
              roomId: '1',
              name: '1101',
              area: 17.4,
              hasFloor: false,
              price: 6431,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-hm-sy-t-7605.jpg',
              peopleNum: 4
            },
            {
              roomId: '2',
              name: '1102',
              area: 9.4,
              hasFloor: false,
              price: 9876,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/hm-cv-central-park-oceanview.jpg',
              peopleNum: 1
            },
            {
              roomId: '3',
              name: '1103',
              area: 17.4,
              hasFloor: false,
              price: 7259,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1U-4U%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.jpg',
              peopleNum: 2
            }
          ]
        },
        {
          type: "海景房",
          list: [{
              roomId: '4',
              name: '2201',
              area: 18.4,
              hasFloor: true,
              price: 8848,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-hm-sy-n-7118.jpg',
              peopleNum: 3
            },
            {
              roomId: '5',
              name: '2202',
              area: 17.2,
              hasFloor: false,
              price: 8765,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-hm-sy-k-11128.jpg',
              peopleNum: 4
            }
          ]
        },
        {
          type: "阳台房",
          list: [{
              roomId: '6',
              name: '3301',
              area: 18.4,
              hasFloor: true,
              price: 9752,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-hm-sy-i-12693.jpg',
              peopleNum: 6
            },
            {
              roomId: '7',
              name: '3302',
              area: 17.2,
              hasFloor: true,
              price: 10511,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1C2C4C2D4D6D8D4B%20%20%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 2
            },
            {
              roomId: '8',
              name: '3303',
              area: 19.5,
              hasFloor: true,
              price: 9999,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1C2C4C2D4D6D8D4B%20%20%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 5
            },
            {
              roomId: '9',
              name: '3303',
              area: 18.5,
              hasFloor: true,
              price: 12476,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/%E8%B6%85%E5%80%BC%E9%98%B3%E5%8F%B0%E6%88%BFDO-1.jpg',
              peopleNum: 1
            }
          ]
        },
        {
          type: "套房",
          list: [{
            roomId: '10',
            name: '4201',
            area: 18.4,
            hasFloor: true,
            price: 24549,
            src: 'https://resource.rcclchina.com.cn/000Sandy/WN/LS2.jpg',
            peopleNum: 2
          }]
        }
      ]
    }, {
      wayId: 6,
      youlunSrc: 'https://resource.rcclchina.com.cn/000Sandy/WN/WN-1900-500.jpg',
      hot: false,
      name: '上海-鹿儿岛-福冈-上海',
      youlun: '海洋奇迹号',
      src: "https://resource.rcclchina.com.cn/000neo/%E6%B8%AF%E5%8F%A3%E7%AE%A1%E7%90%86/KOJ.jpg",
      duration: "6天5晚",
      start: "2022/03/31(周四)",
      price: 5459,
      tags: ['踏青小长假', '赏花季', '第1第2人立减'],
      rooms: [{
          type: "内舱房",
          list: [{
              roomId: '1',
              name: '1101',
              area: 17.4,
              hasFloor: false,
              price: 5459,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1U-4U%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.jpg',
              peopleNum: 4
            },
            {
              roomId: '2',
              name: '1102',
              area: 9.4,
              hasFloor: false,
              price: 9897,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/2W%E8%AF%A6%E6%83%85%E5%A4%B4%E5%9B%BE.JPG',
              peopleNum: 1
            },
            {
              roomId: '3',
              name: '1103',
              area: 17.4,
              hasFloor: false,
              price: 6218,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1U-4U%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.jpg',
              peopleNum: 2
            }
          ]
        },
        {
          type: "海景房",
          list: [{
              roomId: '4',
              name: '2201',
              area: 18.4,
              hasFloor: true,
              price: 7876,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1N2N3N.jpg',
              peopleNum: 2
            },
            {
              roomId: '5',
              name: '2202',
              area: 15.2,
              hasFloor: false,
              price: 6987,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1U-4U%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.jpg',
              peopleNum: 4
            }
          ]
        },
        {
          type: "阳台房",
          list: [{
              roomId: '6',
              name: '3301',
              area: 18.4,
              hasFloor: true,
              price: 7098,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-hm-sy-j-12177-1.jpg',
              peopleNum: 6
            },
            {
              roomId: '7',
              name: '3302',
              area: 17.2,
              hasFloor: true,
              price: 9087,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1C2C4C2D4D6D8D4B%20%20%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 2
            },
            {
              roomId: '8',
              name: '3303',
              area: 19.5,
              hasFloor: true,
              price: 8298,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1C2C4C2D4D6D8D4B%20%20%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 5
            },
            {
              roomId: '9',
              name: '3303',
              area: 18.5,
              hasFloor: true,
              price: 10999,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/%E8%B6%85%E5%80%BC%E9%98%B3%E5%8F%B0%E6%88%BFDO-1.jpg',
              peopleNum: 1
            }
          ]
        },
        {
          type: "套房",
          list: [{
            roomId: '10',
            name: '4201',
            area: 18.4,
            hasFloor: true,
            price: 16098,
            src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-sy-a3-11334.jpg',
            peopleNum: 2
          }]
        }
      ]
    }, {
      wayId: 7,
      youlunSrc: 'https://resource.rcclchina.com.cn/000neo/Port/SC.jpg',
      hot: false,
      name: '上海-鹿儿岛-福冈-上海',
      youlun: '海洋奇迹号',
      src: "https://resource.rcclchina.com.cn/000neo/%E6%B8%AF%E5%8F%A3%E7%AE%A1%E7%90%86/NGS.jpg",
      duration: "6天5晚",
      start: "2022/02/17(周四)",
      price: 3615,
      tags: [ '每舱再减', '赏花季', '第1第2人立减'],
      rooms: [{
          type: "内舱房",
          list: [{
              roomId: '1',
              name: '1101',
              area: 17.4,
              hasFloor: false,
              price: 3985,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1U-4U%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.jpg',
              peopleNum: 4
            },
            {
              roomId: '2',
              name: '1102',
              area: 9.4,
              hasFloor: false,
              price: 4197,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/2W%E8%AF%A6%E6%83%85%E5%A4%B4%E5%9B%BE.JPG',
              peopleNum: 1
            },
            {
              roomId: '3',
              name: '1103',
              area: 17.4,
              hasFloor: false,
              price: 6255,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1U-4U%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.jpg',
              peopleNum: 2
            },
            {
              roomId: '11',
              name: '1104',
              area: 17.4,
              hasFloor: false,
              price: 4055,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1V3V%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 3
            }
          ]
        },
        {
          type: "海景房",
          list: [{
              roomId: '4',
              name: '2201',
              area: 18.4,
              hasFloor: true,
              price: 7876,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1N2N3N.jpg',
              peopleNum: 2
            },
            {
              roomId: '5',
              name: '2202',
              area: 15.2,
              hasFloor: false,
              price: 6987,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1U-4U%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.jpg',
              peopleNum: 4
            }
          ]
        },
        {
          type: "阳台房",
          list: [{
              roomId: '6',
              name: '3301',
              area: 18.4,
              hasFloor: true,
              price: 7098,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-hm-sy-j-12177-1.jpg',
              peopleNum: 6
            },
            {
              roomId: '7',
              name: '3302',
              area: 17.2,
              hasFloor: true,
              price: 9087,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1C2C4C2D4D6D8D4B%20%20%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 2
            },
            {
              roomId: '8',
              name: '3303',
              area: 19.5,
              hasFloor: true,
              price: 8298,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1C2C4C2D4D6D8D4B%20%20%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 5
            },
            {
              roomId: '9',
              name: '3303',
              area: 18.5,
              hasFloor: true,
              price: 10999,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/%E8%B6%85%E5%80%BC%E9%98%B3%E5%8F%B0%E6%88%BFDO-1.jpg',
              peopleNum: 1
            }
          ]
        },
        {
          type: "套房",
          list: [{
            roomId: '10',
            name: '4201',
            area: 18.4,
            hasFloor: true,
            price: 16098,
            src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-sy-a3-11334.jpg',
            peopleNum: 2
          }]
        }
      ]
    }, {
      wayId: 8,
      youlunSrc: 'http://qiniu.mengxun.online/20210708210652.jpeg',
      hot: false,
      name: '天津-福冈-长崎-天津',
      youlun: '海洋光潜号',
      src: "http://qiniu.mengxun.online/20210708210652.jpeg",
      duration: "6天5晚",
      start: "2022/07/10(周日)",
      price: 3615,
      tags: ['第2人四折', '赏花季', '第1第2人立减'],
      rooms: [{
          type: "内舱房",
          list: [{
              roomId: '1',
              name: '1101',
              area: 17.4,
              hasFloor: false,
              price: 3985,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1U-4U%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.jpg',
              peopleNum: 4
            },
            {
              roomId: '2',
              name: '1102',
              area: 9.4,
              hasFloor: false,
              price: 4197,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/2W%E8%AF%A6%E6%83%85%E5%A4%B4%E5%9B%BE.JPG',
              peopleNum: 1
            },
            {
              roomId: '3',
              name: '1103',
              area: 17.4,
              hasFloor: false,
              price: 6255,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1U-4U%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.jpg',
              peopleNum: 2
            },
            {
              roomId: '11',
              name: '1104',
              area: 17.4,
              hasFloor: false,
              price: 4055,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1V3V%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 3
            }
          ]
        },
        {
          type: "海景房",
          list: [{
              roomId: '4',
              name: '2201',
              area: 18.4,
              hasFloor: true,
              price: 7876,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1N2N3N.jpg',
              peopleNum: 2
            },
            {
              roomId: '5',
              name: '2202',
              area: 15.2,
              hasFloor: false,
              price: 6987,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1U-4U%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.jpg',
              peopleNum: 4
            }
          ]
        },
        {
          type: "阳台房",
          list: [{
              roomId: '6',
              name: '3301',
              area: 18.4,
              hasFloor: true,
              price: 7098,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-hm-sy-j-12177-1.jpg',
              peopleNum: 6
            },
            {
              roomId: '7',
              name: '3302',
              area: 17.2,
              hasFloor: true,
              price: 9087,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1C2C4C2D4D6D8D4B%20%20%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 2
            },
            {
              roomId: '8',
              name: '3303',
              area: 19.5,
              hasFloor: true,
              price: 8298,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/1C2C4C2D4D6D8D4B%20%20%E5%A4%B4%E5%9B%BE%E8%AF%A6%E6%83%85.JPG',
              peopleNum: 5
            },
            {
              roomId: '9',
              name: '3303',
              area: 18.5,
              hasFloor: true,
              price: 10999,
              src: 'https://resource.rcclchina.com.cn/000neo/Ship/SC/%E8%B6%85%E5%80%BC%E9%98%B3%E5%8F%B0%E6%88%BFDO-1.jpg',
              peopleNum: 1
            }
          ]
        },
        {
          type: "套房",
          list: [{
            roomId: '10',
            name: '4201',
            area: 18.4,
            hasFloor: true,
            price: 16098,
            src: 'https://resource.rcclchina.com.cn/000neo/Ship/WN/rci-sy-a3-11334.jpg',
            peopleNum: 2
          }]
        }
      ]
    }],
    orderList: [
      {
        orderId:"c27ff68d-991e-4c1b-b657-00b9ef2205d4",
        status: 2,
        wayId: 3,
        roomId: 1,
        users: [
          {
            userName:'张三',
            userNumber:'126817283117836542',
            userPhone:'27361837281'
          },
          {
            userName:'李四',
            userNumber:'927362717263738182',
            userPhone:'83726239837'
          }
        ],
        created: 1602378752000
      },
      {
        orderId:"d8f53b8a-5ff6-4679-a9f5-0b0ad2304293",
        status: 2,
        wayId: 5,
        roomId: 6,
        users: [
          {
            userName:'张三',
            userNumber:'126817283117836542',
            userPhone:'27361837281'
          }
        ],
        created: 1607476211000
      },
      {
        orderId:"ba2211b9-2550-43c7-a59d-87e1a3ee13dc",
        status: 1,
        wayId: 7,
        roomId: 3,
        users: [
          {
            userName:'张三',
            userNumber:'126817283117836542',
            userPhone:'27361837281'
          },
          {
            userName:'李四',
            userNumber:'927362717263738182',
            userPhone:'83726239837'
          },
          {
            userName:'王五',
            userNumber:'283718382718273928',
            userPhone:'28271837827'
          }
        ],
        created: 1613028068000
      }
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
