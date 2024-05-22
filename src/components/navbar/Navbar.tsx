import Links from "./links/Links";
import styles from "./navbar.module.css";
import Login from "../../app/(auth)/login/page";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/images/logoNovo.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image className={styles.img} src={logo} alt="Logo" />
        </Link>
        <div className={styles.containerBody}>
          <Links />
          {/* <Login /> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
