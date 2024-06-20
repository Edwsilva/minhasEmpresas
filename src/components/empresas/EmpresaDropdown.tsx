import styles from "./empresas.module.css";
import { memo, useState, useRef } from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import Button from "../button/Button";
import { Empresa } from "@/types";
import TRow from "../tabela/TRow";

type Props = {
  data: Empresa;
  i: number;
  dropdownVisible: boolean;
  toggle: (index: number) => void;
  openModal: (content: string[]) => void;
};

const EmpresaDropdown = memo(function DeclaracaoDropdown({
  i,
  data,
  dropdownVisible,
  toggle,
  openModal,
}: Props) {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>(false);

  const componentRef = useRef(null);

  const handleDropdown = () => {
    toggle(i);
  };

  return (
    <div className={styles.empresa}>
      <div
        className={
          dropdownVisible === true
            ? styles.empresaDropdownVisible
            : styles.empresaDropdown
        }
        onClick={handleDropdown}
      >
        <div className={styles.empresaGroup}>
          <span>
            <h3>{data.nomeFantasia.toLocaleUpperCase()}</h3>
          </span>
        </div>
        <button
          className={`${styles.iconButton} ${
            dropdownVisible ? styles.open : ""
          }`}
        >
          <div className={styles.menuIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div
        className={`${styles.empresaContainer} ${
          dropdownVisible ? styles.empresaContainerVisible : ""
        }`}
      >
        <div className={styles.empresaCabecalho}>
          <MdOutlineBusinessCenter className={styles.icon} />
          <h4>{data.nome.toUpperCase()}</h4>
        </div>

        <div className={styles.empresaCabecalho}>
          <CgFileDocument className={styles.icon} />
          <h4>{data.cnpj}</h4>
        </div>
        <h3 className={styles.tituloProcuradores}>Procuradores Cadastrados</h3>

        {data?.procuradores && (
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Período</th>
                  <th>Atividade</th>
                  <th>Status</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>
                {data.procuradores.map((procurador, index) => {
                  return <TRow data={procurador} key={index} />;
                })}
              </tbody>
            </table>
          </div>
        )}

        <Button
          text="Cadastrar Procurador"
          fn={() => openModal(data.atividadesDisponiveis)}
          p
        />
      </div>
    </div>
  );
});

export default EmpresaDropdown;
