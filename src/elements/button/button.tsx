import React, { ReactNode } from 'react'
import sty from './button.module.scss'

export interface IButton {
  name: string | ReactNode
  color: string
  radius: string
  bgColor: string
  clickFn?: () => void
}

function Button({ name, color, radius, bgColor, clickFn }: IButton) {
  const styles = {
    color: color,
    borderRadius: radius,
    backgroundColor: bgColor,
  }

  return (
    <button
      style={styles}
      className={sty.button}
      onClick={() => clickFn && clickFn()}
    >
      {name}
    </button>
  )
}

export default Button
