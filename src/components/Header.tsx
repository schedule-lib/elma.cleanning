import React from "react";

import styles from "../styles/components/Header.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <a className={styles.logo} href="#">
          Elma Cleanning
        </a>

        <div className="menu">
          <ul>
            <li>
              <a href="#contact">+1 003003003003</a>
            </li>
            <li>
              <a href="mailto:elma.cleanning@gmail.com">
                email.contact@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
