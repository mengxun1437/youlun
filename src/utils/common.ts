// import { parse } from 'qs'
// import { delay, downloadFileByFetch, downloadFiles, typeOf } from '@moresec/utils'
// import md5 from 'md5'
// import { MS_LOGIN_TOKEN } from './constant'

// // 简单判断一个对象是都为空对象（忽略不可枚举属性）
// export const isEmptyObject = (obj: object): boolean => {
//   if (!obj) return true
//   return obj && Object.keys(obj).length === 0
// }

// // 获取 url 参数对象
// export const getSearchParams = (search: string) => parse(search, { ignoreQueryPrefix: true })

// // 获取请求参数的字符串形式
// export const getSignString = (url: string, body: MS.objectAny) => {
//   const keys = Object.keys(body).sort()
//   const newArgs: MS.objectAny = {}
//   let bodyString = url
//   keys.forEach(key => {
//     newArgs[key.toLowerCase()] = body[key]
//   })
//   for (const k in newArgs) {
//     if (newArgs.hasOwnProperty(k)) {
//       bodyString += `&${k}=${newArgs[k]}`
//     }
//   }

//   return bodyString.substr(1)
// }

// // 根据接口请求body计算签名
// export function getSign(url: string, body = {}) {
//   return md5(getSignString(url, body))
// }

// export const handleExcelDownload = (url: string) => {
//   downloadFileByFetch(url, {
//     method: 'GET',
//     headers: {
//       Authorization: localStorage.getItem(MS_LOGIN_TOKEN) as string
//     }
//   })
// }

// export { delay, downloadFiles, typeOf }
