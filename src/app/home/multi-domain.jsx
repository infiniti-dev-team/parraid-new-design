"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/home/multi-domain.module.scss";

// Exact 5 background images cycling order:
// 1. Dirt -> 2. Ocean -> 3. Mars Surface -> 4. Sky -> 5. Circuit board
const domainImages = [
  {
    id: "dirt",
    src: "/home/multi-domain/dirt.webp",
    alt: "Multi-Domain Ground and Land Environments (Dirt)",
  },
  {
    id: "ocean",
    src: "/home/multi-domain/ocean.webp",
    alt: "Multi-Domain Maritime Operations (Ocean)",
  },
  {
    id: "mars",
    src: "/home/multi-domain/mars-surface.webp",
    alt: "Multi-Domain Space and Planetary Environments (Mars Surface)",
  },
  {
    id: "sky",
    src: "/home/multi-domain/sky.webp",
    alt: "Multi-Domain Aerial and Airborne Missions (Sky)",
  },
  {
    id: "circuit-board",
    src: "/home/multi-domain/circuit-board.webp",
    alt: "Multi-Domain Cyber, Telemetry and Embedded Technology (Circuit board)",
  },
];

export default function MultiDomain() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change background images every 3 seconds continuously without stopping
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % domainImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

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
    <section className={styles.multiDomainSection} aria-label="Multi-Domain By Design">
      {/* 5 Background Images Cycling Auto Every 3 Seconds */}
      <div className={styles.slidesContainer}>
        {domainImages.map((img, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={img.id}
              className={`${styles.slideItem} ${
                isActive ? styles.slideActive : styles.slideInactive
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                priority={idx === 0}
                className={styles.bgImage}
              />
            </div>
          );
        })}
      </div>

      {/* Exposure Lowering Dark Overlay (Exact 0.55 opacity as in Figma) */}
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
