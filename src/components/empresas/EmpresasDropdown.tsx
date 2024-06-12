import styles from "./empresas.module.css";
// import Button from "../button/Button";
import { memo, useState } from "react";
// import Spinner from "../UI/Spinner/Spinner";
// import Error from "../UI/Error/Error";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import Tabela from "../tabela/Tabela";
import Button from "../button/Button";
import Empresa from "./Empresa";

type Atividade =
  | "Alvará Transitório de Eventos"
  | "Licenciamento da Vigilância Sanitária"
  | "Rio Mais Fácil Negócios";

interface Procurador {
  nome: string;
  periodo: string;
  atividades: Atividade[];
  status: "aprovado" | "pendente";
}

export interface Empresa {
  id: number;
  nome: string;
  nomeFantasia: string;
  representante: boolean;
  cnpj: string;
  procuradores: Procurador[];
}

type Props = {
  data: Empresa;
  i: number;
  dropdownVisible: boolean;
  toggle: (index: number) => void;
};

const EmpresaDropdown = memo(function DeclaracaoDropdown({
  i,
  data,
  dropdownVisible,
  toggle,
}: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleDropdown = () => {
    toggle(i);
  };

  console.log("EmpresaDropdown i", i);
  console.log("EmpresaDropdown data", data.procuradores);
  console.log("EmpresaDropdown dropdownVisible", dropdownVisible);
  console.log("EmpresaDropdown toggle", toggle);

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
        <div className={styles.tituloProcuradores}>
          <h3>Procuradores Cadastrados</h3>
        </div>

        <div className={styles.tabela}>
          <div className={styles.header}>
            {/* Cabeçalho da Tabela */}
            <div>Nome</div>
            <div>Período</div>
            <div>Atividade</div>
            <div>Status</div>
            <div>Revogar</div>
          </div>
          <div className={styles.header}>
            {data?.procuradores && (
              <>
                {data.procuradores.map((procurador, index) => {
                  console.log("Procurador em tabela ", procurador);
                  return <Tabela data={procurador} key={index} />;
                })}
              </>
            )}
          </div>
        </div>
        <Button
          backgroundColor="var(--secondary)"
          // textColor="var(--error)"
          border="1px solid var(--secondary)"
          text="Cadastrar Procurador"
        />
      </div>
    </div>
  );
});

export default EmpresaDropdown;
