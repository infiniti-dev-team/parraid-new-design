"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/home/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
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

      {/* Hero Bottom Content */}
      <Container className={styles.bannerContainer}>
        <Row className="align-items-end">
          <Col lg={9} xl={9}>
            <div className={styles.bannerText}>
              <h1 className={styles.heroHeading}>ENGINEERING WITHOUT LIMITS</h1>
              <p className={styles.heroDescription}>
                Parraid® is a U.S. defense engineering company specializing in tactical
                communications and telemetry data systems for critical environments. We
                design, manufacture, and support telemetry and radio interoperability
                solutions that enable reliable communication across defense test ranges,
                operational deployments, and decentralized networks. Trusted by prime
                contractors and allied partners, our products are engineered to deliver
                solutions that improve situational awareness, interoperability, and
                mission success.
              </p>
            </div>
          </Col>
          <Col lg={3} xl={3} className="text-lg-end text-start mt-3 mt-lg-0">
            <div className={styles.heroBtnWrapper}>
              <Link href="/contact-us" className={styles.heroConnectBtn}>
                LET&apos;S CONNECT
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
