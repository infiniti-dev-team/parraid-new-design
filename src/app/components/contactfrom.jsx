"use client";
import { useEffect, useState } from "react";
import { EmailIcon, PhoneIcon } from "@/src/app/app-constants";
import styles from "@/styles/home/contactfrom.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BannerPoster from "media/home/contactBG.webp";
import ContactForm from "@/src/app/components/forms/contactform";
import Image from "next/image";

const ContactFrom = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <section className={`${styles.contactFormSection}`} id="Contact">
      <Container className={styles.contactBg}>
        <Row>
          <Col md={12} lg={4}>
            <div className={styles.contactTxt}>
              <h2>CONTACT PARRAID</h2>
              <p>
                <strong>Connect With Our Team</strong>
                <br /> <br />
                All Parraid systems are designed, built, and supported in the
                United States. Our team of engineers and specialists provides
                continuous technical support to ensure mission reliability and
                customer success.
              </p>
              <ul className={styles.footerWapper}>
                <li>
                  <div className={styles.footerInfo}>
                    <PhoneIcon /> Phone Number
                    <a href="tel:+13016900690">+1 (301) 690-0690</a>
                  </div>
                </li>
                <li>
                  <div className={styles.footerInfo}>
                    <EmailIcon /> Email
                    <a href="mailto:sales@parraid.com">sales@parraid.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={12} lg={7} className="offset-lg-1">
            <div className={styles.contactFrom}>
              <ContactForm />
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

export default ContactFrom;
