import styles from './loginStyles.module.scss';
import LoginButton from 'elements/Button/loginButton';

export default function Login() {
    return (
      <div>
          <div className={styles.topdiv}>
            <button className={styles.loginBtn}>Login</button>
            <button className={styles.registerBtn}>Register</button>
          </div>
          <div className={styles.formInput}>
            <form>
                <label for="email">
                   Email
                </label>
                <br />
                <input type="email" id="email" name="email" />
                <br />
                <label for="password">
                   Password
                </label>
                <br />
                <input type="password" id="password" name="password"/>
            </form>
          </div>
          <LoginButton />
      </div>
    );
  }