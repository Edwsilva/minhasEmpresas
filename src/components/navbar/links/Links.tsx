'use client'
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./links/NavLink";
import { IoHome } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import { FaFileContract } from "react-icons/fa6";

type Link = {
  title: string;
  path: string;
  icon: JSX.Element;
}

export const links: Link[] = [
  {
    title: "Home",
    path: "/",
    icon: <IoHome size={25} className={styles.mobileIcon} />,
  },
  {
    title: "Cadastro de Procurador",
    path: "/procurador",
    icon: <FaFileContract size={25} className={styles.mobileIcon} />
  },
  {
    title: "Minhas Empresas",
    path: "/empresas",
    icon: <MdBusinessCenter size={25} className={styles.mobileIcon} />
  }
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //   TEMPORARY
  const session = true;
  const isAdmin = true;

  console.log("OPEN ", open)
  return (
    <div className={styles.links}>
      {links.map((link) => (
        // <Link href={link.path} key={link.title}>{link.title}</Link>
        <NavLink item={link} key={link.title} />
      ))}
      {/* {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )} */}
    </div>
    // <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
    /* {open && (
      <div className={styles.mobileLinks}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
    )} */
  );
};

export default Links;
