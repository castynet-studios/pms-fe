import styles from './loginButtonStyles.module.scss'

export default function LoginButton() {
    return (
        <div>
            <button className={styles.login}>Login</button>
            <button className={styles.withGoogle}>Login with Google</button>
        </div>
    )
}