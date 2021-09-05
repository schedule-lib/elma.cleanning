/* eslint-disable jsx-a11y/anchor-is-valid */

import Image from "next/image";
import Link from "next/link";

import cleanerTool from "../../public/assets/cleaning-icon.png";
import styles from "../styles/pages/Home.module.scss";

export default function ServicesModule() {
  return (
    <section id="service-module" className={styles.servicesModule}>
      <div>
        <Link href="/services/nursey-and-school">
          <a>
            <header>
              <div>
                <Image src={cleanerTool} alt="commercial photo" />
              </div>
              <div>
                <strong>Nursery School</strong>
              </div>
            </header>
          </a>
        </Link>
        <Link href="/services/store-cleaning">
          <a>
            <header>
              <div>
                <Image src={cleanerTool} alt="commercial photo" />
              </div>
              <div>
                <strong>Store cleaning</strong>
              </div>
            </header>
          </a>
        </Link>
      </div>
      <hr />
    </section>
  );
}
