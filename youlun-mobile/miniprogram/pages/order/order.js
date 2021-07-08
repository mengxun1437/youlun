import {
    getRoomInfo,
    getWayInfo
} from "../utils";
const app = getApp()

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

        orderStatusIcons: ['todo-list-o', 'cash-back-record', 'home-o'],
        showOrders: [],
        orders: []
    },
    onLoad: function () {
        const orderList = app.globalData.orderList.map(order => {
            const wayInfo = getWayInfo(order.wayId);
            const roomInfo = getRoomInfo(order.wayId, order.roomId);
            const date = new Date(order.created);
            const dateFormat = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')} ${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')}`
            return {
                orderId: order.orderId,
                status: order.status,
                way: {
                    name: wayInfo.name,
                    youlun: wayInfo.youlun,
                    duration: wayInfo.duration,
                    start: wayInfo.start,
                },
                room: {
                    name: roomInfo.name,
                    price: roomInfo.price,
                    users: order.users.map(user => user.userName),
                },
                created: order.created,
                showCreated:dateFormat
            }
        }).reverse()
        this.setData({
            showOrders: orderList,
            orders: orderList
        })
    },

    onShow() {
        this.onLoad()
    },

    onSortChange: function (e) {
        const index = e.detail;
        this.setData({
            sortIndex: index,
            showOrders: this.data.showOrders.sort((x, y) => index === 0 ? x.created - y.created : y.created - x.created)
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
            showOrders: this.data.orders.filter(order => this.data.switchs[order.status].status)
        })
    },

})