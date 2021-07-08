"use strict";
Page({
    data: {
        switchs: [{
                title: '待出行',
                status: true,
            },
            {
                title: '待付款',
                status: true,
            }, {
                title: '已结束',
                status: true
            }
        ],
        itemTitle: '出行状态',
        sort: [{
                text: '最新排序',
                value: 0
            },
            {
                text: '历史排序',
                value: 1
            },
        ],
        sortIndex: 0,
        activeName: '1',

        orderStatusIcons:['todo-list-o','cash-back-record','home-o'],
        showOrders:[],
        orders: [{
                status: 0,
                way: {
                    name: `上海-冲绳-八重山诸岛-上海`,
                    youlun: `海洋光谱号`,
                    duration: "6天5晚",
                    start: "2022/02/07(周一)",
                },
                room: {
                    name: '302',
                    price: 3028,
                    users: ['小明1','小明2','小明3'],
                },
                created:new Date('2020-01-21 10:12:19').getTime()
            },
            {
                status: 1,
                way: {
                    name: `上海-冲绳-八重山诸岛-上海`,
                    youlun: `海洋光谱号`,
                    duration: "6天5晚",
                    start: "2022/02/07(周一)",
                    price: 5096,
                },
                room: {
                    name: '302',
                    price: 3028,
                    users: ['340823'],
                },
                created:new Date('2020-02-30 10:12:19').getTime()
            },
            {
                status: 2,
                way: {
                    name: `上海-冲绳-八重山诸岛-上海`,
                    youlun: `海洋光谱号`,
                    duration: "6天5晚",
                    start: "2022/02/07(周一)",
                    price: 5096,
                },
                room: {
                    name: '302',
                    price: 3028,
                    users: ['340823'],
                },
                created:new Date('2021-01-20 10:12:19').getTime()
            }
        ]
    },
    onLoad: function (options) {


    },

    onSortChange:function(e){
        const index = e.detail;
        this.setData({
            sortIndex:index,
            showOrders:this.data.showOrders.sort((x,y)=>index===0?x.created - y.created:y.created-x.created)
        })
    },

    onOrderChange(event) {
        this.setData({
            activeName: event.detail,
        });
    },

    onConfirm() {
        this.selectComponent('#item').toggle();
    },

    onSwitchChange(e) {
        const index = e.currentTarget.dataset.index;
        const status = e.detail;
        this.data.switchs[index].status = status         
        this.setData({
            switchs: this.data.switchs,
            showOrders:this.data.orders.filter(order=> this.data.switchs[order.status].status )
        })
    },

})