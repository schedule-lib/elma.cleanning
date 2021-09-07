/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { FiInstagram, FiChevronUp } from "react-icons/fi";

import elmaCleaningLogo from "../../public/assets/ec-logo-preview.svg";
import styles from "../styles/components/Footer.module.scss";
import { MyAnchorToLogo } from "./MyAnchorToLogo";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Link href="/#keep-menu" passHref>
              <MyAnchorToLogo src={elmaCleaningLogo} alt="Elma cleaning logo" />
            </Link>
            <span>
              &copy; elma cleaning 2021 <br /> All rights reserved.
            </span>
          </div>

          <nav className={styles.right}>
            <ul>
              <span>Maling Address</span>
              <li>
                <p>MABELLE AVE TORONTO, ON CA M9A 4Y1</p>
              </li>
            </ul>

            <ul>
              <span>Jurema Cleaning</span>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#service-group">Services</a>
              </li>
            </ul>

            <ul>
              <span>Contact us</span>
              <li>
                <a href="https://wa.me/14379846443?text=what%20services%20ECleaning%20has">
                  +1 (437) 984-6443
                </a>
              </li>
              <li>
                <a href="mailto:hello@elmacleaning.com">
                  hello@elmacleaning.com
                </a>
              </li>
              <li>
                <p>24-hour service</p>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <div className={styles.socialContainer}>
            <li aria-label="Instagram">
              <a
                href="https://www.instagram.com/elmacleaning5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
              <span />
            </li>
          </div>

          <a href="#keep-menu" type="button">
            <FiChevronUp size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
