import Link from "next/link";

import styles from "../styles/components/Header.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <Link href="/">Elma Cleaning</Link>

        <div className="menu">
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
      </nav>
    </header>
  );
}

export default Header;
