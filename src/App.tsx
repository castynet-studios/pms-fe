import React, { ReactNode } from 'react'
import { ROUTES, Paths, AuthROUTES } from 'routes'

import { useCurrentPath } from 'elements'

import { SideNav, TopNav } from 'components'

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
  const currentPath = useCurrentPath()
  const paths = [Paths.Login, Paths.Register, Paths.ForgotPassword]
  const isAuthPage = paths.includes(currentPath)

  return !isAuthPage ? (
    <Wrapper>
      <ROUTES />
    </Wrapper>
  ) : (
    <AuthROUTES />
  )
}
