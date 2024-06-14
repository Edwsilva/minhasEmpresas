import { ChangeEvent, useState } from "react";
import styles from "./empresas.module.css";
import Button from "../button/Button";
import { formatCNPJ, validateCNPJ } from "@/utils/validate";

const FormEmpresa = () => {
  const [textField, setTextField] = useState('');

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCNPJ(e.target.value);
    setTextField(formattedValue);
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validated = validateCNPJ(textField);

    console.log("Form Submitted");
    console.log(`Textfield - ${textField}`);
    console.log(`validateCNPJ - ${validated}`);
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
            maxLength={18}
            value={textField}
            onChange={inputChangeHandler}
          />
        </div>
        <Button
          p
          text="Cadastrar"
          props={{ type: "submit" }}
        />
      </div>
    </form>
  );
};

export default FormEmpresa;
