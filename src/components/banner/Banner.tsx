import styles from "./banner.module.css";
import { ReactNode } from "react";
// import banner from "../../../../public/images/banner.jpg"

interface BannerProps {
  type: "overlay" | "overlaySM";
  banner: "banner" | "bannerProcurador" | "bannerEmpresas";
  children: ReactNode;
}

const Banner = ({ type, banner, children }: BannerProps) => {

  return (
    <div className={styles.container}>
      <div className={styles[banner]}>
        <div className={styles[type]}>
          <div className={styles.bannerWritten}>
            <div className={styles.bannerContent}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;