import Image from "next/image";
//https://www.youtube.com/watch?v=vCOSTG10Y4o&ab_channel=LamaDev
import { MdVerifiedUser } from "react-icons/md";
import { GrKey } from "react-icons/gr";
import { TbCircleKeyFilled } from "react-icons/tb";
import { FaFileSignature } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

import { BsCardList, BsCalendarDate } from "react-icons/bs";
import Banner from "@/components/banner/Banner";
import Button from "@/components/button/Button";
import Link from "next/link";
import styles from "./page.module.css";

const Home = () => {
  // throw new Error("error in home");
  // return <div>Hello world!</div>
  return (
    <main className={styles.mainBanner}>
      <Banner type="overlay" banner="banner">
        <h1 className={styles.bannerTitle}>Minhas Empresas</h1>
        <p className={styles.bannerText}>Mantenha o controle da sua empresa</p>
        <Link href="/empresas">
          <Button textColor='var(--secondary)' text="Cadastre sua Empresa" />
        </Link>
      </Banner>
      <div className={styles.servico}>
        <h2 className={styles.title}>O que é esse serviço?</h2>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <MdVerifiedUser className={styles.icon} />
            <p className={styles.text}>
              Nesse serviço você pode administrar os serviços que sua empresas
              utiliza da Prefeitura do Rio, bem como as pessoas que são
              autorizadas a responder por sua empresas em cada serviço.
            </p>
          </div>
          <GoArrowRight className={styles.arrowIcon} />
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <TbCircleKeyFilled className={styles.icon} />
            <p className={styles.text}>
              Quando você insere um CNPJ no campo disponível, verificamos na
              Receita Federal se seu CPF está incluído dentre os representantes
              do quadro societário ou no registro de "Representante" daquele
              CNPJ; Se estiver, a empresa é adicionada ao seu perfil.
            </p>
          </div>
          <GoArrowRight className={styles.arrowIcon} />
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <FaFileSignature className={styles.icon} />
            <p className={styles.text}>
            Após ter adicionado um CNPJ ao seu perfil, poderá dar Procurações Virtuais 
            para uma ou mais pessoas para serviços específicos e com prazos de validade 
            definidos.  Basta clicar no nome da empresa e seguir as instruções do site.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
