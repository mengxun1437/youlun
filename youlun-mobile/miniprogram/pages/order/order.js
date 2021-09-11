import {
    cancelOrder,
    getAllCuriseInfo,
    getRoomDetailId,
    getUserAllOrderList
} from '../service'
import {
    showErrorTip
} from '../utils'
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

    onShow() {
        this.renderData()
    },

    renderData() {
        if (!app.globalData.openId) {
            return
        }
        getUserAllOrderList(app.globalData.openId).then(res => {
            if (res.data.code === 0) {
                let list = []
                this.setData({
                    orders:[],
                    showOrders:[]
                })
                res.data.data.map((order) => {
                    const promise1 = getAllCuriseInfo(order.curiseId);
                    const promise2 = getRoomDetailId(order.curiseId, order.roomId);
                    Promise.all([promise1, promise2]).then((res) => {
                        let curiseInfo = res[0].data.data
                        let roomInfo = res[1].data.data
                        const date = new Date(order.created);
                        const dateFormat = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')} ${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')}`
                        const data =   {
                            orderId: order.id,
                            status: order.orderStatus,
                            way: {
                                name: curiseInfo.lane,
                                youlun: curiseInfo.name,
                                duration: curiseInfo.duration,
                                start: curiseInfo.start,
                            },
                            room: {
                                name: roomInfo.roomName,
                                price: roomInfo.price,
                                users: order.users.split('-'),
                            },
                            created: order.created,
                            showCreated: dateFormat
                        }
                        list.push(data)
                    }).then(()=>{
                        this.setData({
                            orders:list.reverse(),
                            showOrders:list.reverse()
                        })
                    })
                })
            } else {
                showErrorTip("加载订单错误")
            }
        }, err => {
            showErrorTip("加载订单错误")
        })
    },

    onLoad: function () {
        this.renderData()
    },

    onShow() {
        this.renderData()
    },

    onOrderCancel: function (e) {
        const orderId = e.currentTarget.dataset.orderid;
        if (!orderId) return
        cancelOrder(orderId).then(res=>{
            if(res.data.code === 0){
                showErrorTip("取消订单成功");
                this.renderData()
            }else{
                showErrorTip("取消订单失败")
            }
        },err=>{
            showErrorTip("取消订单失败")
        })
    },

    onOrderPay: function (e) {
        const orderId = e.currentTarget.dataset.orderid;
        if (!orderId) return
        wx.navigateTo({
            url: `./pay/pay?orderId=${orderId}`,
        })
    },

    onSortChange: function (e) {
        const index = e.detail;
        this.setData({
            sortIndex: index,
            showOrders: this.data.showOrders.sort((x, y) => index === 1 ? x.created - y.created : y.created - x.created)
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