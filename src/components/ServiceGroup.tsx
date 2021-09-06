/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
// import Link from "next/link";
import { useEffect } from "react";

import cleanerTool from "../../public/assets/cleaning-icon.png";
import styles from "../styles/pages/Home.module.scss";

function ServiceGroup() {
  useEffect(() => {}, []);

  return (
    <section id="service-group" className={styles.servicesGroup}>
      <div>
        <a href="/services/office-cleaning">
          <header>
            <div className={styles.left}>
              <Image src={cleanerTool} alt="commercial photo" />
            </div>
            <div className={styles.right}>
              <strong>Office Cleaning</strong>
            </div>
          </header>
        </a>
        <a href="/services/pharmacy">
          <header>
            <div className={styles.left}>
              <Image src={cleanerTool} alt="commercial photo" />
            </div>
            <div className={styles.right}>
              <strong>Pharmacy</strong>
            </div>
          </header>
        </a>
        <a href="/services/cleaning-and-construction">
          <header>
            <div className={styles.left}>
              <Image src={cleanerTool} alt="commercial photo" />
            </div>
            <div className={styles.right}>
              <strong>Post Construction & Renovation</strong>
            </div>
          </header>
        </a>
      </div>
      <hr />
    </section>
  );
}

export { ServiceGroup };
