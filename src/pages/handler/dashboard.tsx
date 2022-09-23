import React from 'react'
import cn from 'classnames'

import { LogoWide } from 'components'

import styles from './styles.module.scss'

export default function DashBoard() {
  return (
    <>
      <div className={styles.logo}>
        <LogoWide />
      </div>

      <div className={styles.wrapper}>
        <div className={cn(styles.card, styles.actions)}>
          <h3>Actions</h3>
          <button>Update pigs</button>
          <button>Update feeding</button>
          <button>Update Health</button>
          <button>Add transaction</button>
        </div>
      </div>
    </>
  )
}
