"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/banner/Banner";
import styles from "./procurador.module.css";
import Button from "@/components/button/Button";
import Card from "@/components/card/Card";
import { fetchUrl } from "../../api/procuracao";


interface Procuracao {
  id: string,
  titular: string,
  inscricao: string,
  servico: string, 
  status: string
}

async function fetchProcuracoes() {
  const data = await fetchUrl();
  console.log("DATA ", data);
  return data;
}


const Procurador = () => {
  const [procuracoes, setProcuracoes] = useState<ProcuracaoTeste[]>([]);

  useEffect(() => {
    const fetchAndSetProcuracoes = async () => {
      const response = await fetchProcuracoes();
      setProcuracoes(response);
    };
    fetchAndSetProcuracoes();
  }, []);

  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerProcurador">
        <h1>Minhas Procurações</h1>
      </Banner>

      <div className={styles.container}>
        {procuracoes.map((procuracao, index) => (
          <Card
            key={index}
            inscricao={procuracao.inscricao}
            titular={procuracao.titular}
          >
            {procuracao.servico}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Procurador;
