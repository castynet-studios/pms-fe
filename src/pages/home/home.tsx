import React from 'react'

import { useGreeting } from 'elements'

export default function Home() {
  return (
    <>
      <h1>{useGreeting()} Max</h1>
    </>
  )
}
