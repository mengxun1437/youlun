import React from 'react'
import { Layout, Modal } from 'antd'
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Link, useDispatch } from 'umi'
import BasicSider from './BasicSider'
import classnames from 'classnames'
import LogoImg from '@/assets/images/logo.png'
import styles from '../styles/BasicHeader.less'

interface IProps {
  collapsed: boolean
  username: string
  mode?: 'horizontal' | 'vertical' | 'inline'
  role?: number
}

const { Header } = Layout
const { confirm } = Modal

const BasicHeader: React.FC<IProps> = props => {
  const dispatch = useDispatch()
  const { collapsed, username, mode, role } = props

  const toggleCollapse = () => {
    dispatch({
      type: 'app/toggleSider'
    })
  }

  const handleLogout = () => {
    confirm({
      title: '提示',
      content: '确认退出登录吗？',
      onOk: () => {
        return dispatch({
          type: 'user/logout'
        })
      }
    })
  }

  return (
    <>
      {mode === 'vertical' ? (
        <Header className={styles.header}>
          <div className={classnames(styles.left, { [styles.logo_hide]: collapsed })}>
            <Link to="/" className={styles.logo_wrapper}>
              <img src={LogoImg} alt="logo" />
            </Link>
            {collapsed ? (
              <MenuUnfoldOutlined className={styles.icon_fold} onClick={toggleCollapse} />
            ) : (
              <MenuFoldOutlined className={styles.icon_fold} onClick={toggleCollapse} />
            )}
          </div>
          <div className={styles.right}>
            <span className={styles.username}>{'admin'}</span>
            <LogoutOutlined title="退出登录" onClick={handleLogout} />
          </div>
        </Header>
      ) : (
        <Header
          className={classnames(
            mode === 'inline' ? styles.inline_header : styles.horizontal_header
          )}
        >
          <div className={styles.left}>
            <Link to="/" className={styles.logo_wrapper}>
              <img src={LogoImg} alt="logo" />
            </Link>
            <BasicSider
              mode={mode}
              pathname={window.location.pathname}
              collapsed={collapsed}
              role={role}
            />
          </div>
          <div className={styles.right}>
            <span className={styles.username}>admin</span>
            <LogoutOutlined title="退出登录" onClick={handleLogout} />
          </div>
        </Header>
      )}
    </>
  )
}

export default BasicHeader
