import styles from "@/styles/products/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="my-auto">
            <span>Press Releases</span>
            {/* <div className={styles.paraSec}>
              <p>
               At Parraid, LLC, we design and engineer advanced telemetry, tactical, and deployable communication systems that shape the future of mission-critical connectivity. Our press releases provide insight into the breakthroughs, partnerships, and technological advancements that continue to drive secure and reliable communication across air, land, sea, and space.
              </p>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
