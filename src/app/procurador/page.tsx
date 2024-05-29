"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/banner/Banner";
import styles from "./procurador.module.css";
import Button from "@/components/button/Button";
import Card from "@/components/card/Card";
import { fetchUrl } from "../../api/procuracao";
import Container from "@/components/container/Container";

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
      <Container>
        <h2 className={styles.title}>Minhas procurações</h2>
        <div className={styles.container}>
          <h3 className={styles.title2}>Pendentes: {`(${procuracoesPendentes.length})`}</h3>
          {procuracoesPendentes.length > 0 && (
            <div className={styles.contentContainer}>
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
          )}
        </div>

        <div className={styles.container}>
          <h3 className={styles.title2}>Ativas: {`(${procuracoesAtivas.length})`}</h3>
          {procuracoesAtivas.length > 0 && (
            <div className={styles.contentContainer}>
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
          )}
        </div>
      </Container>
    </div>
  );
};

export default Procurador;
