import React, { ReactNode } from 'react'
import { ROUTES, AuthROUTES } from 'routes'

import { SideNav, TopNav } from 'components'
import { useApp } from 'context'

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="content">
      <TopNav />
      <div className="contentWrapper">
        <SideNav />
        <div className="contentBody">{children}</div>
      </div>
    </div>
  )
}

export default function App() {
  const { isLoggedIn } = useApp()

  return !isLoggedIn ? (
    <AuthROUTES />
  ) : (
    <Wrapper>
      <ROUTES />
    </Wrapper>
  )
}
