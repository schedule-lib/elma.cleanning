import Head from "next/head";

import { ContractSpecification } from "../../components/ContractSpecification";
import { ServiceGroup } from "../../components/ServiceGroup";
import ServicesModule from "../../components/ServicesModule";
import styles from "../../styles/pages/ServicePage.module.scss";

export default function ServicesPage() {
  return (
    <div>
      <Head>
        <title>All Services | Elma cleaning</title>
        <meta name="description" content="Elma, Commercial cleaning services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <div>
          <div>
            <h1>all our services</h1>
            <ContractSpecification />
          </div>
        </div>

        <ServiceGroup />
        <ServicesModule />
      </main>
    </div>
  );
}
