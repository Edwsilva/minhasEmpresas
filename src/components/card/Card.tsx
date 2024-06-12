"use client";
import { ReactNode, useState } from "react";
import styles from "./card.module.css";
import Button from "../button/Button";
import { IoMdInformation } from "react-icons/io";

type CardProps = {
  children: ReactNode;
  titular: string;
  inscricao: string;
  status?: string;
  servico: string;

  bg?: "primary" | "primaryLight" | "pink";
};

const Card = ({
  children,
  titular,
  inscricao,
  servico,
  bg,
  status,
}: CardProps) => {
  const [isRotated, setIsRotated] = useState(false); // Define o estado para controlar se o card está rotacionado

  // Função para lidar com o clique no ícone
  const handleIconClick = () => {
    console.log("Rotate");
    // Altera o estado para inverter a rotação do card
    setIsRotated(!isRotated);
  };

  return (
    <div className={styles.direction}>
      <div className={`${styles.card} ${isRotated ? styles.isRotated : ""}`}>
        <div className={styles.cardFront}>
          <div className={styles.innerDiv}>
            <div>
              <p className={styles.textTitular}>{titular}</p>
              <p className={styles.text}>{inscricao}</p>
            </div>
            <div className={styles.iconContainer} onClick={handleIconClick}>
              <IoMdInformation className={styles.icon} />
            </div>
          </div>
          <div>
            <p className={styles.additionalText}>{servico}</p>
          </div>

          {status === "1" ? (
            <div className={styles.buttonContainer}>
              <Button
                p
                text="Recusar"
                type="error"
              />

              <Button p text="Aceitar" />
            </div>
          ) : (
            <div className={styles.buttonContainerAtivas}>
              <Button
                p
                type="error"
                text="Cancelar"
              />
            </div>
          )}
        </div>
        <div className={styles.cardBack}>
          <div className={styles.innerDiv}>
            <h3>Atividades</h3>
            <div className={styles.iconContainer} onClick={handleIconClick}>
              <IoMdInformation className={styles.icon} />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
