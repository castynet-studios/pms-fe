import React from 'react'

import { Button } from 'elements'

import styles from './loginStyles.module.scss'

export default function Login() {
  return (
    <div>
      <div className={styles.loginBtns}>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.registerBtn}>Register</button>
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
      </div>
      <div className={styles.buttons}>
        <Button
          name="Login"
          bgColor="var(--lightGreen)"
          color="white"
          radius="var(--borderRadiusXl)"
        />
        <Button
          name="Register"
          bgColor="var(--blue)"
          color="white"
          radius="var(--borderRadiusXl)"
        />
      </div>

      <div className={styles.google}>
        <button>Login with Google</button>
      </div>
    </div>
  )
}
