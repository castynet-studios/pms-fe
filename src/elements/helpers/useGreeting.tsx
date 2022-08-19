import React, { FC, useEffect, useState } from 'react'

export const greeting = (): string => {
  const hour = new Date().getHours()

  if (hour < 3) return 'Good night,'
  if (hour < 6) return 'Hi early bird,'
  if (hour < 12) return 'Good morning,'
  if (hour < 18) return 'Good afternoon,'
  if (hour < 22) return 'Good evening,'
  if (hour < 24) return 'Good night,'

  return 'Hello'
}

export const Greeting: FC = () => {
  const [greetingMsg, setGreetingMsg] = useState<string>('Hello')

  useEffect(() => {
    const checkHour = () => setGreetingMsg(greeting())

    checkHour()
    const interval = setInterval(checkHour, 3600)

    return () => clearInterval(interval)
  }, [])

  return <>{greetingMsg}</>
}
