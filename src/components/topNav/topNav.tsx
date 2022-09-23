import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import { Button, Icons } from 'elements'
import { Paths } from 'routes'
import { useApp } from 'context'

import styles from './topNav.module.scss'

export default function TopNav() {
  const [showProfile, setShowProfile] = useState(false)
  const { logOut } = useApp()

  return (
    <nav className={styles.main}>
      <div className={styles.profile}>
        <Button
          name={<Icons.Profile size="25" />}
          bgColor="var(--white)"
          color="var(--black)"
          radius="var(--borderRadiusXl)"
          clickFn={() => setShowProfile(!showProfile)}
        />

        <div className={cn(styles.user, { [styles.active]: showProfile })}>
          <p onClick={() => logOut()}>Logout</p>
          <p>
            <Link to={Paths.User}>My Account</Link>
          </p>
        </div>
      </div>
    </nav>
  )
}
