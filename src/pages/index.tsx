import Head from "next/head";
import Image from "next/image";

import cleanerTool from "../../public/assets/cleaner-tool.svg";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Elma cleaning</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <section id="welcome" className={styles.initialSection}>
          <div>
            <div>
              <h1>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </h1>
              <p>
                Here at Arelli, we’re changing the cleaning game with no term
                contracts, stop-and-go service, and fully customized cleaning
                packages.
              </p>
              <button type="button">learn more</button>
            </div>

            <article>
              <img
                src="https://images.unsplash.com/photo-1610276173132-c47d148ab626?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="initial styles"
              />
            </article>
          </div>

          <hr />
        </section>

        <section id="about" className={styles.aboutSection}>
          <div>
            <h2>About us</h2>
            <h3>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English. Many
              desktop publishing packages.
            </h3>
          </div>
          <hr />
        </section>

        <section id="service-group" className={styles.servicesGroup}>
          <div>
            <div className="service">
              <header>
                <div>
                  <Image src={cleanerTool} alt="commercial photo" />
                </div>
                <div>
                  <strong>commercial</strong>
                </div>
              </header>
              <div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="service">
              <header>
                <div>
                  <Image src={cleanerTool} alt="commercial photo" />
                </div>
                <div>
                  <strong>commercial</strong>
                </div>
              </header>
              <div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="service">
              <header>
                <div>
                  <Image src={cleanerTool} alt="commercial photo" />
                </div>
                <div>
                  <strong>commercial</strong>
                </div>
              </header>
              <div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </section>

        <section id="our-services" className={styles.aboutSection}>
          <div>
            <h2>Our services</h2>
            <h3>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English. Many
              desktop publishing packages.
            </h3>
          </div>
          <hr />
        </section>
      </main>
    </div>
  );
}
