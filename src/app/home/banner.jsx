"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/home/banner.module.scss";
import BannerPoster from "media/home/HomeBanner.webp";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
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
      window.history.pushState(null, "", "#Contact");
    }
  };

  return (
    <section className={styles.bannerSection}>
      {/* Full Bleed Background Video / Poster */}
      {!showVideo ? (
        <div className={styles.bannerVideo}>
          <Image
            src={BannerPoster.src}
            alt="Parraid Critical Missions Banner background"
            decoding="async"
            priority
            fill
            sizes="100vw"
            className={styles.bannerMedia}
          />
        </div>
      ) : (
        <div className={styles.bannerVideo}>
          <video
            autoPlay
            muted
            loop
            preload="metadata"
            aria-label="Background telemetry video"
            playsInline
            poster={BannerPoster.src}
            className={styles.bannerMedia}
          >
            <source src="/videos/homeVideo.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Hero Content - 100% matched to Figma node 2:626 & 7:320 */}
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContent}>
          <h1 className={styles.heroHeading}>ENGINEERING WITHOUT LIMITS</h1>
          <div className={styles.heroBottomRow}>
            <p className={styles.heroDescription}>
              Parraid® is a U.S. defense engineering company specializing in tactical
              communications and telemetry data systems for critical environments. We
              design, manufacture, and support telemetry and radio interoperability
              solutions that enable reliable communications across defense test ranges,
              operational deployments, and decentralized networks. Trusted by prime
              contractors and allied partners, our products are engineered to deliver
              solutions that improve situational awareness, interoperability, and
              mission success.
            </p>
            <div className={styles.heroBtnWrapper}>
              <Link
                href="#Contact"
                onClick={handleScrollToContact}
                className={styles.heroConnectBtn}
              >
                Let’s Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
