/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
// import Link from "next/link";
import { useEffect } from "react";

import cleanerTool from "../../public/assets/cleaner-tool.svg";
import styles from "../styles/pages/Home.module.scss";

function ServiceGroup() {
  useEffect(() => {}, []);

  return (
    <section id="service-group" className={styles.servicesGroup}>
      <div>
        <a href="/services/office-cleaning">
          <header>
            <div>
              <Image src={cleanerTool} alt="commercial photo" />
            </div>
            <div>
              <strong>Office Cleaning</strong>
            </div>
          </header>
          <div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </a>
        <a href="/services/pharmacy">
          <header>
            <div>
              <Image src={cleanerTool} alt="commercial photo" />
            </div>
            <div>
              <strong>Pharmacy</strong>
            </div>
          </header>
          <div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </a>
        <a href="/services/cleaning-and-construction">
          <header>
            <div>
              <Image src={cleanerTool} alt="commercial photo" />
            </div>
            <div>
              <strong>Cleaning and construction</strong>
            </div>
          </header>
          <div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </a>
      </div>
      <hr />
    </section>
  );
}

export { ServiceGroup };
