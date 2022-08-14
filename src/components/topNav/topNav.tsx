import React from 'react'

import { Button, Icons } from 'elements'

import navStyle from './topNav.module.scss'

export default function TopNav() {
  return (
    <nav className={navStyle.main}>
      <div className={navStyle.profile}>
        <Button
          name={<Icons.Profile size="25" />}
          bgColor="var(--white)"
          color="var(--black)"
          radius="var(--borderRadiusXl)"
        />
      </div>
    </nav>
  )
}
