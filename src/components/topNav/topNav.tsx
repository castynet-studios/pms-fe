import React from 'react'

import { Button, Icons } from 'elements'
import { Paths } from 'routes'

import navStyle from './topNav.module.scss'

export default function TopNav() {
  return (
    <nav className={navStyle.main}>
      <div className={navStyle.profile}>
        <a href={Paths.User}>
          <Button
            name={<Icons.Profile size="25" />}
            bgColor="var(--white)"
            color="var(--black)"
            radius="var(--borderRadiusXl)"
          />
        </a>
      </div>
    </nav>
  )
}
