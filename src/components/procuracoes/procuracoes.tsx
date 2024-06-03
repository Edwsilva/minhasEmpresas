"use client";
import { useEffect, useState } from "react";
import styles from "./procuracoes.module.css";
import Card from "@/components/card/Card";
import Card1 from '@/components/card/Card1'
import { fetchUrl } from "../../api/procuracao";
interface Procuracao {
  id: string;
  titular: string;
  inscricao: string;
  servico: string;
  status: string;
}

async function fetchProcuracoes() {
  const data = await fetchUrl("procuracoes");
  return data;
}

const Procuracoes = () => {
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
    <div>
      <h2 className={styles.title}>Minhas procurações</h2>
      <div className={styles.container}>
        <h3 className={styles.title2}>
          Pendentes: {`(${procuracoesPendentes.length})`}
        </h3>
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
        <h3 className={styles.title2}>
          Ativas: {`(${procuracoesAtivas.length})`}
        </h3>
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
    </div>
  );
};

export default Procuracoes;
