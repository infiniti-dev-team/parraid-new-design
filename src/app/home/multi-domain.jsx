"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/home/multi-domain.module.scss";

export default function MultiDomain() {
  return (
    <section className={styles.multiDomainSection}>
      {/* High-res UAV Drone Background */}
      <Image
        src="/home/figma/drone-multi-domain.png"
        alt="Multi-Domain Defense UAV"
        fill
        sizes="100vw"
        priority={false}
        className={styles.bgImage}
      />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.headline}>
            MULTI-DOMAIN
            <br />
            BY DESIGN
          </h2>
          <p className={styles.description}>
            Solutions engineered to excel in a spectrum of demanding environments.
          </p>
          <Link href="/about-us" className={styles.ctaBtn}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
