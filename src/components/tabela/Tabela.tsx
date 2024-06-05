import React from "react";
import styles from "./tabela.module.css"; // Importe o arquivo de estilos CSS para sua tabela
import { IoRemoveCircle } from "react-icons/io5";

const Tabela = () => {
  return (
    <div className={styles.tabela}>
      <div className={styles.header}>
      
        {/* Cabeçalho da Tabela */}
        <div>Nome</div>
        <div>Período</div>
        <div>Atividade</div>
        <div>Status</div>
        <div> </div>
      </div>
      <div className={styles.linha}>
      
        {/* Linha de Dados */}
        <div>RICK GRIMES</div>
        <div>30/11/2017 até 30/11/2050</div>
        <div>Alvará Transitório de Eventos, Licenciamento da Vigilância Sanitária, Rio Mais Fácil Negócios </div>
        <div>Aprovado</div>
        <div><IoRemoveCircle /></div>
      </div>
      {/* Adicione mais linhas conforme necessário */}
    </div>
  );
};

export default Tabela
