import React from "react";

import styles from "../styles/components/Header.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <a className="logotipo" href="#">
          Elma Cleanning
        </a>

        <div className="menu">
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </nav>
    </header>
  );
}

export default Header;
