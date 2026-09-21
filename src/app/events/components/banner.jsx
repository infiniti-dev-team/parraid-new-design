import styles from "@/styles/products/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="my-auto">
            <span>
              Our <br />
              Events
            </span>
            <div className={styles.paraSec}>
              <p>
                At Parraid, we bring innovation to the forefront of every event we attend. Our participation in global defense, aerospace, and telemetry conferences reflects our commitment to advancing mission-critical communication technologies that redefine connectivity, data accuracy, and operational readiness.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
