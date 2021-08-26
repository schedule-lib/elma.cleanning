import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiInstagram, FiChevronUp } from "react-icons/fi";

import genesysOfficialLogo from "../../public/assets/gs-logo-point-wt.svg";
import styles from "../styles/components/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Link href="/" passHref>
              <Image src={genesysOfficialLogo} alt="GEneSyS Systems!" />
            </Link>
            <span>
              &copy; genesys 2021 <br /> Todos os direitos reservados
            </span>
          </div>

          <nav className={styles.right}>
            <ul>
              <span>GS Bank</span>
              <li>
                <Link href="/">Conta digital</Link>
              </li>
              <li>
                <Link href="/">Cartão de crédito</Link>
              </li>
              <li>
                <Link href="/">Conta PJ</Link>
              </li>
            </ul>

            <ul>
              <span>Genesys systems</span>
              <li>
                <Link href="/sobre">Quem somos</Link>
              </li>
              <li>
                <Link href="/">perguntas frequentes</Link>
              </li>
              <li>
                <Link href="/">contato</Link>
              </li>
              <li>
                <Link href="/">carreira</Link>
              </li>
            </ul>

            <ul>
              <span>Fale com a gente</span>
              <li>
                <Link href="/">0800 608 6236</Link>
              </li>
              <li>
                <Link href="/">genisys.oficial@gmail.com</Link>
              </li>
              <li>
                <p>Atendimento 24h</p>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <div className={styles.socialContainer}>
            <li aria-label="Github">
              <a
                href="https://github.com/geni-sys"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <span />
            </li>
            <li aria-label="Instagram">
              <a
                href="https://instagram.com/ginesis.sys"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
              <span />
            </li>
          </div>

          <button type="button">
            <FiChevronUp size={30} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
