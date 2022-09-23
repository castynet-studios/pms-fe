import React from 'react'
import cn from 'classnames'

import { IInputProps, generateRandomLetters } from 'elements'

import styles from './input.module.scss'

export const GeneralInput = (props: IInputProps) => {
  const { label, name, placeholder, className } = props

  const autoName =
    name || label?.toLowerCase().replace(' ', '_') + generateRandomLetters(5)

  return (
    <div className={styles.wrapper}>
      <label htmlFor={autoName} className={styles.label}>
        {label}
      </label>
      <input
        name={autoName}
        id={autoName}
        placeholder={placeholder || label}
        className={cn(styles.input, className)}
        {...props}
      />
    </div>
  )
}
