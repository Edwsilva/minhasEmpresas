"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/banner/Banner";
import styles from "./procurador.module.css";
import Button from "@/components/button/Button";
import Card from "@/components/card/Card";
import { fetchUrl } from "../../api/procuracao";

interface Procuracao {
  id: string;
  titular: string;
  inscricao: string;
  servico: string;
  status: string;
}

async function fetchProcuracoes() {
  const data = await fetchUrl();
  console.log("DATA ", data);
  return data;
}

const Procurador = () => {
  const [procuracoes, setProcuracoes] = useState<Procuracao[]>([]);
  const [totalPendentes, setTotalPendentes] = useState(0);
  useEffect(() => {
    const fetchAndSetProcuracoes = async () => {
      const response = await fetchProcuracoes();
      setProcuracoes(response);
    };
    fetchAndSetProcuracoes();
  }, []);

  useEffect(() => {
    const countPendentes = procuracoes.reduce((total, procuracao) => {
      // Se a procuração estiver pendente (status igual a 1), incrementa o total
      if (procuracao.status === "1") {
        return total + 1;
      }
      return total;
    }, 0);
    setTotalPendentes(countPendentes);
  }, [procuracoes]);

  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerProcurador">
        <h1>Minhas Procurações</h1>
      </Banner>

      {totalPendentes > 0 && (
        <div className={styles.container}>
          <p>Pendentes: {`(${totalPendentes})`}</p>
        </div>
      )}
      <div className={styles.container}>
        {procuracoes.map(
          (procuracao, index) =>
            procuracao.status == "1" && (
              <Card
                key={index}
                inscricao={procuracao.inscricao}
                titular={procuracao.titular}
              >
                {procuracao.servico}
              </Card>
            )
        )}
      </div>
    </div>
  );
};

export default Procurador;
