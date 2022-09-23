import React, { useEffect, useState } from 'react'
import cn from 'classnames'

import { Icons, validatePassword, IPasswordConditions } from 'elements'

import styles from './loginStyles.module.scss'

type RegisterConditionsProps = {
  password: string
  passwordConfirm: string
}

type IconGenPros = {
  hasTyped: boolean
  condition: boolean
}

const initialConditions: IPasswordConditions = {
  isValid: false,
  isLength: false,
  isUpper: false,
  isLower: false,
  isNumber: false,
}

const IconGen = ({ hasTyped, condition }: IconGenPros) => {
  if (!hasTyped) return <Icons.EmptyCheck size={20} />
  if (condition) return <Icons.Check size={20} />
  return <Icons.Exclamation size={20} />
}

export default function RegisterConditions(props: RegisterConditionsProps) {
  const { password, passwordConfirm } = props
  const [hasTyped, setHasTyped] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<IPasswordConditions>(initialConditions)
  const isMatch = password === passwordConfirm && hasTyped

  useEffect(() => {
    setTimeout(() => {
      setIsValid(validatePassword(password))
      setHasTyped(password.length > 2)
    }, 2000)
  }, [password, passwordConfirm])

  const passwordClass = (condition: boolean) =>
    cn(
      { [styles.invalid]: !condition && hasTyped },
      { [styles.condition]: !hasTyped },
      { [styles.valid]: condition }
    )

  return (
    <div className={styles.conditions}>
      <p className={passwordClass(isValid.isLength)}>
        <IconGen hasTyped={hasTyped} condition={isValid.isLength} />
        <span> Must be at least 8 characters long</span>
      </p>
      <p className={passwordClass(isValid.isUpper)}>
        <IconGen hasTyped={hasTyped} condition={isValid.isUpper} />
        <span> Must have one uppercase character</span>
      </p>
      <p className={passwordClass(isValid.isLower)}>
        <IconGen hasTyped={hasTyped} condition={isValid.isLower} />
        <span> Must have one lowercase character</span>
      </p>
      <p className={passwordClass(isValid.isNumber)}>
        <IconGen hasTyped={hasTyped} condition={isValid.isNumber} />
        <span> Must have one number</span>
      </p>
      <p className={passwordClass(isMatch)}>
        <IconGen hasTyped={hasTyped} condition={isMatch} />
        <span> Passwords must match</span>
      </p>
    </div>
  )
}
