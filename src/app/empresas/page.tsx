"use client";
import { useCallback, useEffect, useState } from "react";
import { Empresa } from "@/types";
import { fetchUrl } from "@/api/procuracao";
import Banner from "@/components/banner/Banner";
import Container from "@/components/container/Container";
import EmpresaDropdown from "@/components/empresas/EmpresasDropdown";
import FormEmpresa from "@/components/empresas/FormEmpresa";
import Modal from 'react-modal';
import styles from "./empresas.module.css";
import Button from "@/components/button/Button";
import { IoClose } from "react-icons/io5";
import ModalContent from "@/components/modal/ModalContent";

const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '320px',
    width: '80%',
    height: '75%',
    padding: 10,
    // position: 'relative',
  }
}

const Empresas = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>();
  const [dropdownVisible, setDropdownVisible] = useState<boolean[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [buttonModalOpen, setButtonModalOpen] = useState(false);

  const toggleDropdown = useCallback(
    (index: number) => {
      setDropdownVisible((prevState) => {
        const updatedStates = [...prevState];
        updatedStates[index] = !updatedStates[index];
        return updatedStates;
      });
    },
    [setDropdownVisible]
  );

  const handleModalOpen = () => {
    setModalIsOpen(!modalIsOpen);
    setButtonModalOpen(!buttonModalOpen);
  }

  useEffect(() => {
    (async () => {
      const data = await fetchUrl("empresas");
      console.log("DATA", data);
      setEmpresas(data);
    })();
  }, []);


  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerEmpresas">
        <h1>Minhas Empresas</h1>
      </Banner>
      <Container>
        <h2 className={styles.title}>Minhas Empresas</h2>
        {empresas?.map((empresa, i) => (
          <EmpresaDropdown
            data={empresa}
            i={i}
            toggle={toggleDropdown}
            dropdownVisible={dropdownVisible[i]}
            openModal={handleModalOpen}
          />
        ))}
        <FormEmpresa />
      </Container>
      <Button
        buttonModal
        fn={handleModalOpen} hidden={buttonModalOpen ? false : true}
        text={<IoClose
          size={25}
          style={{ display: 'flex', alignItems: 'center' }} />}
      />
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <ModalContent />
      </Modal>
    </div>
  );
};

export default Empresas;
