import Banner from "@/components/banner/Banner";
import styles from "./procurador.module.css";
import Container from "@/components/container/Container";
import Procuracoes from "@/components/procuracoes/procuracoes";
import SearchBar from "@/components/searchbar/SearchBar";
import { Suspense } from "react";

type Props = {
  searchParams: {
    query?: string;
    page?: string;
  }
}

const Procurador = ({ searchParams }: Props) => {
  const query = searchParams.procuracoes || '';
  const currentPage = searchParams.page || '';

  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerProcurador">
        <h1>Minhas Procurações</h1>
      </Banner>
      <Container>
        <SearchBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Procuracoes query={query} currentPage={currentPage} />
        </Suspense>
      </Container>
    </div>
  );
};

export default Procurador;
