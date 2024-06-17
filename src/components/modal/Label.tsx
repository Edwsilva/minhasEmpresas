import React, { memo } from 'react';
import styles from "./modal.module.css";

type Props = {
  children: string;
  htmlFor?: string;
}

const Label = memo(function Label({ children, htmlFor }: Props) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  )
})

export default Label