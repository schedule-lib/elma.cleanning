/* eslint-disable jsx-a11y/anchor-is-valid */

import Image from "next/image";
import Link from "next/link";

import cleanerTool from "../../public/assets/cleaner-tool.svg";
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
                <strong>Nursery and School</strong>
              </div>
            </header>
            <div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
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
            <div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </a>
        </Link>
      </div>
      <hr />
    </section>
  );
}
