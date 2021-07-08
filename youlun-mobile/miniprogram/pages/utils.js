const app = getApp()
const guid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  const r = Math.random() * 16 | 0,
    v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16)
})

export const getWayInfo = (wayId) => app.globalData.youlun.find(item => item.wayId == wayId)
export const getRoomInfo = (wayId, roomId) => {
  const youlun = getWayInfo(wayId)
  const rooms = youlun.rooms.find(room => room.list.findIndex(item => item.roomId == roomId) !== -1)
  return rooms.list.find(room => room.roomId == roomId)
}
export const addOrder = (wayId, roomId, users) => {
  app.globalData.orderList.push({
    orderId: guid(),
    status: 0,
    wayId: wayId,
    roomId: roomId,
    users: users,
    created: new Date().getTime()
  })
}