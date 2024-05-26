'use client'
import { ReactNode, useState } from "react";
import styles from "./card1.module.css";
import Button from "../button/Button";
import { IoMdInformationCircleOutline } from "react-icons/io";

type CardProps = {
  children: ReactNode;
  titular: string;
  inscricao: string;
  status?: string;
  bg?: "primary" | "primaryLight" | "pink";
};

const Card = ({ children, titular, inscricao, bg, status }: CardProps) => {

  const [isRotated, setIsRotated] = useState(false);

  // Função para lidar com o clique no ícone
  const handleIconClick = () => {
    // Altera o estado para inverter a rotação do card
    setIsRotated(!isRotated);
  };



  return (
    <div className={styles.direction} >
      <div className={styles.innerDiv}>
        <div>
          <p className={styles.textTitular}>{titular}</p>
          <p className={styles.text}>{inscricao}</p>
        </div>
        <IoMdInformationCircleOutline className={styles.icon} />
      </div>

      <p className={styles.additionalText}>{children}</p>

      {status === "1" ? (
        <div className={styles.buttonContainer}>
          <Button
            p
            backgroundColor="var(--reject)"
            textColor="var(--reject)"
            border="1px solid var(--reject)"
            text="Recusar"
          />

          <Button p textColor="var(--secondary)" text="Aceitar" />
        </div>
      ) : (
        <div className={styles.buttonContainerAtivas}>
           <Button
            p
            backgroundColor="var(--reject)"
            textColor="var(--reject)"
            border="1px solid var(--reject)"
            text="Cancelar"
          />
        </div>
      )}
    </div>
  );
};

export default Card;
