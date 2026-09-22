"use client";
import Image from "next/image";
import styles from "@/styles/home/legacy-trust.module.scss";

const baseLogos = [
  { id: 1, name: "Logitech", src: "/home/figma/logo-logitech.svg", width: 177, height: 54 },
  { id: 2, name: "NVIDIA", src: "/home/figma/logo-nvidia.svg", width: 241, height: 45 },
  { id: 3, name: "Logitech", src: "/home/figma/logo-logitech.svg", width: 177, height: 54 },
  { id: 4, name: "NVIDIA", src: "/home/figma/logo-nvidia.svg", width: 241, height: 45 },
  { id: 5, name: "Logitech", src: "/home/figma/logo-logitech.svg", width: 177, height: 54 },
  { id: 6, name: "NVIDIA", src: "/home/figma/logo-nvidia.svg", width: 241, height: 45 },
];

export default function LegacyTrust() {
  // Seamless loop with 2 mirrored sets
  const displayLogos = [...baseLogos, ...baseLogos];

  return (
    <section className={styles.legacyTrustSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>A Legacy of trust</h2>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {displayLogos.map((logo, idx) => (
            <div key={`${logo.name}-${idx}`} className={styles.logoItem}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
