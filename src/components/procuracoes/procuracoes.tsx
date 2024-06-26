"use client";
import React, { useEffect, useState } from "react";
import styles from "./procuracoes.module.css";
import Card from "@/components/card/Card";
import Card1 from "@/components/card/Card1";
import { fetchUrl } from "../../api/procuracao";
import SearchBar from "@/components/searchbar/SearchBar";

type Props = {
  query: string;
  // currentPage: string;
};

interface Procuracao {
  id: string;
  titular: string;
  inscricao: string;
  servico: string;
  status: string;
  atividades: string[];
}

async function fetchProcuracoes() {
  console.log("FETCHPROCURAÇÕES");
  const data = await fetchUrl("procuracoes");
  return data;
}

const Procuracoes = () => {
  const [procuracoes, setProcuracoes] = useState<Procuracao[]>([]);
  const [filter, setFilter] = useState({
    term: "",
    type: "Pendentes",
  });

  useEffect(() => {
    (async () => {
      const procuracoesFetched = await fetchProcuracoes();
      setProcuracoes(procuracoesFetched);
    })();
  }, []);

  const handleFilterTerm = (term: string) => {
    setFilter((prevState) => {
      return { ...prevState, term };
    });
  };

  const handleFilterType = (type: string) => {
    setFilter((prevState) => {
      return { ...prevState, type };
    });
  };

  const procuracoesAtivas = procuracoes.filter(
    (procuracao) => procuracao.status !== "1"
  );

  const procuracoesPendentes = procuracoes.filter(
    (procuracao) => procuracao.status === "1"
  );

  return (
    <div>
      <h2 className={styles.title}>Minhas procurações</h2>
      <SearchBar
        handleFilterTerm={handleFilterTerm}
        handleFilterType={handleFilterType}
      />
      <div className={styles.container}>
        <h3 className={styles.title2}>
          Pendentes{" "}
          {`(${
            filter.type === "Pendentes"
              ? procuracoesPendentes.filter((procuracao) =>
                  procuracao.titular.includes(filter.term)
                ).length
              : procuracoesPendentes.length
          })`}
        </h3>
        {procuracoesPendentes.length > 0 && (
          <div className={styles.contentContainer}>
            {procuracoesPendentes
              .filter((procuracao) =>
                filter.type === "Pendentes"
                  ? procuracao.titular.includes(filter.term)
                  : procuracao.titular.includes("")
              )
              .map((procuracao, index) => (
                <Card
                  key={procuracao.id}
                  inscricao={procuracao.inscricao}
                  titular={procuracao.titular}
                  status={procuracao.status}
                  servico={procuracao.servico}
                >
                  <ul className={styles.atividadesList}>
                    {procuracao.atividades &&
                      procuracao.atividades.map((atividade, index) => (
                        <li key={index} className={styles.titleLi}>
                          {atividade}
                        </li>
                      ))}
                  </ul>
                </Card>
              ))}
          </div>
        )}
      </div>

      <div className={styles.container}>
        <h3 className={styles.title2}>
          Ativas{" "}
          {`(${
            filter.type === "Ativas"
              ? procuracoesAtivas.filter((procuracao) =>
                  procuracao.titular.includes(filter.term)
                ).length
              : procuracoesAtivas.length
          })`}
        </h3>
        {procuracoesAtivas.length > 0 && (
          <div className={styles.contentContainer}>
            {procuracoesAtivas
              .filter((procuracao) =>
                filter.type === "Ativas"
                  ? procuracao.titular.includes(filter.term)
                  : procuracao.titular.includes("")
              )
              .map((procuracao, index) => (
                <Card
                  key={index}
                  inscricao={procuracao.inscricao}
                  titular={procuracao.titular}
                  status={procuracao.status}
                  servico={procuracao.servico}
                >
                  <div>
                    {procuracao.atividades &&
                      procuracao.atividades.map((atividades, index) => (
                        <React.Fragment key={index}>
                          <li className={styles.titleLi}>{atividades}</li>
                        </React.Fragment>
                      ))}
                  </div>
                </Card>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Procuracoes;
