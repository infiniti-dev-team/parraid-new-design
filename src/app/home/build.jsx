import styles from "@/styles/home/build.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import TwoButton from "@/src/app/components/twobutton";
import BGIMG from "media/home/buildImage.webp";

const Build = ({ about }) => {
  return (
    <section
      className={`${styles.buildSection} ${about ? styles.aboutBuild : ""}`}
    >
      <Container>
        <Row>
          <Col md={12}>
            <h4>
              Design • Build • Support
              <span>About Parraid</span>
            </h4>
            <p>
              At Parraid, we engineer tactical communications solutions and telemetry data systems that deliver dependable performance where it matters most. Headquartered in Hollywood, Maryland, we combine three decades of experience in aerospace, defense, and ground tactical applications to design, build, and support products that keep missions connected. Our expertise spans deployable communication products, Telemetry Data Systems (TDS), and Everything over IP (EoIP) architectures, enabling seamless data transmission, secure interoperability, and mission assurance across every environment. From initial concept to field deployment, Parraid ensures rapid acquisition, scalable integration, and full lifecycle support, empowering our customers to operate with precision, reliability, and confidence.
            </p>
          </Col>
          <Col
            md={12}
            className={styles.buildBackground}
            style={{ backgroundImage: `url('${BGIMG.src}')` }}
          >
            <div className={styles.buildBox}>
              <div className={styles.tit}>
                <h2>FROM DESIGN TO DEPLOYMENT – BUILT FOR MISSION SUCCESS</h2>
              </div>
              <div className={styles.txt}>
                <p>
                  Parraid’s deployable communication products empower defense, aerospace, and government teams to connect, coordinate, and command with total confidence — whether on the ground, in the air, or across maritime and remote networks. Our telemetry and data systems come from over 30 years of heritage that has grown to provide some of the world’s most feature-rich, ground-based data processing and recording systems for use across all data processing applications.
                </p>
                <TwoButton link1="/about-us" link2="#Contact" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Build;
