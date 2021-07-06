import { message, Modal } from 'antd'
import { ModalFuncProps } from 'antd/lib/modal'
import React from 'react'
import classNames from 'classnames'
import styles from './index.less'

interface IProps extends ModalFuncProps {
  isImplement?: boolean
  implementText?: string
  disabled?: boolean
}

const { confirm } = Modal
const MSConfirm: React.FC<IProps> = props => {
  const {
    children,
    content,
    icon,
    isImplement,
    implementText,
    disabled = false,
    ...confirmProps
  } = props

  const handleConfirm = () => {
    if (disabled) {
      return
    }

    if (isImplement) {
      message.warn(implementText)
    } else {
      confirm({
        ...confirmProps,
        content,
        icon
      })
    }
  }

  const cls = classNames(styles.wrapper, { [styles.disabled]: disabled === true })

  return (
    <div onClick={handleConfirm} className={cls}>
      {children}
    </div>
  )
}
export default MSConfirm
