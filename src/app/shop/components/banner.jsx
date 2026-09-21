import styles from "@/styles/products/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="my-auto">
            <span>Our Products</span>
            {/* <div className={styles.paraSec}>
              <p>
               Parraid, LLC is a highly regarded, U.S.-based, technology and engineering company specializing in product solutions for aerospace and ground tactical applications. Our product offerings include telemetry data systems (TDS), deployable tactical communication systems, and net-centric everything over IP products. From expedited acquisition to rapid fielding and execution, our mission-critical solutions enable our customers to transform, evolve, and modernize.
              </p>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
