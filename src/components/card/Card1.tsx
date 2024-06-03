"use client";
import React, { useState } from "react";
import styles from "./card1.module.css"; // Importe o arquivo de módulo CSS
import { IoMdInformationCircleOutline } from "react-icons/io";

function DirectionCard() {
  // Define o estado para controlar se o card está rotacionado
  const [isRotated, setIsRotated] = useState(false);

  // Função para lidar com o clique no ícone
  const handleIconClick = () => {
    console.log("Rotate");
    // Altera o estado para inverter a rotação do card
    setIsRotated(!isRotated);
  };

  return (
    <div className={`${styles.card} ${isRotated ? styles.isRotated : ''}`}>
      {/* Cartão */}
      <div className={styles.cardFront}>
     
       
        <h2>Informações da Frente</h2>
        <h2>Informações da Frente</h2>
        <h2>Informações da Frente</h2>

        <div className={styles.iconContainer} onClick={handleIconClick}>
          <IoMdInformationCircleOutline className={styles.icon} />
        </div>
      </div>
     
      <div className={styles.cardBack}>
        <h2>Informações do verso</h2>
       
        
        <div className={styles.iconContainer} onClick={handleIconClick}>
          <IoMdInformationCircleOutline className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default DirectionCard;
