import styles from "@/styles/products/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="my-auto">
            <span>Our Careers</span>
            {/* <div className={styles.paraSec}>
              <p>
                Parraid, is a highly regarded, U.S. based technology and
                engineering company specializing in product solutions for
                aerospace and ground tactical applications.
              </p>
            </div> */}
            <div className={styles.paraSec}>
              <p>
                All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or status as a protected veteran.
              </p>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
