import React from "react";
import styles from "./tabela.module.css"; // Importe o arquivo de estilos CSS para sua tabela
import { IoRemoveCircle } from "react-icons/io5";

interface ProcuradorData {
  nome: string;
  periodo: string;
  status: string;
  atividades: string[];
}

// Props da Tabela
interface TabelaProps {
  data: ProcuradorData;
}

const Tabela = ({ data }: TabelaProps) => {

  const className = data.status === 'aprovado' ? styles.statusAprovado : styles.status;

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
        <div>{data.nome}</div>
        <div>{data.periodo}</div>
        <div>
          {data.atividades.join(", ")}
          {/* {data.atividades.map((atividade, index) => (
            <React.Fragment key={index}>
              {atividade}
              {index !== data.atividades.length - 1 ? ", " : ""}
            </React.Fragment>
          ))} */}
        </div>
        <div className={className}>{data.status}</div>
        <div className={styles.icon}>
          <IoRemoveCircle />
        </div>
      </div>
    </div>
  );
};

export default Tabela;
