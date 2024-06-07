import styles from "./empresas.module.css";
// import Button from "../button/Button";

import Button from "../button/Button";

const Empresa = () => {
  return (
    <div className={styles.cadastrarEmpresa}>
     <label className={styles.label}>Cadastrar Empresa</label>

      <div className={styles.form}>
        <div className={styles.textField}>
          <label htmlFor="" className={styles.label}>
            CNPJ:
          </label>
          <input
            type="text"
            placeholder="00.000.000/0000-00"
            maxLength={13}
            className={styles.input}
            value={''}
            onChange={(e) => { }}
          />
        </div>
        <Button
          p
          backgroundColor="var(--secondary)"
          // textColor="var(--error)"
          border="1px solid var(--secondary)"
          text="Cadastrar"
        />
      </div>
    </div>
  );
};

export default Empresa;
