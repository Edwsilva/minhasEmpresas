import React from 'react';
import styles from "./modal.module.css";

type Props = {
  children: string;
  htmlFor?: string;
}

const Label = ({ children, htmlFor }: Props) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export default Label