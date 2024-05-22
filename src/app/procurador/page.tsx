import Banner from "@/components/banner/Banner";
import styles from "./procurador.module.css";
import Button from "@/components/button/Button";
import Card from "@/components/card/Card";
import { fetchUrl } from "../../api/procuracao";

async function fetchProcuracoes() {
  const data = await fetchUrl();
  return data;
}
const Procurador = () => {
  const response = fetchProcuracoes();
  console.log("datatata ", response);
  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerProcurador">
        <h1>Minhas Procurações</h1>
      </Banner>

      <div className={styles.container}>
        <Card inscricao="30.111.167/0001-10" titular="Nome da empresa">
          Confirmar convite de procuração para empresa?
        </Card>
      </div>
    </div>
  );
};

export default Procurador;
