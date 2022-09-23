import React from 'react'

import styles from './sideNav.module.scss'

export default function LogoWide() {
  return (
    <div className={styles.imageText}>
      <span className={styles.image}>
        <img src="logo.jpeg" alt="logo" />
      </span>

      <div className={styles.text}>
        <span className={styles.name1}>PIGGERY</span>
        <span className={styles.name2}>MANAGEMENT</span>
      </div>
    </div>
  )
}
