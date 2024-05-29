import { ReactNode } from "react";
import styles from "./card.module.css";
import Button from "../button/Button";
import { IoMdInformation } from "react-icons/io";

type CardProps = {
  children: ReactNode;
  titular: string;
  inscricao: string;
  status?: string;
  bg?: "primary" | "primaryLight" | "pink";
};

const Card = ({ children, titular, inscricao, bg, status }: CardProps) => {
  return (
    <div className={styles.direction}>
      <div className={styles.innerDiv}>
        <div>
          <p className={styles.textTitular}>{titular}</p>
          <p className={styles.text}>{inscricao}</p>
        </div>
        <div className={styles.iconContainer}>
          <IoMdInformation className={styles.icon} />
        </div>
      </div>

      <p className={styles.additionalText}>{children}</p>

      {status === "1" ? (
        <div className={styles.buttonContainer}>
          <Button
            p
            backgroundColor="var(--error)"
            textColor="var(--error)"
            border="1px solid var(--error)"
            text="Recusar"
          />

          <Button p textColor="var(--secondary)" text="Aceitar" />
        </div>
      ) : (
        <div className={styles.buttonContainerAtivas}>
          <Button
            p
            backgroundColor="var(--error)"
            textColor="var(--error)"
            border="1px solid var(--error)"
            text="Cancelar"
          />
        </div>
      )}
    </div>
  );
};

export default Card;
