import React from 'react'
import styles from './loginStyles.module.scss'
import { Button } from 'elements'

export default function Login() {
  return (
    <div>
      <div className={styles.topdiv}>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.registerBtn}>Register</button>
      </div>
      <div className={styles.formInput}>
        <form>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
          />
        </form>
      </div>
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
  )
}
