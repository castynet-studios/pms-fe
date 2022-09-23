import React from 'react'

import { useApp } from 'context'
import { Greeting } from 'elements'
import { LogoWide } from 'components'

import styles from './styles.module.scss'

export default function Sly() {
  const { user } = useApp()

  return (
    <>
      <div className={styles.logo}>
        <LogoWide />
      </div>

      <div className={styles.wrapper}>
        <h1>
          <Greeting /> {user?.firstName}
        </h1>
        <p>
          Please talk to your <u>admin</u> about getting authorized
        </p>
      </div>
    </>
  )
}
