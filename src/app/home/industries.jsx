import styles from "@/styles/home/industries.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import SingleButton from "@/src/app/components/singlebutton";
import IMG01 from "media/industries/1.webp";
import IMG02 from "media/industries/2.webp";
import IMG03 from "media/industries/3.webp";
import IMG04 from "media/industries/4.webp";

const data = [
  {
    title: "Aerospace and aviation",
    txt: "Parraid supports flight test and aerospace programs with telemetry data systems that ensure precise data capture and real-time performance analysis. Our systems integrate seamlessly with existing range instrumentation, enabling faster mission validation and enhanced operational efficiency.",
    img: IMG01.src,
  },
  {
    title: "Military and defense",
    txt: "We equip defense forces with tactical communications solutions that deliver secure interoperability across multi-band radios and IP networks. From field deployments to command centers, our rugged, MIL-STD compliant, and mission-ready technologies sustain uninterrupted communication and situational awareness.",
    img: IMG02.src,
  },
  {
    title: "Government and federal agencies",
    txt: "Government and federal operators rely on Parraid’s deployable communication products to maintain connectivity in high-demand, time-sensitive missions. Our solutions provide scalable, secure data and voice transmission, ensuring information flow and command coordination wherever duty calls.",
    img: IMG03.src,
  },
  {
    title: "R&D organizations",
    txt: "Research and development institutions trust Parraid’s telemetry data systems for data acquisition, testing, and simulation environments. Our high-fidelity systems support experimentation, post-processing, and performance validation critical to innovation and technological advancement.",
    img: IMG04.src,
  },
];

const Industries = () => {
  return (
    <section className={`${styles.industriesSection} p-100`}>
      <Container>
        <Row>
          <Col md={8} lg={7}>
            <h2>Industries Served</h2>
            <p>
              Parraid delivers mission-critical technology to organizations
              operating across air, land, sea, and cyber domains. Our tactical
              communications solutions, telemetry data systems, and
              deployable communication products empower customers to connect,
              monitor, and command with absolute confidence.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className={styles.industriesWapper}>
              {data.map((item, index) => (
                <div className={styles.industriesItem} key={index}>
                  <Image src={item.img} alt="IMG01" fill />
                  <div className={styles.title}>
                    <h3>{item.title}</h3>
                  </div>
                  <div className={styles.txt}>
                    <p>{item.txt}</p>
                    <SingleButton link="#Contact" whitebg={true} />
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Industries;
