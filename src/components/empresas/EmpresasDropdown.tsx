import styles from "./empresas.module.css";
// import Button from "../button/Button";
import { memo, useState, useRef} from "react";
// import Spinner from "../UI/Spinner/Spinner";
// import Error from "../UI/Error/Error";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import Tabela from "../tabela/Tabela";
import Button from "../button/Button";
import { Empresa } from "@/types";

type Props = {
  data: Empresa;
  i: number;
  dropdownVisible: boolean;
  toggle: (index: number) => void;
  openModal: () => void;
};

const EmpresaDropdown = memo(function DeclaracaoDropdown({
  i,
  data,
  dropdownVisible,
  toggle,
  openModal,
}: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const componentRef = useRef(null);

  const handleDropdown = () => {
    toggle(i);
    componentRef.current.style.display = componentRef.current.style.display === 'none' ? 'block' : 'none'
   
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
      <div >
       
      <div ref={componentRef}
        className={styles.empresaContainer}
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
        <div className={styles.empresaContainer}>
        <Button text="Cadastrar Procurador" fn={openModal} p />
         </div>     
      </div>
      </div>
    </div>
  );
});

export default EmpresaDropdown;
