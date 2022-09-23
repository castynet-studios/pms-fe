import React, { ReactNode } from 'react'
import { ROUTES, AuthROUTES, HandlerROUTES, VetROUTES, SlyROUTES } from 'routes'

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
  const { isLoggedIn, user } = useApp()

  const userAuthLevel = user?.userLevel || 3

  if (!isLoggedIn) return <AuthROUTES />

  if (userAuthLevel === 3)
    return (
      <>
        <TopNav />
        <HandlerROUTES />
      </>
    )

  if (userAuthLevel === 2) return <VetROUTES />

  if (userAuthLevel === 0 || userAuthLevel === 1)
    return (
      <Wrapper>
        <ROUTES />
      </Wrapper>
    )

  return (
    <>
      <TopNav />
      <SlyROUTES />
    </>
  )
}
