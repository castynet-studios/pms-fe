import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import {
  Button,
  useCurrentPath,
  validateEmail,
  validatePassword,
} from 'elements'
import { useApp } from 'context'
import { Paths } from 'routes'
import RegisterConditions from './registerConditions'

import styles from './loginStyles.module.scss'

const pages: { 0: 'Login'; 1: 'Register' } = { 0: 'Login', 1: 'Register' }

export default function Login() {
  const [page, setPage] = useState<string>(pages[0])
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false)
  const [isPassConfirmValid, setIsPassConfirmValid] = useState<boolean>(false)

  const inActivePage = page === pages[0] ? pages[1] : pages[0]
  const path = useCurrentPath()
  const navigate = useNavigate()
  const { signInWithGoogle, signInWithEP, signUpWithEP } = useApp()
  const isTypedEmail = email.length > 2
  const isTypedPassword = password.length > 2
  const isTypedPassConfirm = passwordConfirm.length > 2

  useEffect(() => {
    if (path === Paths.Register) setPage(pages[1])
    else setPage(pages[0])
  }, [path])

  useEffect(() => {
    setTimeout(() => {
      setIsEmailValid(validateEmail(email))
      setIsPasswordValid(validatePassword(password).isValid)
      setIsPassConfirmValid(
        (validatePassword(password).isValid && password === passwordConfirm) ||
          path === Paths.Login
      )
    }, 200)
  }, [email, password, passwordConfirm, path])

  const navigateToInactive = () => navigate(`/${inActivePage.toLowerCase()}`)
  const handleClickAction = () => {
    if (page === pages[0]) signInWithEP({ email, password })
    else signUpWithEP({ email, password })
  }

  return (
    <div>
      <div className={styles.loginBtns}>
        <button className={styles.active} disabled>
          {page}
        </button>
        <button className={styles.goToBtn} onClick={navigateToInactive}>
          {inActivePage}
        </button>
      </div>

      <div className={styles.formInput}>
        <label htmlFor="email">Email or Phone</label>
        <input
          className={cn(
            styles.input,
            { [styles.invalid]: !isEmailValid && isTypedEmail },
            { [styles.valid]: isEmailValid }
          )}
          type="text"
          id="emailPhone"
          name="email or phone"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className={cn(
            styles.input,
            { [styles.invalid]: !isPasswordValid && isTypedPassword },
            { [styles.valid]: isPasswordValid }
          )}
          type="password"
          id="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />

        {page === pages[1] && (
          <>
            <label htmlFor="password">Confirm Password</label>
            <input
              className={cn(
                styles.input,
                { [styles.invalid]: !isPassConfirmValid && isTypedPassConfirm },
                { [styles.valid]: isPassConfirmValid }
              )}
              type="password"
              id="passwordConfirm"
              name="password"
              onChange={e => setPasswordConfirm(e.target.value)}
            />
            <RegisterConditions
              password={password}
              passwordConfirm={passwordConfirm}
            />
          </>
        )}
      </div>
      <div className={styles.buttons}>
        <Button
          name={page}
          bgColor="var(--lightGreen)"
          color="white"
          radius="var(--borderRadiusXl)"
          disabled={!isEmailValid || !isPasswordValid || !isPassConfirmValid}
          clickFn={handleClickAction}
        />
        <Button
          name={inActivePage}
          bgColor="var(--blue)"
          color="white"
          radius="var(--borderRadiusXl)"
          clickFn={navigateToInactive}
        />
      </div>

      <div className={styles.google}>
        <button onClick={() => signInWithGoogle()}>{page} with Google</button>
      </div>
    </div>
  )
}
