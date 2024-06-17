import React, { ChangeEvent, memo } from 'react';
import { FaCheck } from 'react-icons/fa6';
import styles from "./modal.module.css";

type Props = {
  atividade: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = memo(function Checkbox({ atividade, handleChange }: Props) {
  return (
    <div className={styles.checkboxGroup}>
      <input
        type="checkbox"
        className={styles.input}
        id={atividade}
        name="atividades"
        value={atividade}
        onChange={handleChange}
      />
      <label htmlFor={atividade} className={styles.labelContainer}>
        <span className={styles.checkbox}>
          <FaCheck className={styles.icon} size={15} />
        </span>
        {atividade}
      </label>
    </div>
  )
})

export default Checkbox