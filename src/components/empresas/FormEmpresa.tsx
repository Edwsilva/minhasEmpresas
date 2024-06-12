import styles from "./empresas.module.css";
// import Button from "../button/Button";

import Button from "../button/Button";
import { ChangeEvent } from "react";

const FormEmpresa = () => {

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form Submitted");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title2}>Cadastrar Empresa</h3>

      <div className={styles.textField}>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={styles.label}>
            CNPJ:
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="00.000.000/0000-00"
            maxLength={13}
            value={''}
            onChange={(e) => { }}
          />
        </div>
        <Button
          p
          backgroundColor="var(--secondary)"
          border="1px solid var(--secondary)"
          text="Cadastrar"
          props={{ type: "submit" }}
        />
      </div>
    </form>
  );
};

export default FormEmpresa;
