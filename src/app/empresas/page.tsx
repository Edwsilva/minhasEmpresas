"use client";
import { useCallback, useEffect, useState } from "react";
import { Empresa } from "@/types";
// import { fetchUrl } from "@/api/procuracao";
import Banner from "@/components/banner/Banner";
import Container from "@/components/container/Container";
import Empresas from "@/components/empresas/Empresas";
import FormEmpresa from "@/components/empresas/FormEmpresa";
import Modal from "react-modal";
import styles from "./empresas.module.css";
import Button from "@/components/button/Button";
import { IoClose } from "react-icons/io5";
import ModalContent from "@/components/modal/ModalContent";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "320px",
    width: "80%",
    height: "75%",
    padding: 10,
  },
};

const EmpresasPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [buttonModalOpen, setButtonModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string[]>([]);

  const handleModalOpen = (content: string[]) => {
    setModalContent(content);
    setModalIsOpen(!modalIsOpen);
    setButtonModalOpen(!buttonModalOpen);
  };

  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerEmpresas">
        <h1>Minhas Empresas</h1>
      </Banner>
      <Container>
        <h2 className={styles.title}>Minhas Empresas</h2>
        <Empresas
          modalOpen={modalIsOpen}
          buttonModal={buttonModalOpen}
          setButtonModal={setButtonModalOpen}
          setModalContent={setModalContent}
          setModalOpen={setModalIsOpen}
        />
        <FormEmpresa />
      </Container>
      <Button
        buttonModal
        hidden={buttonModalOpen ? false : true}
        text={
          <IoClose
            size={25}
            style={{ display: "flex", alignItems: "center" }}
          />
        }
        props={{ onClick: handleModalOpen.bind(this, modalContent) }}
      />
      <Modal ariaHideApp={false} isOpen={modalIsOpen} style={customStyles}>
        <ModalContent atividades={modalContent} />
      </Modal>
    </div>
  );
};

export default EmpresasPage;
