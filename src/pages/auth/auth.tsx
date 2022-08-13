import React from 'react'

import { Login } from 'components'
import { Signature } from 'elements'

import styles from './auth.module.scss'

function Auth() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerdiv}>
        <Login />
      </div>
      <Signature marginTop="415px" />
    </div>
  )
}

export default Auth
