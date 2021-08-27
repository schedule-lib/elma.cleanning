import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import styles from "../styles/components/Header.module.scss";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function changeMenuState() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <header className={styles.headerContainer}>
      <nav>
        <Link href="/">Elma Cleaning</Link>

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
                  jurema.cleaning@gmail.com
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
