import React, { ChangeEvent } from 'react';
import styles from "./modal.module.css";

type Props = {
  label: string;
  name: string;
  id: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  htmlFor?: string;
}

const InputDate = ({ label, name, id, value, htmlFor, handleChange }: Props) => {
  return (
    <div className={styles.inputDate}>
      <label className={styles.label2} htmlFor={htmlFor}>
        {label}
      </label>
      <input id={id} placeholder="dd/mm/aaaa" type="date" name={name} onChange={handleChange} value={value} />
    </div>
  )
}

export default InputDate