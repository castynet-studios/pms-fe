import { IPasswordConditions } from 'elements'

export const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

export const validatePassword = (password: string): IPasswordConditions => {
  const reLength = /^.{8,}$/
  const reUpper = /^(?=.*[A-Z])/
  const reLower = /^(?=.*[a-z])/
  const reNumber = /^(?=.*[0-9])/

  const isLength = reLength.test(password)
  const isUpper = reUpper.test(password)
  const isLower = reLower.test(password)
  const isNumber = reNumber.test(password)
  const isValid = isLength && isUpper && isLower && isNumber

  return { isValid, isLength, isUpper, isLower, isNumber }
}
