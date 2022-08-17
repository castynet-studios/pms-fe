import { useEffect, useState } from 'react'

const greet = (hour: number): string => {
  if (hour < 12) return 'Good morning,'
  if (hour < 18) return 'Good afternoon,'
  if (hour < 22) return 'Good evening,'
  if (hour < 24) return 'Good night,'

  return 'Hello'
}

export const useGreeting = () => {
  const [greeting, setGreeting] = useState<string>('')

  useEffect(() => {
    const checkHour = () => {
      const hour = new Date().getHours()
      setGreeting(greet(hour))
    }
    checkHour()
    const interval = setInterval(checkHour, 3600000)
    return () => clearInterval(interval)
  }, [])

  return greeting
}
