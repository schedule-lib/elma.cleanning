/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiArrowDown } from "react-icons/fi";

import ecBackground from "../../public/assets/e-cleaning-foreground.jpg";
import { ServiceGroup } from "../components/ServiceGroup";
import ServicesModule from "../components/ServicesModule";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const router = useRouter();

  function navigateToServicesPage() {
    router.push("/services");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Elma cleaning</title>
        <meta name="description" content="Elma, Commercial cleaning services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <section id="welcome" className={styles.initialSection}>
          <article className="background">
            <Image
              objectFit="unset"
              alt="cleaning service"
              src={ecBackground}
            />
          </article>

          <div>
            <div className={styles.textContainer}>
              <h1>Commercial cleaning</h1>
              <p>
                There’s always a risk of cross contamination when foreign
                contaminants are not removed prior to the disinfection process.
                When it’s not an emergency, we recommend having your facility
                cleaned prior to the disinfection process. You can have your
                current cleaning crews perform this or Elma can provide this
                service for you.
              </p>
              <div>
                <button type="button" onClick={navigateToServicesPage}>
                  learn more
                </button>
                <a href="#service-group">
                  services <FiArrowDown />
                </a>
              </div>
            </div>
          </div>

          <hr />
        </section>

        <section id="about" className={styles.aboutSection}>
          <div>
            <h2>About us</h2>
            <h3>
              Elma Cliner is an office, residential, commercial and
              post-construction cleaning service provider. we provide services
              in the Toronto and GTHA areas. We offer the best cleaning and are
              proud to offer you a wide range of effective, reliable and
              unmatched quality solutions. All at affordable prices.
            </h3>
          </div>
          <hr />
        </section>

        <ServiceGroup />

        <section id="our-services" className={styles.aboutSection}>
          <div>
            <h3>
              Our services are carried out by our competent, experienced,
              discreet and reliable team.
            </h3>
          </div>
          <hr />
        </section>

        <ServicesModule />
      </main>
    </div>
  );
}
