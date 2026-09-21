
"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/about/connectivity.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import BannerPoster from "media/home/contactBG.webp"
import Image from "next/image";

const ConnectivityVideo = () => {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowVideo(true);
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <section className={`${styles.connectivitySec}  borderRadiusTop`}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.connectivityTitle}>
                                <h2>Next-Gen Telemetry & Connectivity.</h2>
                                <p>Parraid delivers next-generation telemetry solutions for real-time data transmission across land, air, sea, and space. Our resilient systems ensure secure, uninterrupted communication for mission-critical operations.</p>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className={styles.connectivityVideo}>
                                {!showVideo ? (
                                    <div className={styles.bannerVideo}>
                                        <Image
                                            src={BannerPoster.src}
                                            alt="Banner background"
                                            decoding="async"
                                            loading="lazy"
                                            fill
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    )
}

export default ConnectivityVideo