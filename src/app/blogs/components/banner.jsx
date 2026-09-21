import styles from "@/styles/products/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="my-auto">
            <span>Our blogs</span>
            {/* <div className={styles.paraSec}>
              <p>
               Explore expert insights on telemetry systems, tactical communications, and defense technology. Our blog delivers in-depth analysis of flight test operations, network solutions, and mission-critical innovations shaping the aerospace and defense industry.
              </p>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
