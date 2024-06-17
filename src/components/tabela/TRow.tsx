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

const TRow = ({ data }: TabelaProps) => {

  const classStatus = data.status === 'APROVADO' ? styles.statusAprovado : styles.status;

  return (
    <tr className={styles.trow}>
      {/* <div className={styles.linha}> */}
      {/* Linha de Dados */}
      <th>{data.nome}</th>
      <th>{data.periodo}</th>
      <th>
        {data.atividades.join(", ")}
        {/* {data.atividades.map((atividade, index) => (
            <React.Fragment key={index}>
              {atividade}
              {index !== data.atividades.length - 1 ? ", " : ""}
            </React.Fragment>
          ))} */}
      </th>
      <th className={classStatus}>{data.status}</th>
      <th><IoRemoveCircle className={styles.icon} size={20} /></th>
      {/* </div> */}
    </tr>
  );
};

export default TRow;
