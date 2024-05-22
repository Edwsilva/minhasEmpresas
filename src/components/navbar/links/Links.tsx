'use client'
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Cadastro de Procurador",
    path: "/procurador",
  },
  {
    title: "Minhas Empresas",
    path: "/empresas",
  },

  // {
  //   title: "About",
  //   path: "/about",
  // },

  {
    title: "Login",
    path: "/login"
  }
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //   TEMPORARY
  const session = true;
  const isAdmin = true;

  console.log("OPEN ", open)
  return (
    <div>
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
      <button className={styles.menuButton} onClick={() =>setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
