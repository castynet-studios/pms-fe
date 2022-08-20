import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, useCurrentPath } from 'elements'

import styles from './loginStyles.module.scss'

const pages: { 0: 'Login'; 1: 'Register' } = { 0: 'Login', 1: 'Register' }

export default function Login() {
  const [page, setPage] = useState<string>(pages[0])
  const inActivePage = page === pages[0] ? pages[1] : pages[0]
  const path = useCurrentPath()
  const navigate = useNavigate()

  useEffect(() => {
    if (path === '/register') setPage(pages[1])
    else setPage(pages[0])
  }, [path])

  const navigateToInactive = () => navigate(`/${inActivePage.toLowerCase()}`)

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
          className={styles.input}
          type="text"
          id="emailPhone"
          name="email or phone"
        />
        <label htmlFor="password">Password</label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
        />

        {page === pages[1] && (
          <>
            <label htmlFor="password">Confirm Password</label>
            <input
              className={styles.input}
              type="password"
              id="password"
              name="password"
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
        />
        <Button
          name={inActivePage}
          bgColor="var(--blue)"
          color="white"
          radius="var(--borderRadiusXl)"
        />
      </div>

      <div className={styles.google}>
        <button>{page} with Google</button>
      </div>
    </div>
  )
}
