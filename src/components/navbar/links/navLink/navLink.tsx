"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

type itemProps = {
  title: string;
  path: string;
};

type NavLinkProps = {
  item: itemProps;
};

const NavLink = ({ item }: NavLinkProps) => {

  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
