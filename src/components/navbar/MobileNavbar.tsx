'use client'
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Login from "./login/Login";
import { links } from "./links/Links";
import logo from "@/../public/images/logoNovo.png";
import styles from "./navbar.module.css";

type Props = {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuOpen: boolean;
}


const MobileNavbar = ({ setMenuOpen, menuOpen }: Props) => {

  const menuItemDelay = .25;

  const authenticated = false;

  return (
    < div
      className={`${styles.menu} ${menuOpen === true ? styles.menuOpen : ''}`}
    >
      <div className={styles.menuContainer}>
        <Link
          href="/"
          className={styles.logoMobile}
          onClick={() => setMenuOpen(false)}
        >
          <Image className={styles.img} src={logo} alt="Logo" />
        </Link>
        <div
          className={`${styles.profile} ${menuOpen ? styles.menuOpenAnim : ''
            }`}
          style={{ animationDuration: `${menuItemDelay}s` }}
        >
          {authenticated ? (
            <>
              <CgProfile size={40} />
              <div className={styles.profileInfo}>
                <h1>Rick</h1>
                <p>rick@gmail.com</p>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
        <div
          className={
            authenticated
              ? styles.mobileLinks
              : `${styles.mobileLinks} ${styles.mobileLinksNotLogged}`
          }
        >
          {links.map((link, index) => (
            <Link
              className={`${styles.mobileLink} ${menuOpen ? styles.menuOpenAnim : ''
                }`}
              href={link.path}
              key={index}
              onClick={() => setMenuOpen(false)}
              style={{ animationDuration: `${(index + 2) * menuItemDelay}s` }}
            >
              {/* {link.icon} */}
              {link.title}
            </Link>
          ))}
        </div>
        <div className={styles.logout}>
          {authenticated ? (
            <button
              className={`${styles.logoutButton} ${menuOpen ? styles.menuOpenAnim : ''
                }`}
              style={{
                animationDuration: `${(4) * menuItemDelay}s`,
              }}
              onClick={() => console.log("handleLogout")}
            >
              <MdOutlineLogout size={25} className={styles.mobileIcon} /> Sair
            </button>
          ) : (
            <Login
              mobile
              menuOpen={menuOpen}
              linksLength={4}
              delay={menuItemDelay}
            />
          )}
        </div>
      </div>
    </div >
  )
}

export default MobileNavbar;