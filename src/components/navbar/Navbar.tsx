'use client'
import Links from "./links/Links";
import styles from "./navbar.module.css";
// import Login from "../../app/(auth)/login/page";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/images/logoNovo.png";
import MobileNavbar from "./MobileNavbar";
import MobileNavbarButton from "./MobileNavbarButton";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = (controller: boolean) => {
    setMenuOpen(controller);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoLink}>
          <Link href="/" className={styles.logo}>
            <Image className={styles.img} src={logo} alt="Logo" />
          </Link>
        </div>
        <Links />
        <MobileNavbarButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <MobileNavbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        {/* <Login /> */}
      </div>
    </header>
  );
};

export default Navbar;
