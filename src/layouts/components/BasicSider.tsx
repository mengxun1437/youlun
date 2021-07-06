import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import Icon from '@ant-design/icons'
import { Link } from 'umi'
import MSIcon from '@/components/MSIcon'
import { menuRoutesData, IRoute } from 'config/routes.config'
import styles from '../styles/BasicSider.less'

import DashboardSvg from '@/assets/icons/menu/apply_overview.svg'
import DashboardActiveSvg from '@/assets/icons/menu/overview.svg'


import AccountSvg from '@/assets/icons/menu/account.svg'
import AccountActiveSvg from '@/assets/icons/menu/account_active.svg'
import HelpSvg from '@/assets/icons/menu/help.svg'
import HelpActiveSvg from '@/assets/icons/menu/help_active.svg'
import classnames from 'classnames'

interface IProps {
  collapsed: boolean
  mode?: 'horizontal' | 'vertical' | 'inline'
  role: number
  pathname: string
}

const { Sider } = Layout
const { SubMenu, Item } = Menu

const mapNameToIcon: MS.objectAny = {
  home: DashboardSvg,
  home_active: DashboardActiveSvg,
  account: AccountSvg,
  account_active: AccountActiveSvg,
  rule: HelpSvg,
  rule_active: HelpActiveSvg,
  help: HelpSvg,
  help_active: HelpActiveSvg
}

// 获取当前路由的父级。比如：'/threats/events' -> 'threats'
const getRouteFather = (pathname: string) => pathname.split('/')[1]

const getCurrentActiveMenuItemKey = (pathname: string) => {
  const pathArray = pathname.split('/')
  return pathArray[2] ? `/${pathArray[1]}/${pathArray[2]}` : `/${pathArray[1]}`
}

// 根据路由配置项，动态生成菜单
const getMenusNode = (pathname: string, role: number) =>
  menuRoutesData.map((routeItem: IRoute) => {
    const { active, routes, exclude, title: t, path, noShowInMenu } = routeItem

    if (noShowInMenu) return null

    const activeMenuName = active === getRouteFather(pathname) ? `${active}_active` : active
    const icon = MSIcon(mapNameToIcon[activeMenuName || 'dashboard'], {
      width: '14px',
      height: '14px'
    })

    if (routes) {
      if (exclude && exclude.includes(role)) return null
      return (
        <SubMenu
          key={active}
          title={
            <span>
              <Icon component={icon} />
              <span>{t}</span>
            </span>
          }
        >
          {routes.map(
            (item: IRoute) =>
              !item.noShowInMenu &&
              !(item.exclude && item.exclude.includes(role)) && (
                <Item key={item.path}>
                  <Link to={item.path!} replace={window.location.pathname === item.path}>
                    {item.title}
                  </Link>
                </Item>
              )
          )}
        </SubMenu>
      )
    } else {
      if (exclude && exclude.includes(role)) return null
      return (
        <Item key={path}>
          <Link to={path!} replace={window.location.pathname === path}>
            <Icon component={icon} />
            <span>{t}</span>
          </Link>
        </Item>
      )
    }
  })

// 遍历拿到左侧的根菜单
const rootSubmenuKeys = menuRoutesData.map(menu => menu.active).filter(Boolean)

const BasicSider: React.FC<IProps> = props => {
  const { pathname, collapsed, role, mode } = props
  const [fold, setFold] = useState<boolean>(collapsed)
  const [currentMenu, setCurrentMenu] = useState<string[]>([getCurrentActiveMenuItemKey(pathname)])
  const [openKeys, setOpenKeys] = useState<string[]>([getRouteFather(pathname)])

  useEffect(() => {
    setCurrentMenu([getCurrentActiveMenuItemKey(pathname)])
  }, [pathname])

  useEffect(() => {
    setOpenKeys([getRouteFather(pathname)])
  }, [getRouteFather(pathname)])

  useEffect(() => {
    setFold(collapsed)
  }, [collapsed])

  const handleOpenChange = (keys: string[]) => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1) || ''
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  const menuSider = (
    <Menu
      mode={mode === 'vertical' ? 'inline' : 'horizontal'}
      theme="dark"
      inlineIndent={20}
      openKeys={openKeys}
      selectedKeys={currentMenu}
      onOpenChange={handleOpenChange}
      className={classnames({ [styles.headerMenu]: mode === 'horizontal' })}
    >
      {getMenusNode(pathname, role || 0)}
    </Menu>
  )

  return (
    <>
      {mode === 'vertical' ? (
        <Sider width={160} collapsedWidth={60} collapsed={fold} className={styles.sider}>
          {menuSider}
        </Sider>
      ) : (
        menuSider
      )}
    </>
  )
}

export default BasicSider
