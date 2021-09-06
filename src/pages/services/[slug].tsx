import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ContractSpecification } from "../../components/ContractSpecification";
import { ServiceGroup } from "../../components/ServiceGroup";
import styles from "../../styles/pages/Services.module.scss";

type ServiceType = {
  id: string;
  title: string;
  why?: string;
  content: string;
  preContent?: string;
  preTitle?: string;
  config: {
    imageUrl: string;
  };
};
type ServiceComponentProps = {
  service: ServiceType;
};

export default function Services({ service }: ServiceComponentProps) {
  const [slug] = useState<ServiceType>(service);

  useEffect(() => {}, [slug]);

  if (!slug) {
    return <h1>Service not found</h1>;
  }

  return (
    <div>
      <Head>
        <title>{slug.title} | Elma cleaning</title>
        <meta name="description" content="Elma, Commercial cleaning services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <div>
          <div>
            <h1 className={styles.text}>{slug.title}</h1>
            <ContractSpecification />
          </div>
        </div>
        <section className={styles.contentContainer}>
          <div className={styles.content}>
            <aside>
              <div>
                <Image
                  src={slug.config.imageUrl}
                  alt="cleaning service"
                  width="600"
                  height="400"
                />
              </div>
            </aside>
            <div>
              {!!slug.why && <h3>{slug.why}</h3>}
              <p>{slug.content}</p>
              {!!slug.preTitle && <h3>{slug.preTitle}</h3>}
              <p>{slug?.preContent}</p>
            </div>
          </div>
        </section>

        <ServiceGroup />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;

  const services = [
    {
      id: "office-cleaning",
      title: "Office Cleaning Service",
      why: "Why you need office cleaning services",
      content:
        "Office spaces contain numerous high-touch surfaces like door knobs, chairs, light switches, keyboards and computer mice, coffee makers, microwaves, faucet handles, toilet flush handles — these surfaces, as well as various other high-touch surfaces, accumulate a lot of germs! That’s why these surfaces have to be cleaned regularly, and it makes sense to offload this duty onto professionals that can handle everything for you during off-work hours. By allowing trained crew members to scour every inch of your office, you keep your workspace in pristine condition without getting in the way of your team’s productivity.",
      preContent:
        "An office space that is clean and sparkling the next morning also provides a fresh start for employees to gear up for a comfortable and productive work day, unhindered by debris, mess, or possibly harmful germs. Like clothing, every visual component of a business, including its workspace, is a reflection of how it conducts itself professionally. Using a professional commercial cleaning company to keep your office clean allows you to put your best foot forward for your staff and for any clients that may come through the door.",
      config: {
        imageUrl:
          "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsZWFuaW5nJTIwb2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      id: "pharmacy",
      title: "Pharmacy",
      why: "why do you need medical and pharmacy consultant cleaning services",
      content:
        "Medical office cleaning involves the thorough cleaning of medical office spaces like clinics, doctor offices, dental offices, and more. When patients and other visitors enter your medical space, they expect to enter an environment that builds trust and reflects the high hygiene and sanitation standards of the medical profession. Keeping your medical office looking professional, clean, organized is essential for delivering the kind of experience your guests will expect.   A spotless medical office gives patients and visitors the peace of mind they need to feel comfortable entrusting their health and wellbeing to you. Best of all, ensuring your office consistently maintains that spotless and sanitary appearance can be easy if you have a professional cleaning company to take care of it for you.",
      config: {
        imageUrl:
          "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      id: "store-cleaning",
      title: "Store Cleaning",
      why: "Why you need store cleaning services",
      content:
        "When people walk into a store, the first thing they will notice is the cleanliness. After all, the store is the physical space of your business, the place where customers touch base with the services, products, and people representing your organization. Part of running a store is curating the shopping experience from start to finish, including taking into account the retail or store cleaning considerations necessary for a great customer experience.   The impression you make on clean-conscious customers is often the deciding factor as to whether they choose to come in, stay, and make a purchase. No shopper wants to enter a space that has sticky floors, dusty shelves, and a general lack of care for the messes that will naturally accumulate within a shop. A messy, dirty store immediately makes the wrong impression and turns potential buyers into definite leavers. Dirty windows and messy interiors will actively discourage the reactions you want at the crucial decision points",
      config: {
        imageUrl:
          "https://images.unsplash.com/photo-1601160458000-2b11f9fa1a0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xlYW5pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      id: "cleaning-and-construction",
      title: "Post Construction & Renovation Cleaning Services",
      why: "Why you need Construction services",
      content:
        "Even before the dust settles we are there to help with any Construction Cleaning needs. Dust removal before painting, garbage removal, pressure washing or anything else you may need Life Maid Easy is there to get the job done. You can trust us to bring out the brilliance and shine in your new building project. Let us transform your construction site into the clean and beautiful master piece you created.",
      config: {
        imageUrl:
          "https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      },
    },
    {
      id: "nursey-and-school",
      title: "Nursery and school",
      why: "Cleaning school and daycare",
      content:
        "Daycare centres and schools present a unique cleaning challenge because they are a space where inhabitants are often actively encouraged to get down and dirty, learning through touch and interaction with various objects, playgrounds, and surfaces the children have at their disposal. Enriching children’s lives at schools and day cares means allowing them to be free in a space where they can express themselves and be physical, often on the floor.   Once all the children and staff go home for the day, someone needs to be there cleaning up the mess that’s left and ensuring all surfaces are thoroughly cleaned by the next morning. A professional daycare and school cleaning company is the most reliable choice for ensuring that the children's’ spaces are consistently kept impeccably clean.",
      config: {
        imageUrl:
          "https://images.unsplash.com/photo-1564429097439-e400382dc893?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      },
    },
    {
      id: "complete-house-cleaning",
      title: "Complete house cleaning",
      why: "Why you need residencial cleaning services",
      content:
        "Life Maid Easy offers complete condo, apartment and house cleaning services by professional cleaners. Our environmentally responsible cleaning services has been one of the main reasons customers pick Life Maid Easy over others in the same industry.",
      preTitle: "Living Room and Office",
      preContent:
        "Living rooms are one of the busiest places in your home, so they easily become cluttered and dirty. Keeping it clean is a daily task but often times we miss certain spots. This is where we come in! Our ladies are trained to clean from “top to bottom, left to right” to clear cobwebs, clean light fixtures and ceiling fans, and more.",
      config: {
        imageUrl:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
    },
  ];

  const serviceIndex = services.findIndex(
    (service) => service.id === String(slug).trim()
  );
  const service = services[serviceIndex];

  return {
    props: {
      service,
    },
  };
};
