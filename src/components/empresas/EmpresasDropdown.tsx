import styles from "./empresas.module.css";
// import Button from "../button/Button";
import { memo, useState } from "react";
// import Spinner from "../UI/Spinner/Spinner";
// import Error from "../UI/Error/Error";

type Atividade = "Alvará Transitório de Eventos" | "Licenciamento da Vigilância Sanitária" | "Rio Mais Fácil Negócios";

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
}

const EmpresaDropdown = memo(function DeclaracaoDropdown({ i, data, dropdownVisible, toggle }: Props) {
  const [declaracaoHTML, setDeclaracaoHTML] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleDropdown = () => {
    toggle(i);
  };

  return (
    < div className={styles.empresa} >
      <div className={dropdownVisible === true ? styles.empresaDropdownVisible : styles.empresaDropdown} onClick={handleDropdown}>
        <div className={styles.empresaGroup}>
          <span><b>{data.nomeFantasia}</b></span>
        </div>
        <button
          className={`${styles.iconButton} ${dropdownVisible ? styles.open : ""}`}
        >
          <div className={styles.menuIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div className={`${styles.empresaContainer} ${dropdownVisible ? styles.empresaContainerVisible : ""}`}>
      </div>
    </div>
  )
})

export default EmpresaDropdown;