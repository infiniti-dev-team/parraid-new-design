"use client";
import { useState } from "react";
import styles from "@/styles/home/faqs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { PlusIcon } from "@/src/app/app-constants";

export const faqsData = [
  {
    title: "What industries does Parraid serve?",
    txt: (
      <p>
        Parraid works with aerospace, defense, government, and research
        organizations that depend on real-time data and secure communications.
        Our products are engineered to meet the unique operational needs of
        mission-critical and tactical environments.
      </p>
    ),
  },
  {
    title: "How do Parraid’s telemetry solutions enhance data operations?",
    txt: (
      <p>
        Our telemetry data systems enable accurate data acquisition,
        recording, and playback across test ranges and aerospace applications.
        With IRIG-106 compliance and TMoIP support, we deliver precise insights
        for faster mission validation and system performance analysis.
      </p>
    ),
  },
  {
    title: "What makes Parraid’s communications solutions “tactical”?",
    txt: (
      <p>
        Parraid’s tactical communications solutions are designed for
        interoperability and resilience. They integrate seamlessly with
        multi-band radios, SATCOM, and IP-based networks to maintain command,
        control, and situational awareness in any field condition.
      </p>
    ),
  },
  {
    title: "Are your communication products deployable in the field?",
    txt: (
      <p>
        Yes. Our deployable communication products are lightweight, ruggedized,
        and MIL-STD compliant, ideal for rapid setup and sustained connectivity
        in mobile or remote missions.
      </p>
    ),
  },
  {
    title: "Can Parraid customize solutions for specific mission requirements?",
    txt: (
      <p>
        Absolutely. We work closely with our customers to design and configure
        systems tailored to their operational goals. Whether upgrading existing
        telemetry infrastructure or developing a fully deployable communication
        suite, we ensure seamless integration and lifecycle support.
      </p>
    ),
  },
  {
    title: "Where are Parraid systems designed and supported?",
    txt: (
      <p>
        All Parraid systems are designed, built, and supported in the United
        States. Our team of engineers and specialists provides continuous
        technical support to ensure mission reliability and customer success.
      </p>
    ),
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className={`${styles.faqsSection} `}>
      <Container className={styles.faqWapper}>
        <Row>
          <Col md={6} lg={6} xl={5}>
            <h2>Frequently Asked Questions</h2>
            <p>
              Parraid provides tactical communications solutions, telemetry data systems, and deployable communication products
              that support mission-critical operations around the globe. Below
              are some of the most common questions about our technology,
              services, and support.
            </p>
          </Col>
          <Col md={6} lg={6} xl={6} className="offset-xl-1">
            {faqsData.map((items, index) => (
              <div
                className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""
                  }`}
                key={index}
              >
                <div
                  className={styles.faqsTitle}
                  onClick={() => toggleFaq(index)}
                >
                  {items.title}
                  <div
                    className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""
                      }`}
                  >
                    <PlusIcon />
                  </div>
                </div>
                <div className={styles.faqscontent}>{items.txt}</div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
