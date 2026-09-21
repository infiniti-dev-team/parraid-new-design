"use client";
import { useEffect, useState } from "react";
import BannerPoster from "media/home/contactBG.webp";
import styles from "@/styles/home/vision.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import SingleButton from "@/src/app/components/singlebutton";
import Image from "next/image";

const Vision = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <section className={`${styles.visionSection} borderRadiusTop`}>
      <Container className={styles.visionBG}>
        <Row className="h-100">
          <Col md={12} className="h-100">
            <div className={styles.visionBox}>
              <div className={`${styles.visionTxt} text-center`}>
                <h2>Our Mission</h2>
                <p>
                  At Parraid, our mission is to empower organizations with
                  the tactical communications solutions and telemetry data systems they need to achieve seamless
                  operational readiness across every domain — air, land, sea,
                  and space.
                </p>
                <SingleButton link="/about-us" txt="Read More" />
              </div>
            </div>
          </Col>
        </Row>
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
              <source src="/videos/visionVideo.mp4" type="video/mp4" />
            </video>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Vision;
