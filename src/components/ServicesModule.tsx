/* eslint-disable jsx-a11y/anchor-is-valid */

import Image from "next/image";
import Link from "next/link";

import cleanerTool from "../../public/assets/cleaning-icon.png";
import styles from "../styles/pages/Home.module.scss";

export default function ServicesModule() {
  return (
    <section id="service-module" className={styles.servicesGroup}>
      <div>
        <Link href="/services/nursey-and-school">
          <a>
            <header>
              <div className={styles.left}>
                <Image src={cleanerTool} alt="commercial photo" />
              </div>
              <div className={styles.right}>
                <strong>Nursery School</strong>
              </div>
            </header>
          </a>
        </Link>
        <Link href="/services/store-cleaning">
          <a>
            <header>
              <div className={styles.left}>
                <Image src={cleanerTool} alt="commercial photo" />
              </div>
              <div className={styles.right}>
                <strong>Store cleaning</strong>
              </div>
            </header>
          </a>
        </Link>
        <Link href="/services/complete-house-cleaning">
          <a>
            <header>
              <div className={styles.left}>
                <Image src={cleanerTool} alt="commercial photo" />
              </div>
              <div className={styles.right}>
                <strong>Complete house cleaning</strong>
              </div>
            </header>
          </a>
        </Link>
      </div>
      <hr />
    </section>
  );
}
