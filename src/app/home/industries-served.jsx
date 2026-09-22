"use client";
import Image from "next/image";
import styles from "@/styles/home/industries-served.module.scss";

const industriesData = [
  {
    id: "military",
    title: "Military and defense",
    image: "/home/figma/industry-military.png",
    description:
      "We equip defense forces with tactical communications solutions that deliver secure interoperability across multi-band radios and IP networks. From field deployments to command centers, our rugged, MIL-STD compliant, and mission-ready technologies sustain uninterrupted communication and situational awareness.",
  },
  {
    id: "aerospace-1",
    title: "Aerospace and aviation",
    image: "/home/figma/industry-aerospace-jet.png",
    description:
      "Parraid supports flight test and aerospace programs with telemetry data systems that ensure precise data capture and real-time performance analysis. Our systems integrate seamlessly with existing range instrumentation, enabling faster mission validation and enhanced operational efficiency.",
  },
  {
    id: "aerospace-2",
    title: "Aerospace and aviation",
    image: "/home/figma/industry-aerospace-telemetry.png",
    description:
      "Government and federal operators rely on Parraid’s deployable communication products to maintain connectivity in high-demand, time-sensitive missions. Our solutions provide scalable, secure data and voice transmission, ensuring information flow and command coordination wherever duty calls.",
  },
  {
    id: "rd-orgs",
    title: "R&D organizations",
    image: "/home/figma/industry-rd-orgs.png",
    description:
      "Research and development institutions trust Parraid’s telemetry data systems for data acquisition, testing, and simulation environments. Our high-fidelity systems support experimentation, post-processing, and performance validation critical to innovation and technological advancement.",
  },
];

export default function IndustriesServed() {
  return (
    <section className={styles.industriesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>industries served</h2>
        <div className={styles.cardsGrid}>
          {industriesData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={styles.cardImg}
                />
                <div className={styles.hoverOverlay}>
                  <p className={styles.hoverText}>{item.description}</p>
                </div>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
