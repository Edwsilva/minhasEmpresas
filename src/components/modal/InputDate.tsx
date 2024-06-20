import React, { ChangeEvent, memo } from 'react';
import styles from "./modal.module.css";

type Props = {
  label: string;
  name: string;
  id: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  htmlFor?: string;
}

const InputDate = memo(function InputDate({ label, name, id, value, htmlFor, handleChange }: Props) {
  return (
    <div className={styles.inputDate}>
      <label className={styles.label2} htmlFor={htmlFor}>
        {label}
      </label>
      <input id={id} placeholder="dd/mm/aaaa" type="date" name={name} onChange={handleChange} value={value} />
    </div>
  )
})

export default InputDate