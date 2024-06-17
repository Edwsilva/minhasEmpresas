import React, { useState } from "react";
import styles from "./trow.module.css"; // Importe o arquivo de estilos CSS para sua tabela
import { IoRemoveCircle } from "react-icons/io5";
import Modal from 'react-modal';
import Button from "../button/Button";

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

const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '320px',
    width: '30%',
    height: '25%',
    padding: 10,
  }
}

const TRow = ({ data }: TabelaProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [modalContent, setModalContent] = useState<string[]>([]);

  const handleCancelar = () => {
    setModalIsOpen(false);
  }

  const handleConfirmar = () => {
    console.log("Chamada para remover");
    setModalIsOpen(false);
  }

  const classStatus = data.status === 'APROVADO' ? styles.statusAprovado : styles.status;

  return (
    <tr className={styles.trow}>
      {/* Linha de Dados */}
      <th>{data.nome}</th>
      <th>{data.periodo}</th>
      <th>
        {data.atividades.join(", ")}
      </th>
      <th className={classStatus}>{data.status}</th>
      <th><IoRemoveCircle className={styles.icon} size={20} onClick={() => setModalIsOpen(true)} /></th>
      <Modal ariaHideApp={false} isOpen={modalIsOpen} style={customStyles}>
        <div className={styles.modalContainer}>
          <h4>Deseja mesmo remover o procurador {data.nome} desta empresa?</h4>

          <div className={styles.modalButtonContainer}>
            <Button text="Cancelar" type="error" p fn={handleCancelar} />
            <Button text="Confirmar" p fn={handleConfirmar} />
          </div>
        </div>
      </Modal>
    </tr>
  );
};

export default TRow;
