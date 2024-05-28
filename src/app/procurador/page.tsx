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
  const data = await fetchUrl('procuracoes');
  console.log("DATA ", data);
  return data;
}

const Procurador = () => {
  const [procuracoes, setProcuracoes] = useState<Procuracao[]>([]);

  // Separar as procurações em ativas e pendentes
  const procuracoesAtivas = procuracoes.filter(
    (procuracao) => procuracao.status !== "1"
  );
  const procuracoesPendentes = procuracoes.filter(
    (procuracao) => procuracao.status === "1"
  );

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
      {/* <h1>Minhas procurações</h1> */}
      {procuracoesPendentes.length > 0 && (
        <div>
          <div className={styles.container}>
            <p className={styles.title}>Pendentes: {`(${procuracoesPendentes.length})`}</p>
          </div>

          <div className={styles.container}>
            {procuracoesPendentes.map((procuracao, index) => (
              <Card
                key={index}
                inscricao={procuracao.inscricao}
                titular={procuracao.titular}
                status={procuracao.status}
              >
                {procuracao.servico}
              </Card>
            ))}
          </div>
        </div>
      )}

      {procuracoesAtivas.length > 0 && (
        <div>
          <div className={styles.container}>
            <p className={styles.title}>Ativas: {`(${procuracoesAtivas.length})`}</p>
          </div>
          <div className={styles.container}>
            {procuracoesAtivas.map((procuracao, index) => (
              <Card
                key={index}
                inscricao={procuracao.inscricao}
                titular={procuracao.titular}
                status={procuracao.status}
              >
                {procuracao.servico}
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Procurador;
