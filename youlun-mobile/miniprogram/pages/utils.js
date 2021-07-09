const app = getApp()
const guid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  const r = Math.random() * 16 | 0,
    v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16)
})

export const RoomType = {
    1:"内舱房",
    2:"海景房",
    3:"阳台房",
    4:"套房"
}

export const showErrorTip = (title = "数据加载失败") => {
  wx.showToast({
    title: title,
    icon: 'none'
  })
}


export const groupArray = (arr,key,[outKey,outList]) => {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    let ai = arr[i]
    if (!map[ai[key]]) {
      map[ai[key]] = [ai]
    } else {
      map[ai[key]].push(ai)
    }
  }
  let res = []
  Object.keys(map).forEach(key => {
    let data = {}
    data[outKey] = key,
    data[outList] = map[key]
    res.push(data)
  })
  return res
}