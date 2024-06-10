"use client";
import { fetchUrl } from "@/api/procuracao";
import Banner from "@/components/banner/Banner";
import Container from "@/components/container/Container";
import EmpresaDropdown from "@/components/empresas/EmpresasDropdown";
import Empresa from "@/components/empresas/Empresa";
import { useCallback, useEffect, useState } from "react";
import styles from "./empresas.module.css";

const Empresas = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>();
  const [dropdownVisible, setDropdownVisible] = useState<boolean[]>([]);

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

  useEffect(() => {
    (async () => {
      const data = await fetchUrl("empresas");
      console.log("DATA", data);
      setEmpresas(data);
    })();
  }, []);

  console.log("Page empresas");

  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerEmpresas"></Banner>
      <Container>
        <div>
          {empresas?.map((empresa, i) => (
            <EmpresaDropdown
              data={empresa}
              i={i}
              toggle={toggleDropdown}
              dropdownVisible={dropdownVisible[i]}
            />
          ))}
         <Empresa />
        </div>
      </Container>
    </div>
  );
};

export default Empresas;
