import React from 'react'

import { GeneralInput } from 'elements'

import styles from './styles.module.scss'

export default function Feeding() {
  return (
    <div className={styles.wrapper}>
      <GeneralInput label="max" type="password" value="max" placeholder="max" />
    </div>
  )
}
