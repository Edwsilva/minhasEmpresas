import styles from "./procurador.module.css";
import DirectionCard from "@/components/card/Card1";
import Banner from "@/components/banner/Banner";

const Procurador = () => {
  return (
    <div className={styles.main}>
       <Banner type="overlaySM" banner="bannerProcurador">
        <h1>Minhas Procurações</h1>
      </Banner>
      <div className={styles.container}>
        
      <DirectionCard />
      <DirectionCard />
      <DirectionCard />
      <DirectionCard />
      <DirectionCard />

      <DirectionCard />
      </div>
    </div>
  );
};

export default Procurador;
