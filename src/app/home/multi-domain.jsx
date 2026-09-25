"use client";
import Image from "next/image";
import styles from "@/styles/home/multi-domain.module.scss";

export default function MultiDomain() {
  const handleScrollToContact = () => {
    const contactSection =
      document.getElementById("Contact") ||
      document.getElementById("contact") ||
      document.getElementById("contact-form");
    if (contactSection) {
      const headerOffset = 112;
      const elementPosition =
        contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
    }
  };

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
          <button
            type="button"
            onClick={handleScrollToContact}
            className={styles.ctaBtn}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
