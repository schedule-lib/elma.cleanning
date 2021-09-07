/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import elmaCleaningLogo from "../../public/assets/elma-cleaning-logo.svg";
import styles from "../styles/components/Header.module.scss";
import { MyAnchorToLogo } from "./MyAnchorToLogo";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function changeMenuState() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <header className={styles.headerContainer}>
      <nav>
        <Link href="/#keep-menu" passHref>
          <MyAnchorToLogo src={elmaCleaningLogo} alt="elma cleaning Logo" />
        </Link>

        <div
          className={`${styles.menu} ${menuIsOpen ? styles.open : undefined}`}
        >
          <ul>
            <li>
              <a href="https://wa.me/14379846443?text=what%20services%20ECleaning%20has">
                +1 (437) 984-6443
              </a>
            </li>
            <li>
              <a href="mailto:elma.cleanning@gmail.com">
                jurema.cleaning@gmail.com
              </a>
            </li>
          </ul>
          <div className={styles.controls}>
            {menuIsOpen ? (
              <button type="button" onClick={changeMenuState}>
                <FiX />
              </button>
            ) : (
              <button type="button" onClick={changeMenuState}>
                <FiMenu />
              </button>
            )}
          </div>

          <div className={styles.modal}>
            <ul>
              <li>
                <a href="https://wa.me/14379846443?text=what%20services%20ECleaning%20has">
                  +1 (437) 984-6443
                </a>
              </li>
              <li>
                <a href="mailto:elma.cleanning@gmail.com">
                  hello@elmacleaning.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
