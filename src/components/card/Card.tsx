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
    <div className={styles.direction}>
      <div className={styles.innerDiv}>
        <div className={styles.textContainer}>
          <p className={styles.text}>{titular}</p>
          <p className={styles.text}>{inscricao}</p>
        </div>
        <IoMdInformationCircleOutline className={styles.icon} />
      </div>
     
        <p className={styles.additionalText}>{children}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Recusar</button>
          <button className={styles.button}>Aceitar</button>
        </div>
      
    </div>
  );
};

export default Card;
