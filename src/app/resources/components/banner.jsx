import styles from "@/styles/products/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="my-auto">
            <span>Resources</span>
            {/* <div className={styles.paraSec}>
              <p>
                Parraid, is a highly regarded, U.S. based technology and
                engineering company specializing in product solutions for
                aerospace and ground tactical applications.
              </p>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
