'use client';
import styles from './login.module.css';
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdOutlineLogout } from 'react-icons/md';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { AppDispatch, useAppSelector } from '@/redux/store';
// import { initialize, keycloak } from '@/config/keycloak';
// import { matriculasActions } from '@/redux/features/matriculas-slice';
// import { userInfoActions } from '@/redux/features/user-info';
// import { tokenActions } from '@/redux/features/token-slice';

type LoginProps = {
  mobile?: boolean;
  menuOpen?: boolean;
  linksLength?: number;
  delay?: number;
};

// const handleLogin = (dispatch: AppDispatch) => {
//   dispatch(userInfoActions.setLoadingUserInfo(true));
//   keycloak.login({ prompt: 'login' });
//   dispatch(matriculasActions.setLoadingState("pending"));
// };

// const handleLogout = (dispatch: AppDispatch) => {
//   dispatch(userInfoActions.setLoadingUserInfo(true));
//   dispatch(matriculasActions.setLoadingState("pending"));
//   dispatch(tokenActions.resetToken);
//   keycloak.logout();
// };


const Login = ({ mobile, menuOpen, linksLength, delay }: LoginProps) => {
  // const dispatch = useDispatch<AppDispatch>();
  // const userInfo = useAppSelector((state) => state.userInfo);
  // const { authenticated } = useAppSelector((state) => state.token);

  const animStyle = linksLength && delay ? { animationDuration: `${linksLength * delay}s` } : {};

  const authenticated = false;

  // useEffect(() => {
  //   initialize();
  // }, []);

  return (
    <>
      {authenticated ? (
        <div className={styles.logged}>
          <span className={styles.name}>Olá, Rick</span>
          <button
            className={styles.logout}
            onClick={() => console.log("handleLogout")}
          >
            <MdOutlineLogout size={25} />
          </button>
        </div>
      ) : (
        <button
          style={animStyle}
          className={
            mobile
              ? `${styles.button} ${styles.buttonMobile} ${menuOpen ? styles.menuOpenAnim : ''
              }`
              : styles.button
          }
          onClick={() => console.log("handleLogin")}
        >
          <BiSolidUserCircle className={styles.icon} />
          Login
        </button>
      )}
    </>
  );
};

export default Login;
