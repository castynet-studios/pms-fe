export const useGreeting = () => {
  const hour = new Date().getHours()

  if (hour < 12) {
    return 'Good Morning'
  }
  if (hour < 18) {
    return 'Good afternoon'
  }
  if (hour < 22) {
    return 'Good evening'
  }
  if (hour < 24) {
    return 'Good Night'
  }
  return 'Hello'
}
