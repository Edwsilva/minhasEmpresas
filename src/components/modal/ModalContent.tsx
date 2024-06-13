import React from "react";
import styles from "./modal.module.css";
import Button from "../button/Button";
import { FaCheck } from "react-icons/fa6";

const ModalContent = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Cadastro de Procurador</h1>
      <div className={styles.inputCPFContainer}>
        <div className={styles.inputCPF}>
          <label className={styles.label} htmlFor="">
            CPF
          </label>
          <input placeholder="123.456.789-00" type="text" name="cpf" />
        </div>
        <Button p text={"OK"} props={{ style: { width: "60px" } }} />
      </div>
      <div className={styles.inputPeriodoContainer}>
        <label className={styles.label} htmlFor="">
          Período
        </label>
        <div>
          <div className={styles.inputDate}>
            <label className={styles.label2} htmlFor="">
              De:
            </label>
            <input placeholder="dd/mm/aaaa" type="date" name="de" />
          </div>
          <div className={styles.inputDate}>
            <label className={styles.label2} htmlFor="">
              Até:
            </label>
            <input placeholder="dd/mm/aaaa" type="date" name="ate" />
          </div>
        </div>
      </div>
      <div className={styles.inputAtividadesContainer}>
        <div className={styles.radioGroup}>
          <input
            type="radio"
            className={styles.input}
            id="curso"
            name="declaracao"
            value="curso"
            // onChange={handleChangeRadioSelect.bind(this, "curso")}
          />
          <label htmlFor="curso" className={styles.label}>
            <span>
              <FaCheck className={styles.icon} size={15} />
            </span>
            Atividade 1
          </label>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
