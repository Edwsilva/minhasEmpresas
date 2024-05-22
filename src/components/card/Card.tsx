import { ReactNode } from "react";
import styles from "./card.module.css";
import Button from "../button/Button";
import { IoMdInformationCircleOutline } from "react-icons/io";

type CardProps = {
  children: ReactNode;
  titular: string;
  inscricao: string;
  // servico: string
  bg?: "primary" | "primaryLight" | "pink";
};

const Card = ({ children, titular, inscricao, bg }: CardProps) => {
  return (
    // <div className={styles.card}>
    //     <h3 className={styles.cardTitle}>{titular}</h3>
    //     <h3 className={styles.cardTitle}>{inscricao}</h3>
    //     <div className={`${styles.cardIcon} ${bg ? styles[bg] : ""}`}>
    //         {children}
    //     </div>
    //     {/* <p className={styles.cardContent}>
    //         {subtitle}
    //     </p> */}
    //     <Button text="Recusar" />

    // </div>
    <div className={styles.direction}>
      <div className={styles.outerDiv}>
        <div className={styles.innerDiv}>
          <div className={styles.textContainer}>
            <p className={styles.text}>Texto 1</p>
            <p className={styles.text}>Texto 2</p>
          </div>
          <IoMdInformationCircleOutline className={styles.icon} />
        </div>
        <div className={styles.adicional}>
          <p className={styles.additionalText}>Texto adicional</p>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Botão 1</button>
            <button className={styles.button}>Botão 2</button>
          </div>
        </div>
      </div>
      <div className={styles.outerDiv}>
        <div className={styles.innerDiv}>
          <div className={styles.textContainer}>
            <p className={styles.text}>Texto 1</p>
            <p className={styles.text}>Texto 2</p>
          </div>
          <IoMdInformationCircleOutline className={styles.icon} />
        </div>
        <div className={styles.adicional}>
          <p className={styles.additionalText}>Texto adicional</p>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Botão 1</button>
            <button className={styles.button}>Botão 2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
