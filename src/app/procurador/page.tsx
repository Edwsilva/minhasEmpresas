import Banner from "@/components/banner/Banner";
import styles from "./procurador.module.css";
import Container from "@/components/container/Container";
import Procuracoes from "@/components/procuracoes/procuracoes";

const Procurador = () => {
 
  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerProcurador">
        <h1>Minhas Procurações</h1>
      </Banner>
      <Container>
        <Procuracoes />
      </Container>
    </div>
  );
};

export default Procurador;
