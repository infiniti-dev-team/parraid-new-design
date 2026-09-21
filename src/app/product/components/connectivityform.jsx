import styles from "@/styles/about/connectivity.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "@/src/app/components/forms/contactform";
import Image from "next/image";
import BGIMG from "media/about/innerservices.webp";
const ConnectivityForm = () => {
  return (
    <>
      <section className={`${styles.connectivitySec}  borderRadiusTop`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={styles.connectivityTitle}>
                <h2>Next-Gen Telemetry & Connectivity.</h2>
                <p>
                  Powering secure, real-time data transmission across land, sea,
                  and sky. Our solutions are engineered for precision,
                  reliability, and mission success.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} id="ContactFrom" className={styles.contactFrom}>
              <ContactForm product={true} />
            </Col>
            <Col md={6}>
              <div className={styles.bgImage}>
                <Image
                  src={BGIMG.src}
                  alt="Next-Gen Telemetry & Connectivity"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ConnectivityForm;
