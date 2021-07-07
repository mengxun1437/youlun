export interface IRoute {
  group?: boolean
  path?: string
  title?: string
  children?: IRoute[]
  active?: string
  component?: string
  breadcrumb?: string
  exclude?: number[]
  noShowInMenu?: boolean
  routes?: IRoute[]
  redirect?: string
  exact?: boolean
  wrappers?: string[]
}

export const menuRoutesData: IRoute[] = [
  {
    path: '/home',
    title: '控制面板',
    active: 'home',
    component: './dashboard',
    breadcrumb: '/dashboard',
    exclude: [0],
    wrappers: ['@/wrappers/auth']
  },
  {
    path: '/cabinManage',
    title: '船舱管理',
    active: 'account',
    breadcrumb: '/cabinManage',
    routes: [
      {
        path: '/cabinManage',
        title: '船舱管理',
        redirect: '/cabinManage/typeList',
        noShowInMenu: true
      },
      {
        path: '/cabinManage/typeList',
        title: '船舱类型',
        active: 'account',
        component: './cabinManage/CabinTypeList',
        breadcrumb: '/typeList'
      },
      {
        path: '/cabinManage/infoList',
        title: '船舱信息',
        active: 'account',
        component: './cabinManage/CabinInfoList',
        breadcrumb: '/infoList'
      }
    ]
  },
  {
    path: '/accountManage',
    title: '客人管理',
    active: 'rule',
    component: './account'
  },
  {
    path: '/help',
    title: '帮助中心',
    active: 'help',
    component: './help'
  },
  {
    path: '/500',
    title: '服务器内部错误',
    component: './500',
    noShowInMenu: true
  },
  {
    path: '/404',
    title: '找不到页面',
    component: './404',
    noShowInMenu: true
  }
]

export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      ...menuRoutesData,
      {
        path: '/login',
        component: './login',
        title: '登录'
      }
    ]
  }
]
