import styles from "@/styles/products/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="my-auto">
            <span>Thank You</span>
            <div className={styles.paraSec}>
              <p>
                Our team is reviewing your details and will get back to you shortly. If you want to explore more about what we do or just want to know a bit more, feel free to take a look around!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
