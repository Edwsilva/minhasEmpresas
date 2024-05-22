'use client';
import { BiSolidUserCircle } from 'react-icons/bi';
import styles from "./login.module.css"

const LoginPage = () => {
    return (
        <button
        // style={{}}
        className={
          styles.button
            // ? `${styles.button} ${styles.buttonMobile} ${menuOpen ? styles.menuOpenAnim : ''
            // }`
            // : styles.button
        }
        onClick={() => console.log("LOGIN")}
      >
        <BiSolidUserCircle className={styles.icon} />
        Login
      </button>
    )
}

export default LoginPage