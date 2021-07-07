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
    path: '/account',
    title: '账户管理',
    active: 'account',
    breadcrumb: '/account',
    routes: [
      {
        path: '/account',
        title: '账户管理',
        redirect: '/account/user',
        noShowInMenu: true
      },
      {
        path: '/account/user',
        title: '个人中心',
        active: 'account',
        component: './account/user'
        // breadcrumb: '/user'
      },
      {
        path: '/account/list',
        title: '账户列表',
        active: 'account',
        component: './account/List',
        breadcrumb: '/list'
      }
    ]
  },
  {
    path: '/rule',
    title: '规范',
    active: 'rule',
    component: './rule'
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
