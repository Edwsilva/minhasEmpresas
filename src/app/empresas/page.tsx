import Banner from "@/components/banner/Banner"

import styles from './empresas.module.css'

const Empresas = () => {
    return (
        <div className={styles.main}>
          <Banner type="overlaySM" banner="bannerEmpresas">
            <h1>Minhas Empresas</h1>
          </Banner>
          </div>
    )
}

export default Empresas