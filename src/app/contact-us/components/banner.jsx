import styles from "@/styles/products/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="my-auto">
            <span>CONTACT Us</span>
            {/* <div className={styles.paraSec}>
              <p>
                At Parraid, we believe communication starts with connection. Whether you’re seeking technical specifications, partnership opportunities, or system integration guidance, our team is ready to assist.
              </p>
              <p>From initial consultation to post-deployment support, every conversation with Parraid is built on precision, reliability, and trust — the same principles that drive our mission-critical communication systems.</p>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
