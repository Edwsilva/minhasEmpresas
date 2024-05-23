'use client';
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./navbar.module.css";

type Props = {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuOpen: boolean;
}

const MobileNavbarButton = ({ setMenuOpen, menuOpen }: Props) => {

  return (
    <div className={styles.mobileNav}>
      <button
        className={`${styles.iconButton} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(prevState => !prevState)}
      >
        <div className={styles.menuIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  )
}

export default MobileNavbarButton;