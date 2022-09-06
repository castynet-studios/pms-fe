import React from 'react'

import { Login } from 'components'
import { Signature } from 'elements'

import styles from './auth.module.scss'

function Auth() {
  return (
    <div className={styles.wrapper}>
      <Login />
      <Signature />
    </div>
  )
}

export default Auth
