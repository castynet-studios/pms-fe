import React, { ReactNode } from 'react'
import cn from 'classnames'

import styles from './button.module.scss'

export interface IButton {
  name: string | ReactNode
  color: string
  radius: string
  bgColor: string
  clickFn?: () => void
  disabled?: boolean
}

export default function Button(props: IButton) {
  const {
    name,
    color,
    radius: borderRadius,
    bgColor: backgroundColor,
    clickFn,
    disabled,
  } = props

  return (
    <button
      style={{
        color,
        borderRadius,
        backgroundColor,
      }}
      className={cn(styles.button, { [styles.disabled]: disabled })}
      onClick={() => clickFn && clickFn()}
      disabled={disabled}
    >
      {name}
    </button>
  )
}
