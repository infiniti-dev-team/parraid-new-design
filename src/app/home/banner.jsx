"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/home/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BannerPoster from "media/home/HomeBanner.webp";
import Image from "next/image";
import SingleButton from "@/src/app/components/singlebutton";

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={12} lg={10} xl={8} className="my-auto">
            <div className={styles.bannerText}>
              <h1>
                ADVANCING TELEMETRY & COMMUNICATIONS FOR CRITICAL MISSIONS
              </h1>
              <p>
                Delivering dependable, high-performance data and communication solutions that connect air, land, sea, and space. Parraid empowers
                aerospace, defense, and government teams to operate with
                precision, speed, and confidence.
              </p>
              <SingleButton link="#Contact" txt="Let’s Talk Solutions" />
            </div>
          </Col>
        </Row>
      </Container>
      {!showVideo ? (
        <div className={styles.bannerVideo}>
          <Image
            src={BannerPoster.src}
            alt="Banner background"
            decoding="async"
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className={styles.bannerVideo}>
          <video
            autoPlay
            muted
            loop
            preload="none"
            aria-label="Background video"
            playsInline
            poster={BannerPoster.src}
          >
            <source src="/videos/homeVideo.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </section>
  );
};

export default Banner;
