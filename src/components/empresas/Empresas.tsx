import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { Empresa } from "../../types";
import { fetchUrl } from "../../api/procuracao";
import EmpresaDropdown from "./EmpresaDropdown";
import styles from "./empresas.module.css";

type Props = {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  buttonModal: boolean;
  setButtonModal: Dispatch<SetStateAction<boolean>>;
  setModalContent: Dispatch<SetStateAction<string[]>>;
}

const Empresas = ({ modalOpen, setModalOpen, buttonModal, setModalContent, setButtonModal }: Props) => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState<boolean[]>([]);

  const toggleDropdown = useCallback((index: number) => {
    setDropdownVisible((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    })
  }, [setDropdownVisible]);

  const handleModalOpen = (content: string[]) => {
    setModalContent(content);
    setModalOpen(!modalOpen);
    setButtonModal(!buttonModal);
  }

  useEffect(() => {
    (async () => {
      const data = await fetchUrl("empresas");
      console.log("DATA", data);
      setEmpresas(data);
    })();
  }, []);

  if (empresas.length === 0) {
    return <h3 className={styles.title2}>No momento você não possui matrícula cadastrada. Insira os dados
      da matrícula e a data de nascimento do aluno e clique em salvar.</h3>
  }

  return (
    <>
      {empresas.map((empresa, i) => (
        <EmpresaDropdown
          key={i}
          data={empresa}
          i={i}
          toggle={toggleDropdown}
          dropdownVisible={dropdownVisible[i]}
          openModal={handleModalOpen}
        />
      ))}
    </>
  )
}

export default Empresas;