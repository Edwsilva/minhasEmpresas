import React from 'react';
import styles from "./cookies.module.css";
import Button from '../button/Button';
import { cookies } from 'next/headers';
import { FaCookieBite } from "react-icons/fa";
import Link from 'next/link';

const Cookies = () => {
  const setCookie = async () => {
    'use server'
    cookies().set({
      name: 'minhas_empresas',
      value: 'Esse é o value do cookie minhas_empresas',
    })
  }

  return (
    <div className={styles.cookieConsent}>
      <FaCookieBite className={styles.icon} size={35} />
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Nós usamos cookies para melhorar sua experiência.
          Ao usar nosso website, você concorda com o nosso
          uso de cookies.
        </p>
        <p className={styles.text}>
          Você pode ver mais sobre os cookies que usamos em <Link className={styles.link} href={"/"}>Política e Privacidade</Link>.
        </p>
      </div>
      <form action={setCookie}>
        <Button text="Aceitar" props={{ type: "submit" }} />
      </form>
    </div>
  )
}

export default Cookies;